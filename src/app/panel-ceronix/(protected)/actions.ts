"use server";

import { revalidatePath } from "next/cache";
import { sql } from "@/lib/db";

export async function addTask(formData: FormData) {
  const kind = String(formData.get("kind") || "tarea");
  const title = String(formData.get("title") || "").trim();
  if (!title) return;

  if (kind === "no_hacer") {
    await sql`
      INSERT INTO tasks (title, kind) VALUES (${title}, 'no_hacer')
    `;
  } else {
    const priority = String(formData.get("priority") || "media");
    const dueDateRaw = String(formData.get("due_date") || "");
    const dueDate = dueDateRaw || null;
    await sql`
      INSERT INTO tasks (title, kind, priority, due_date)
      VALUES (${title}, 'tarea', ${priority}, ${dueDate})
    `;
  }

  revalidatePath("/panel-ceronix");
}

export async function toggleTask(id: number) {
  await sql`UPDATE tasks SET done = NOT done WHERE id = ${id}`;
  revalidatePath("/panel-ceronix");
}

export async function deleteTask(id: number) {
  await sql`DELETE FROM tasks WHERE id = ${id}`;
  revalidatePath("/panel-ceronix");
}
