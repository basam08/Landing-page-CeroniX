import { sql } from "@/lib/db";
import { addTask } from "../actions";
import { TaskRow, type Task } from "../TaskRow";

const COLUMNS = [
  { key: "servicios", label: "Servicios" },
  { key: "mentemprende", label: "Mente Emprende" },
  { key: "marca_personal", label: "Marca personal" },
] as const;

export default async function ProyectosPage() {
  const rows = await sql`
    SELECT id, title, kind, priority, due_date::text, done, project
    FROM tasks
    WHERE project IS NOT NULL
    ORDER BY done ASC,
      CASE priority WHEN 'alta' THEN 1 WHEN 'media' THEN 2 WHEN 'baja' THEN 3 ELSE 4 END ASC,
      created_at ASC
  `;
  const tasks = rows as unknown as Task[];

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-1">Proyectos</h1>
      <p className="text-sm text-white/40 mb-8">
        Lo que tienes en marcha, dividido por área.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {COLUMNS.map((col) => {
          const items = tasks.filter((t) => t.project === col.key);
          const pending = items.filter((t) => !t.done);
          const done = items.filter((t) => t.done);

          return (
            <div key={col.key}>
              <h2 className="text-lg font-bold text-white mb-4">{col.label}</h2>

              <form action={addTask} className="flex flex-col gap-2 mb-4">
                <input type="hidden" name="kind" value="tarea" />
                <input type="hidden" name="project" value={col.key} />
                <input
                  name="title"
                  placeholder="Añadir..."
                  required
                  className="rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40"
                />
                <div className="flex gap-2">
                  <select
                    name="priority"
                    defaultValue="media"
                    className="flex-1 rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2 text-sm text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="alta">Alta</option>
                    <option value="media">Media</option>
                    <option value="baja">Baja</option>
                  </select>
                  <button
                    type="submit"
                    className="rounded-lg bg-white hover:bg-white/85 text-black text-sm font-semibold px-4 transition-colors"
                  >
                    Añadir
                  </button>
                </div>
              </form>

              {pending.length === 0 && done.length === 0 ? (
                <p className="text-sm text-white/35">Vacío por ahora.</p>
              ) : (
                <div className="space-y-2">
                  {pending.map((t) => (
                    <TaskRow key={t.id} task={t} />
                  ))}
                  {done.map((t) => (
                    <TaskRow key={t.id} task={t} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
