import { toggleTask, deleteTask } from "./actions";

export type Task = {
  id: number;
  title: string;
  kind: "tarea" | "no_hacer";
  priority: "alta" | "media" | "baja" | null;
  due_date: string | null;
  done: boolean;
  project?: "servicios" | "mentemprende" | "marca_personal" | null;
};

export const PRIORITY_LABEL: Record<string, string> = {
  alta: "Alta",
  media: "Media",
  baja: "Baja",
};

export function TaskRow({ task }: { task: Task }) {
  return (
    <li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <form action={toggleTask.bind(null, task.id)}>
        <button
          type="submit"
          aria-label={task.done ? "Marcar como pendiente" : "Marcar como hecha"}
          className={`h-5 w-5 shrink-0 rounded-full border flex items-center justify-center transition-colors ${
            task.done ? "bg-white border-white" : "border-white/30 hover:border-white"
          }`}
        >
          {task.done && (
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </form>

      <div className="flex-1 min-w-0">
        <p className={`text-sm ${task.done ? "text-white/35 line-through" : "text-white/90"}`}>
          {task.title}
        </p>
        {(task.priority || task.due_date) && (
          <p className="text-xs text-white/40 mt-0.5">
            {task.priority && PRIORITY_LABEL[task.priority]}
            {task.priority && task.due_date && " · "}
            {task.due_date && task.due_date.slice(0, 10)}
          </p>
        )}
      </div>

      <form action={deleteTask.bind(null, task.id)}>
        <button
          type="submit"
          aria-label="Borrar"
          className="text-white/30 hover:text-white/70 transition-colors shrink-0"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </form>
    </li>
  );
}
