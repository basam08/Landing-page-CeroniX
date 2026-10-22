// Script de configuración inicial del panel privado.
// Uso: node scripts/setup-db.mjs [email] [contraseña]
// Lee DATABASE_URL de .env.local, crea las tablas si no existen,
// y crea (o actualiza) tu usuario admin. Sin argumentos, los pide por consola.

import { readFileSync, existsSync } from "node:fs";
import { createInterface } from "node:readline/promises";
import { neon } from "@neondatabase/serverless";
import bcrypt from "bcryptjs";

function loadEnvLocal() {
  const path = ".env.local";
  if (!existsSync(path)) return;
  const content = readFileSync(path, "utf8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

async function main() {
  loadEnvLocal();

  if (!process.env.DATABASE_URL) {
    console.error(
      "Falta DATABASE_URL en .env.local. Copia la cadena de conexión de Neon ahí primero."
    );
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);

  console.log("Creando tablas (si no existen)...");

  await sql`
    CREATE TABLE IF NOT EXISTS admin_user (
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS tasks (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      kind TEXT NOT NULL CHECK (kind IN ('tarea', 'no_hacer')),
      priority TEXT CHECK (priority IN ('alta', 'media', 'baja')),
      due_date DATE,
      done BOOLEAN NOT NULL DEFAULT false,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS finance_entries (
      id SERIAL PRIMARY KEY,
      date DATE NOT NULL,
      type TEXT NOT NULL CHECK (type IN ('ingreso', 'gasto')),
      amount NUMERIC(12,2) NOT NULL,
      concept TEXT NOT NULL,
      payment_method TEXT,
      status TEXT NOT NULL CHECK (status IN ('cobrado', 'pendiente')),
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS login_attempts (
      id SERIAL PRIMARY KEY,
      ip TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;

  console.log("Tablas listas.\n");

  const [argEmail, argPassword] = process.argv.slice(2);
  let email = argEmail?.trim();
  let password = argPassword;

  if (!email || !password) {
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    email = (await rl.question("Email de administrador: ")).trim();
    password = await rl.question("Contraseña (mínimo 10 caracteres): ");
    rl.close();
  }

  if (!email || password.length < 10) {
    console.error("Email vacío o contraseña demasiado corta. Nada guardado.");
    process.exit(1);
  }

  const hash = await bcrypt.hash(password, 12);

  await sql`
    INSERT INTO admin_user (email, password_hash)
    VALUES (${email}, ${hash})
    ON CONFLICT (email) DO UPDATE SET password_hash = EXCLUDED.password_hash
  `;

  console.log(`\nListo. Usuario admin "${email}" creado/actualizado.`);
  console.log("Ya puedes entrar en /panel-ceronix/login con ese email y contraseña.");
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
