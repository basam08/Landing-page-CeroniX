import { sql } from "@/lib/db";
import { addTask } from "./actions";
import { TaskRow, type Task } from "./TaskRow";

export default async function HoyPage() {
  const todayStr = new Date().toISOString().slice(0, 10);

  const rows = await sql`
    SELECT id, title, kind, priority, due_date::text, done
    FROM tasks
    WHERE project IS NULL
    ORDER BY done ASC, due_date ASC NULLS LAST,
      CASE priority WHEN 'alta' THEN 1 WHEN 'media' THEN 2 WHEN 'baja' THEN 3 ELSE 4 END ASC,
      created_at ASC
  `;
  const tasks = rows as unknown as Task[];

  const noHacer = tasks.filter((t) => t.kind === "no_hacer");
  const tareas = tasks.filter((t) => t.kind === "tarea");
  const hoy = tareas.filter((t) => !t.done && t.due_date === todayStr);
  const pendientes = tareas.filter((t) => !t.done && t.due_date !== todayStr);
  const hechas = tareas.filter((t) => t.done);

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-2xl font-bold text-white mb-6">Hoy</h1>

        <form action={addTask} className="flex flex-wrap gap-2 mb-6">
          <input type="hidden" name="kind" value="tarea" />
          <input
            name="title"
            placeholder="Nueva tarea..."
            required
            className="flex-1 min-w-[180px] rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40"
          />
          <input
            type="date"
            name="due_date"
            className="rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2 text-sm text-white focus:outline-none focus:border-white/40"
          />
          <select
            name="priority"
            defaultValue="media"
            className="rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2 text-sm text-white focus:outline-none focus:border-white/40"
          >
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
          </select>
          <button
            type="submit"
            className="rounded-lg bg-white hover:bg-white/85 text-black text-sm font-semibold px-4 py-2 transition-colors"
          >
            Añadir
          </button>
        </form>

        {hoy.length === 0 ? (
          <p className="text-sm text-white/35">No tienes tareas para hoy.</p>
        ) : (
          <ul className="space-y-2">
            {hoy.map((t) => (
              <TaskRow key={t.id} task={t} />
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2 className="text-lg font-bold text-white mb-4">Lista de no hacer</h2>
        <form action={addTask} className="flex gap-2 mb-4">
          <input type="hidden" name="kind" value="no_hacer" />
          <input
            name="title"
            placeholder="Algo que NO voy a hacer..."
            required
            className="flex-1 rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40"
          />
          <button
            type="submit"
            className="rounded-lg border border-white/20 hover:border-white/50 text-white text-sm font-semibold px-4 py-2 transition-colors"
          >
            Añadir
          </button>
        </form>
        {noHacer.length === 0 ? (
          <p className="text-sm text-white/35">Vacía por ahora.</p>
        ) : (
          <ul className="space-y-2">
            {noHacer.map((t) => (
              <TaskRow key={t.id} task={t} />
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2 className="text-lg font-bold text-white mb-4">Pendientes</h2>
        {pendientes.length === 0 ? (
          <p className="text-sm text-white/35">Sin pendientes fuera de hoy.</p>
        ) : (
          <ul className="space-y-2">
            {pendientes.map((t) => (
              <TaskRow key={t.id} task={t} />
            ))}
          </ul>
        )}
      </div>

      {hechas.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-white/50 mb-4">Hechas</h2>
          <ul className="space-y-2">
            {hechas.map((t) => (
              <TaskRow key={t.id} task={t} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
