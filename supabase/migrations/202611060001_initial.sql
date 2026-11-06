begin;
create table if not exists public.catalog (
 kind text not null, id text not null, data jsonb not null, primary key(kind,id)
);
create table if not exists public.profiles (
 user_id uuid primary key references auth.users(id) on delete cascade,
 data jsonb not null default '{}', answers jsonb not null default '{}', updated_at timestamptz not null default now()
);
create table if not exists public.user_roles (
 user_id uuid primary key references auth.users(id) on delete cascade, role text not null check(role in ('user','admin')) default 'user'
);
create table if not exists public.survey_quotas (
 user_id uuid primary key references auth.users(id) on delete cascade, attempts integer not null default 0 check(attempts>=0), credits integer not null default 0 check(credits>=0)
);
create table if not exists public.survey_attempts (
 user_id uuid not null references auth.users(id) on delete cascade, idempotency_key text not null,
 attempt_number integer not null, scores jsonb not null, created_at timestamptz not null default now(),
 primary key(user_id,idempotency_key), unique(user_id,attempt_number)
);
create table if not exists public.enterprise_batches (
 id text primary key, data jsonb not null, registered_slots integer not null default 0 check(registered_slots>=0)
);
create table if not exists public.enterprise_registrations (
 id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
 batch_id text not null references public.enterprise_batches(id), data jsonb not null, unique(user_id,batch_id)
);
create table if not exists public.eie_registrations (
 user_id uuid primary key references auth.users(id) on delete cascade, data jsonb not null
);
create table if not exists public.credit_grants (
 id uuid primary key default gen_random_uuid(), admin_id uuid not null references auth.users(id), user_id uuid not null references auth.users(id), amount integer not null check(amount>0), created_at timestamptz not null default now()
);
alter table public.catalog enable row level security;
alter table public.profiles enable row level security;
alter table public.user_roles enable row level security;
alter table public.survey_quotas enable row level security;
alter table public.survey_attempts enable row level security;
alter table public.enterprise_batches enable row level security;
alter table public.enterprise_registrations enable row level security;
alter table public.eie_registrations enable row level security;
alter table public.credit_grants enable row level security;
-- All access goes through authenticated server endpoints; no client role can write directly.
revoke all on public.catalog,public.profiles,public.user_roles,public.survey_quotas,public.survey_attempts,public.enterprise_batches,public.enterprise_registrations,public.eie_registrations,public.credit_grants from anon,authenticated;
grant all on public.catalog,public.profiles,public.user_roles,public.survey_quotas,public.survey_attempts,public.enterprise_batches,public.enterprise_registrations,public.eie_registrations,public.credit_grants to service_role;

create or replace function public.submit_survey(p_user uuid,p_key text,p_scores jsonb) returns jsonb
language plpgsql security definer set search_path=public as $$
declare q public.survey_quotas; prior public.survey_attempts; code text;
begin
 if length(coalesce(p_key,'')) not between 1 and 200 then raise exception 'Invalid submission key'; end if;
 foreach code in array array['R','I','A','S','E','C'] loop
  if not (p_scores ? code) or jsonb_typeof(p_scores->code)<>'number' or (p_scores->>code)::numeric not between 4 and 20 then raise exception 'Invalid RIASEC scores'; end if;
 end loop;
 insert into survey_quotas(user_id) values(p_user) on conflict do nothing;
 select * into q from survey_quotas where user_id=p_user for update;
 select * into prior from survey_attempts where user_id=p_user and idempotency_key=p_key;
 if found then
  if prior.scores<>p_scores then raise exception 'Submission key reused for different answers'; end if;
  return jsonb_build_object('allowed',true,'attemptNumber',prior.attempt_number);
 end if;
 if q.attempts>0 and q.credits<1 then return jsonb_build_object('allowed',false,'feeVND',50000); end if;
 update survey_quotas set attempts=attempts+1, credits=credits-case when attempts>0 then 1 else 0 end where user_id=p_user;
 insert into survey_attempts(user_id,idempotency_key,attempt_number,scores) values(p_user,p_key,q.attempts+1,p_scores);
 return jsonb_build_object('allowed',true,'attemptNumber',q.attempts+1);
end $$;

create or replace function public.register_enterprise(p_user uuid,p_batch text,p_data jsonb) returns jsonb
language plpgsql security definer set search_path=public as $$
declare b public.enterprise_batches; r public.enterprise_registrations; payload jsonb;
begin
 select * into b from enterprise_batches where id=p_batch for update;
 if not found then raise exception 'Không tìm thấy chương trình'; end if;
 select * into r from enterprise_registrations where user_id=p_user and batch_id=p_batch;
 if found then return r.data; end if;
 if b.data->>'status'<>'DANG_MO' or b.registered_slots>=(b.data->>'totalSlots')::integer
 or (now() at time zone 'Asia/Ho_Chi_Minh')::date>(b.data->>'deadlineDate')::date
 or (now() at time zone 'Asia/Ho_Chi_Minh')::date>(b.data->>'scheduleDate')::date then raise exception 'Chương trình đã đóng hoặc hết chỗ'; end if;
 payload=p_data || jsonb_build_object('registrationCode','CV-EXP-'||gen_random_uuid(),'batchId',p_batch,'batchName',b.data->>'programName','enterpriseName',b.data->>'enterpriseName','registeredAt',now(),'ticketPriceVND',(b.data->>'ticketPriceVND')::integer,'status',case when (b.data->>'ticketPriceVND')::integer=0 then 'DA_XAC_NHAN' else 'DA_TIEP_NHAN' end);
 insert into enterprise_registrations(user_id,batch_id,data) values(p_user,p_batch,payload);
 update enterprise_batches set registered_slots=registered_slots+1 where id=p_batch;
 return payload;
end $$;
create or replace function public.grant_survey_credit(p_admin uuid,p_user uuid,p_amount integer) returns void
language plpgsql security definer set search_path=public as $$
begin
 if not exists(select 1 from user_roles where user_id=p_admin and role='admin') then raise exception 'Admin required'; end if;
 if p_amount<1 or p_amount>100 then raise exception 'Invalid credit amount'; end if;
 insert into survey_quotas(user_id,credits) values(p_user,p_amount) on conflict(user_id) do update set credits=survey_quotas.credits+p_amount;
 insert into credit_grants(admin_id,user_id,amount) values(p_admin,p_user,p_amount);
end $$;
revoke all on function public.submit_survey(uuid,text,jsonb),public.register_enterprise(uuid,text,jsonb),public.grant_survey_credit(uuid,uuid,integer) from public,anon,authenticated;
grant execute on function public.submit_survey(uuid,text,jsonb),public.register_enterprise(uuid,text,jsonb),public.grant_survey_credit(uuid,uuid,integer) to service_role;
commit;
