import { database, checked } from "../src/server/database.ts";
import { ENTERPRISE_PARTNERS } from "../src/data/enterprisePartners.ts";

// Add missing partners only: rerunning does not overwrite administrator edits or create tour batches.
async function sync() {
  const db = database();
  const before = checked(
    await db.from("catalog").select("id").eq("kind", "enterprise_partners"),
  );
  checked(
    await db.from("catalog").upsert(
      ENTERPRISE_PARTNERS.map((data) => ({
        kind: "enterprise_partners",
        id: data.id,
        data,
      })),
      { onConflict: "kind,id", ignoreDuplicates: true },
    ),
  );
  const after = checked(
    await db.from("catalog").select("id").eq("kind", "enterprise_partners"),
  );
  const expected = new Set(after.map((row: { id: string }) => row.id));
  if (ENTERPRISE_PARTNERS.some((partner) => !expected.has(partner.id)))
    throw new Error("Missing partners after sync");
  console.log(
    JSON.stringify({
      before: before.length,
      after: after.length,
      added: after.length - before.length,
    }),
  );
}
sync().catch(() => {
  console.error(
    "Partner sync failed. Check Supabase configuration and permissions.",
  );
  process.exitCode = 1;
});
