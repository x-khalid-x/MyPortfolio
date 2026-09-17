import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects, profile } from "@/data/content";
import { useSEO, SITE_URL } from "@/hooks/useSEO";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  useSEO({
    title: project
      ? `${project.title} — Projet de ${profile.name}`
      : "Projet introuvable — Khalid Chliyahe",
    description: project
      ? project.description
      : "Ce projet n'existe pas ou a été déplacé.",
    path: project ? `/projects/${project.slug}` : "/404",
    noindex: !project,
    jsonLd: project
      ? {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          url: `${SITE_URL}/projects/${project.slug}`,
          dateCreated: project.date,
          keywords: project.stack.join(", "),
          creator: {
            "@type": "Person",
            name: profile.name,
          },
        }
      : undefined,
  });

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <article className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} />
          Retour aux projets
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <p className="text-sm text-muted">{project.date}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {project.title}
          </h1>
        </motion.header>

        <div
          className={
            project.imageFit === "contain"
              ? "relative mt-8 w-full overflow-hidden rounded-3xl border border-card-border bg-white p-4"
              : "relative mt-8 w-full overflow-hidden rounded-3xl border border-card-border bg-background"
          }
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="eager"
            width={project.imageWidth}
            height={project.imageHeight}
            className={
              project.imageFit === "contain"
                ? "w-full object-contain"
                : "w-full object-cover"
            }
          />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Contexte</h2>
          <p className="mt-3 leading-relaxed text-foreground/90">
            {project.description}
          </p>
        </section>

        {project.highlights.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold">Solution & fonctionnement</h2>
            <ul className="mt-4 space-y-2.5">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2.5 text-sm leading-relaxed text-foreground/85">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {highlight}
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.result && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold">Résultat</h2>
            <p className="mt-3 leading-relaxed text-foreground/90">{project.result}</p>
          </section>
        )}

        {project.stack.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold">Technologies</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-card-border bg-card px-3 py-1.5 text-sm text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {project.links.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold">Liens</h2>
            <div className="mt-4 flex flex-wrap gap-4">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-card-border px-4 py-2 text-sm font-medium text-accent transition-colors hover:border-accent"
                >
                  {link.label}
                  <ExternalLink size={14} />
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
