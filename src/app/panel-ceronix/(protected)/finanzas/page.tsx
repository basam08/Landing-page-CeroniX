import { sql } from "@/lib/db";
import { addFinanceEntry, toggleFinanceStatus, deleteFinanceEntry, setBankBalance } from "./actions";

type Entry = {
  id: number;
  date: string;
  type: "ingreso" | "gasto";
  amount: string;
  concept: string;
  payment_method: string | null;
  status: "cobrado" | "pendiente";
};

function formatEUR(n: number) {
  return n.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
}

export default async function FinanzasPage() {
  const rows = await sql`
    SELECT id, date::text, type, amount::text, concept, payment_method, status
    FROM finance_entries
    ORDER BY date DESC, created_at DESC
  `;
  const entries = rows as unknown as Entry[];

  const balanceRows = await sql`SELECT amount::text, updated_at::text FROM bank_balance WHERE id = 1`;
  const bankBalance = Number((balanceRows[0] as { amount: string } | undefined)?.amount ?? 0);

  const now = new Date();
  const monthPrefix = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  const thisMonth = entries.filter((e) => e.date.startsWith(monthPrefix));

  const ingresos = thisMonth
    .filter((e) => e.type === "ingreso")
    .reduce((sum, e) => sum + Number(e.amount), 0);
  const gastos = thisMonth
    .filter((e) => e.type === "gasto")
    .reduce((sum, e) => sum + Number(e.amount), 0);
  const neto = ingresos - gastos;

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-1">Finanzas</h1>
      <p className="text-sm text-white/40 mb-8">
        Control interno, no sustituye a la facturación legal.
      </p>

      <div className="rounded-xl border border-white/15 bg-white/[0.05] p-5 mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs text-white/40 mb-1">Saldo total en el banco</p>
          <p className="text-2xl font-bold text-white">{formatEUR(bankBalance)}</p>
        </div>
        <form action={setBankBalance} className="flex gap-2">
          <input
            name="amount"
            type="text"
            inputMode="decimal"
            placeholder="Nuevo saldo"
            required
            className="w-36 rounded-lg border border-white/15 bg-black px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40"
          />
          <button
            type="submit"
            className="rounded-lg border border-white/25 hover:border-white/50 text-white text-sm font-semibold px-4 transition-colors"
          >
            Actualizar
          </button>
        </form>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-10">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs text-white/40 mb-1">Ingresos este mes</p>
          <p className="text-xl font-bold text-white">{formatEUR(ingresos)}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs text-white/40 mb-1">Gastos este mes</p>
          <p className="text-xl font-bold text-white">{formatEUR(gastos)}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs text-white/40 mb-1">Neto este mes</p>
          <p className={`text-xl font-bold ${neto >= 0 ? "text-white" : "text-red-400"}`}>
            {formatEUR(neto)}
          </p>
        </div>
      </div>

      <form
        action={addFinanceEntry}
        className="grid sm:grid-cols-2 lg:grid-cols-6 gap-2 mb-10 rounded-xl border border-white/10 bg-white/[0.03] p-4"
      >
        <input
          type="date"
          name="date"
          required
          defaultValue={new Date().toISOString().slice(0, 10)}
          className="rounded-lg border border-white/15 bg-black px-3 py-2 text-sm text-white focus:outline-none focus:border-white/40"
        />
        <select
          name="type"
          defaultValue="ingreso"
          className="rounded-lg border border-white/15 bg-black px-3 py-2 text-sm text-white focus:outline-none focus:border-white/40"
        >
          <option value="ingreso">Ingreso</option>
          <option value="gasto">Gasto</option>
        </select>
        <input
          name="amount"
          type="text"
          inputMode="decimal"
          placeholder="Importe"
          required
          className="rounded-lg border border-white/15 bg-black px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40"
        />
        <input
          name="concept"
          placeholder="Cliente o concepto"
          required
          className="rounded-lg border border-white/15 bg-black px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40"
        />
        <input
          name="payment_method"
          placeholder="Método de pago"
          className="rounded-lg border border-white/15 bg-black px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40"
        />
        <div className="flex gap-2">
          <select
            name="status"
            defaultValue="pendiente"
            className="flex-1 rounded-lg border border-white/15 bg-black px-3 py-2 text-sm text-white focus:outline-none focus:border-white/40"
          >
            <option value="pendiente">Pendiente</option>
            <option value="cobrado">Cobrado</option>
          </select>
          <button
            type="submit"
            className="rounded-lg bg-white hover:bg-white/85 text-black text-sm font-semibold px-4 transition-colors"
          >
            Añadir
          </button>
        </div>
      </form>

      {entries.length === 0 ? (
        <p className="text-sm text-white/35">Todavía no hay movimientos.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="bg-white/[0.04] text-white/40 text-xs">
                <th className="px-4 py-3 font-medium">Fecha</th>
                <th className="px-4 py-3 font-medium">Tipo</th>
                <th className="px-4 py-3 font-medium">Concepto</th>
                <th className="px-4 py-3 font-medium">Método</th>
                <th className="px-4 py-3 font-medium">Importe</th>
                <th className="px-4 py-3 font-medium">Estado</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {entries.map((e) => (
                <tr key={e.id} className="border-t border-white/10">
                  <td className="px-4 py-3 text-white/70">{e.date.slice(0, 10)}</td>
                  <td className="px-4 py-3 text-white/70">
                    {e.type === "ingreso" ? "Ingreso" : "Gasto"}
                  </td>
                  <td className="px-4 py-3 text-white">{e.concept}</td>
                  <td className="px-4 py-3 text-white/50">{e.payment_method || "—"}</td>
                  <td
                    className={`px-4 py-3 font-semibold ${
                      e.type === "ingreso" ? "text-white" : "text-red-400"
                    }`}
                  >
                    {e.type === "gasto" ? "-" : ""}
                    {formatEUR(Number(e.amount))}
                  </td>
                  <td className="px-4 py-3">
                    <form action={toggleFinanceStatus.bind(null, e.id)}>
                      <button
                        type="submit"
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                          e.status === "cobrado"
                            ? "bg-white/15 text-white"
                            : "border border-white/25 text-white/60 hover:border-white/50"
                        }`}
                      >
                        {e.status === "cobrado" ? "Cobrado" : "Pendiente"}
                      </button>
                    </form>
                  </td>
                  <td className="px-4 py-3">
                    <form action={deleteFinanceEntry.bind(null, e.id)}>
                      <button
                        type="submit"
                        aria-label="Borrar"
                        className="text-white/30 hover:text-white/70 transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M6 6l12 12M18 6L6 18"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
