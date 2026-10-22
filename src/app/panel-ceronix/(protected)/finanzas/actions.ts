"use server";

import { revalidatePath } from "next/cache";
import { sql } from "@/lib/db";

export async function addFinanceEntry(formData: FormData) {
  const date = String(formData.get("date") || "");
  const type = String(formData.get("type") || "ingreso");
  const amountRaw = String(formData.get("amount") || "0").replace(",", ".");
  const amount = Number(amountRaw);
  const concept = String(formData.get("concept") || "").trim();
  const paymentMethod = String(formData.get("payment_method") || "").trim() || null;
  const status = String(formData.get("status") || "pendiente");

  if (!date || !concept || !Number.isFinite(amount) || amount <= 0) return;

  await sql`
    INSERT INTO finance_entries (date, type, amount, concept, payment_method, status)
    VALUES (${date}, ${type}, ${amount}, ${concept}, ${paymentMethod}, ${status})
  `;

  revalidatePath("/panel-ceronix/finanzas");
}

export async function toggleFinanceStatus(id: number) {
  await sql`
    UPDATE finance_entries
    SET status = CASE status WHEN 'cobrado' THEN 'pendiente' ELSE 'cobrado' END
    WHERE id = ${id}
  `;
  revalidatePath("/panel-ceronix/finanzas");
}

export async function deleteFinanceEntry(id: number) {
  await sql`DELETE FROM finance_entries WHERE id = ${id}`;
  revalidatePath("/panel-ceronix/finanzas");
}
