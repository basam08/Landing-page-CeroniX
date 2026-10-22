import { sql } from "@/lib/db";

const WINDOW_MINUTES = 15;
const MAX_ATTEMPTS = 5;

export async function isRateLimited(ip: string): Promise<boolean> {
  const rows = await sql`
    SELECT count(*)::int AS count
    FROM login_attempts
    WHERE ip = ${ip}
      AND created_at > now() - make_interval(mins => ${WINDOW_MINUTES})
  `;
  const count = (rows[0] as { count: number } | undefined)?.count ?? 0;
  return count >= MAX_ATTEMPTS;
}

export async function recordFailedAttempt(ip: string): Promise<void> {
  await sql`INSERT INTO login_attempts (ip) VALUES (${ip})`;
  // limpieza silenciosa de intentos antiguos, no bloqueante para el usuario
  await sql`DELETE FROM login_attempts WHERE created_at < now() - interval '1 day'`;
}

export async function clearAttempts(ip: string): Promise<void> {
  await sql`DELETE FROM login_attempts WHERE ip = ${ip}`;
}
