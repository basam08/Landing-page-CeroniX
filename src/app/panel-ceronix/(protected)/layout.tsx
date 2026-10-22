import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth, signOut } from "@/auth";

export default async function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/panel-ceronix/login");

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur">
        <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between gap-6">
          <nav className="flex items-center gap-6 text-sm">
            <span className="font-semibold">Panel Ceronix</span>
            <a href="/panel-ceronix" className="text-white/60 hover:text-white transition-colors">
              Hoy
            </a>
            <a
              href="/panel-ceronix/finanzas"
              className="text-white/60 hover:text-white transition-colors"
            >
              Finanzas
            </a>
          </nav>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/panel-ceronix/login" });
            }}
          >
            <button
              type="submit"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Cerrar sesión
            </button>
          </form>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
    </div>
  );
}
