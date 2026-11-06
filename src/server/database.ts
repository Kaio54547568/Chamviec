import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

export function getDatabaseConfig(
  env: Record<string, string | undefined> = process.env,
) {
  const url = (env.SUPABASE_URL || env.VITE_SUPABASE_URL || "").trim();
  const key = (
    env.SUPABASE_SECRET_KEY ||
    env.SUPABASE_SERVICE_ROLE_KEY ||
    ""
  ).trim();
  const unavailable = () =>
    Object.assign(
      new Error(
        "Máy chủ chưa được cấu hình kết nối cơ sở dữ liệu. Vui lòng liên hệ quản trị viên.",
      ),
      { status: 503, code: "DATABASE_NOT_CONFIGURED" },
    );
  if (!url || !key || key.startsWith("sb_publishable_")) throw unavailable();
  try {
    const parsed = new URL(url);
    if (!["https:", "http:"].includes(parsed.protocol)) throw new Error();
  } catch {
    throw unavailable();
  }
  return { url, key };
}
export function database() {
  const { url, key } = getDatabaseConfig();
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
export async function authenticatedUser(req: any, admin = false) {
  const token = String(req.headers?.authorization || "").replace(
    /^Bearer /,
    "",
  );
  if (!token)
    throw Object.assign(new Error("Vui lòng đăng nhập để thao tác."), {
      status: 401,
    });
  const db = database();
  const { data, error } = await db.auth.getUser(token);
  if (error || !data.user)
    throw Object.assign(new Error("Phiên đăng nhập hết hạn."), { status: 401 });
  const { data: role, error: roleError } = await db
    .from("user_roles")
    .select("role")
    .eq("user_id", data.user.id)
    .maybeSingle();
  if (roleError)
    throw new Error("Database chưa sẵn sàng. Vui lòng chạy migration.");
  if (admin && role?.role !== "admin")
    throw Object.assign(new Error("Bạn không có quyền quản trị."), {
      status: 403,
    });
  return { ...data.user, role: role?.role || "user" };
}
export function checked<T extends { error: any; data: any }>(result: T): any {
  if (result.error) {
    console.error("[database]", { code: result.error.code });
    throw new Error(
      "Không thể xử lý dữ liệu. Vui lòng kiểm tra cấu hình database.",
    );
  }
  return result.data;
}
export function endpoint(fn: (req: any, res: any) => Promise<any>) {
  return async (req: any, res: any) => {
    res.setHeader("Cache-Control", "no-store");
    if (req.method === "OPTIONS") return res.status(204).end();
    try {
      return await fn(req, res);
    } catch (e: any) {
      const status = e.status || 500,
        code =
          e.code === "DATABASE_NOT_CONFIGURED"
            ? "DATABASE_NOT_CONFIGURED"
            : status >= 500
              ? "SERVER_REQUEST_FAILED"
              : "REQUEST_REJECTED";
      console.error("[api]", { status, code });
      return res
        .status(status)
        .json({
          success: false,
          code,
          message: e.status
            ? e.message
            : "Máy chủ tạm thời không xử lý được yêu cầu. Vui lòng thử lại sau hoặc liên hệ quản trị viên.",
        });
    }
  };
}
