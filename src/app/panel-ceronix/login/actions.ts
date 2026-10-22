"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { isRateLimited, recordFailedAttempt, clearAttempts } from "@/lib/rate-limit";

export async function loginAction(
  _prevState: string | undefined,
  formData: FormData
): Promise<string | undefined> {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");

  const hdrs = await headers();
  const ip =
    hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    hdrs.get("x-real-ip") ||
    "local";

  if (await isRateLimited(ip)) {
    return "Demasiados intentos. Espera unos minutos antes de volver a intentarlo.";
  }

  if (!email || !password) {
    return "Introduce email y contraseña.";
  }

  try {
    await signIn("credentials", { email, password, redirect: false });
  } catch (err) {
    if (err instanceof AuthError) {
      await recordFailedAttempt(ip);
      return "Email o contraseña incorrectos.";
    }
    throw err;
  }

  await clearAttempts(ip);
  redirect("/panel-ceronix");
}
