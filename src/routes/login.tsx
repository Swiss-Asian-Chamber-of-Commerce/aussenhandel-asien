import { createFileRoute } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <main className="grid min-h-screen place-items-center bg-navy-deep p-6 text-ink">
      <div className="w-full max-w-sm space-y-4">
        <p className="font-sans text-xs tracking-[0.22em] text-gold uppercase">SACC</p>
        <h1 className="font-display text-3xl">Anmelden</h1>
        {authEnabled ? (
          GROK_PROVIDERS.map((p) => (
            <button
              key={p.providerId}
              type="button"
              onClick={() => signIn(p.providerId, { callbackURL: "/" })}
              className="w-full rounded-md border border-ink/20 bg-navy px-4 py-3 font-sans text-sm hover:border-gold/60"
            >
              Weiter mit {p.label}
            </button>
          ))
        ) : (
          <p className="text-sm text-muted">Anmeldung ist deaktiviert.</p>
        )}
        <a href="/" className="block text-center text-sm text-muted hover:text-ink">
          Zurück zur Präsentation
        </a>
      </div>
    </main>
  );
}
