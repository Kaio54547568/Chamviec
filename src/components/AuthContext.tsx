import React, { createContext, useContext, useEffect, useState } from "react";
import { authFetch, currentSession, setSession } from "../utils/authSession";
import { useLanguage } from "../i18n/LanguageContext";

const Context = createContext<{
  user: any;
  ready: boolean;
  requireLogin: () => boolean;
  logout: () => void;
}>({ user: null, ready: false, requireLogin: () => false, logout: () => {} });
export const useAuth = () => useContext(Context);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const vi = language === "vi";
  const [user, setUser] = useState<any>(null),
    [ready, setReady] = useState(false),
    [open, setOpen] = useState(false),
    [signup, setSignup] = useState(false);
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [message, setMessage] = useState(""),
    [busy, setBusy] = useState(false);
  function serverMessage(data: any, status: number) {
    if (data?.code === "DATABASE_NOT_CONFIGURED")
      return vi
        ? "Máy chủ chưa được cấu hình kết nối dữ liệu. Vui lòng liên hệ quản trị viên."
        : "The server database connection is not configured. Please contact the administrator.";
    if (status >= 500)
      return vi
        ? "Máy chủ đang gặp lỗi kết nối dữ liệu. Vui lòng thử lại sau hoặc liên hệ quản trị viên."
        : "The server is having a data connection problem. Please try again later or contact the administrator.";
    return (
      data?.message ||
      (vi
        ? "Không thể đăng nhập. Vui lòng thử lại."
        : "Unable to sign in. Please try again.")
    );
  }
  async function load() {
    try {
      if (!currentSession()) return;
      const response = await authFetch("/api/account");
      const data = await response.json().catch(() => null);
      if (!response.ok) {
        if (response.status === 401) {
          setSession(null);
          setUser(null);
        }
        throw new Error(serverMessage(data, response.status));
      }
      if (!data?.user) throw new Error(serverMessage(null, 500));
      setUser(data.user);
    } finally {
      setReady(true);
    }
  }
  useEffect(() => {
    void load().catch(() => {});
  }, []);
  function logout() {
    setSession(null);
    setUser(null);
  }
  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    try {
      const response = await fetch(
        `/api/account?action=${signup ? "signup" : "login"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email.trim(), password }),
        },
      );
      const data = await response.json().catch(() => null);
      if (!response.ok || !data)
        throw new Error(serverMessage(data, response.status));
      if (data.session) {
        setSession(data.session);
        await load();
        setOpen(false);
        setPassword("");
      } else
        setMessage(
          vi
            ? "Hãy mở email xác nhận tài khoản, sau đó quay lại đăng nhập."
            : "Please confirm your email, then return to sign in.",
        );
    } catch (error: any) {
      setMessage(
        error.message ||
          (vi ? "Không thể kết nối máy chủ." : "Unable to reach the server."),
      );
    } finally {
      setBusy(false);
    }
  }
  function close() {
    if (!busy) {
      setOpen(false);
      setPassword("");
      setMessage("");
    }
  }
  return (
    <Context.Provider
      value={{
        user,
        ready,
        requireLogin: () => {
          if (user) return true;
          setOpen(true);
          return false;
        },
        logout,
      }}
    >
      <div className="account-strip">
        {user ? (
          <>
            <span>
              {user.email}
              {user.role === "admin"
                ? vi
                  ? " · Quản trị viên"
                  : " · Administrator"
                : ""}
            </span>
            <button onClick={logout} className="underline">
              {vi ? "Đăng xuất" : "Sign out"}
            </button>
          </>
        ) : (
          <button
            disabled={!ready}
            onClick={() => setOpen(true)}
            className="font-bold text-teal-800"
          >
            {vi ? "Đăng nhập / Đăng ký" : "Sign in / Sign up"}
          </button>
        )}
      </div>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="auth-title"
          onKeyDown={(event) => {
            if (event.key === "Escape") close();
          }}
        >
          <form
            onSubmit={submit}
            className="bg-white rounded-2xl p-6 w-full max-w-md space-y-4 max-h-[90dvh] overflow-y-auto"
          >
            <div className="flex justify-between items-center gap-4">
              <h2 id="auth-title" className="font-bold text-xl">
                {signup
                  ? vi
                    ? "Đăng ký tài khoản"
                    : "Create an account"
                  : vi
                    ? "Đăng nhập"
                    : "Sign in"}
              </h2>
              <button
                type="button"
                disabled={busy}
                aria-label={vi ? "Đóng" : "Close"}
                onClick={close}
                className="min-w-11 min-h-11"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-slate-600">
              {vi
                ? "Bạn có thể xem nội dung tự do. Đăng nhập để khảo sát, lưu hồ sơ và đăng ký trải nghiệm."
                : "Browse freely. Sign in to take assessments, save your profile and register for experiences."}
            </p>
            <label className="block">
              Email
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="username"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                inputMode="email"
                className="border rounded-lg p-3 w-full text-base"
              />
            </label>
            <label className="block">
              {vi ? "Mật khẩu" : "Password"}
              <input
                type="password"
                name="password"
                minLength={8}
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete={signup ? "new-password" : "current-password"}
                className="border rounded-lg p-3 w-full text-base"
              />
            </label>
            {message && (
              <p role="alert" className="text-sm text-rose-700">
                {message}
              </p>
            )}
            <button
              disabled={busy}
              className="bg-teal-700 text-white rounded-lg p-3 w-full min-h-11 disabled:opacity-50"
            >
              {busy
                ? vi
                  ? "Đang xử lý…"
                  : "Please wait…"
                : signup
                  ? vi
                    ? "Tạo tài khoản"
                    : "Create account"
                  : vi
                    ? "Đăng nhập"
                    : "Sign in"}
            </button>
            <button
              type="button"
              disabled={busy}
              onClick={() => {
                setSignup(!signup);
                setMessage("");
              }}
              className="text-teal-800 underline min-h-11"
            >
              {signup
                ? vi
                  ? "Đã có tài khoản? Đăng nhập"
                  : "Already have an account? Sign in"
                : vi
                  ? "Chưa có tài khoản? Đăng ký"
                  : "New here? Create an account"}
            </button>
          </form>
        </div>
      )}
    </Context.Provider>
  );
}
