import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-32 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">404</p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Page introuvable
      </h1>
      <p className="max-w-md text-muted">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        to="/"
        className="mt-4 inline-flex items-center gap-2 rounded-full gradient-bg px-6 py-3 text-sm font-medium text-white"
      >
        Retour à l&apos;accueil
      </Link>
    </section>
  );
}
