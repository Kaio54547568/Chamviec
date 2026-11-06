# CHẠM VIỆC database and accounts

Runtime configuration on Vercel (Production and any Preview that should use this database):

- `SUPABASE_URL`
- `SUPABASE_SECRET_KEY` (server-only)
- `GEMINI_API_KEY`

Do not upload `.env`. No `VITE_` secret is needed. `ADMIN_API_TOKEN` is no longer used: administrator access now depends on a verified Supabase user and the server-controlled `user_roles` table.

## Schema and reference data

Set `DATABASE_URL` in local `.env`, then run `npm run db:migrate`. It uses verified TLS and the public Supabase CA supplied from Supabase's official certificate download endpoint. Database credentials are only needed to run migrations, not by the deployed application.

`npm run db:admin -- email@example.com` grants administrator privileges to an existing account. It does not reset passwords or change any other account. There is no client-facing role elevation endpoint.

The migration imports reference catalogs: careers, majors, universities, admission records, simulation tasks, videos, RIASEC questions and definitions, career values, admission information, exam libraries and sets, and the 2027 enterprise programs. Seed reruns preserve existing database edits. Demo student registrations, artificial reservations, local dependency files, media binaries, UI translation text, generated recommendations, and API secrets are not imported. Real profiles, answers, survey attempts, credits, enterprise registrations and EIE registrations are stored as users interact.

Tables have RLS enabled and browser roles cannot directly access or mutate private data. All private actions go through APIs that verify the user's Supabase access token. Reservations and survey credit consumption use transactional database functions.

## Accounts

Visitors can browse public content. Registration uses Supabase Auth email/password and follows the project's email confirmation setting. Set the Supabase Auth Site URL and allowed redirect URLs to the deployed website. For production email delivery, configure SMTP in Supabase. Passwords are handled by Supabase Auth and never stored in profile tables.

The admin page supports viewing user IDs, issuing auditable survey credits, and editing reference catalog records. Enterprise registrations are managed in the enterprise administration portal.

## Survey charging

The first submitted survey is free per authenticated user ID. Later submissions require one credit (50,000 VND). Duplicate requests with the same key do not consume an additional credit. A new answer set is a new submission. The server calculates all six scores from the 24 answers. Incomplete surveys are rejected.

No payment gateway is configured: the application blocks unpaid retakes and tells the user to contact administration. Only administrators can grant credits after confirming a payment or exemption; the application never simulates a successful charge.

## Scoring

For each RIASEC group, `(score - 4) / 16 * 100`. A career's RIASEC interest score is the mean of its mapped groups. With favorite subjects supplied, the final score is 80% RIASEC + 20% matched career subjects. Without subjects, only the RIASEC score is labeled. Simulations, values and environment do not add invented points. Similar group scores trigger an interests-not-yet-differentiated notice. Weights are product rules, not a validated prediction of career success.

## Verification

- `npm test`
- `npm run lint`
- `npm run build`
- `npx tsx scripts/verifySupabase.ts` (creates and removes an isolated verification account and its reservations)

The browser keeps a local session and working profile cache. The database stores accepted survey results and profile changes. Sign-out clears the current session. Existing guest/demo local data is not automatically merged into a different user's account.
