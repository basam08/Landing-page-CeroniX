"use client";

import { useActionState } from "react";
import { loginAction } from "./actions";

export default function LoginPage() {
  const [error, formAction, pending] = useActionState(loginAction, undefined);

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <form
        action={formAction}
        className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.03] p-8"
      >
        <h1 className="text-xl font-bold text-white mb-1">Panel Ceronix</h1>
        <p className="text-sm text-white/40 mb-6">Acceso privado.</p>

        <label htmlFor="email" className="block text-sm text-white/60 mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="username"
          required
          className="w-full mb-4 rounded-lg border border-white/15 bg-black px-3 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40"
        />

        <label htmlFor="password" className="block text-sm text-white/60 mb-2">
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="w-full mb-6 rounded-lg border border-white/15 bg-black px-3 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40"
        />

        {error && <p className="text-sm text-red-400 mb-4">{error}</p>}

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-lg bg-white hover:bg-white/85 disabled:opacity-60 text-black font-semibold py-2.5 transition-colors"
        >
          {pending ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </main>
  );
}
