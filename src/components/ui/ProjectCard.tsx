import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/content";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-3xl border border-card-border bg-card transition-shadow hover:shadow-xl hover:shadow-black/[0.04]"
    >
      <Link
        to={`/projects/${project.slug}`}
        className="block focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-accent"
      >
        <div
          className={
            project.imageFit === "contain"
              ? "relative aspect-[16/10] w-full overflow-hidden bg-white p-4"
              : "relative aspect-[16/10] w-full overflow-hidden bg-background"
          }
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            width={project.imageWidth}
            height={project.imageHeight}
            className={
              project.imageFit === "contain"
                ? "size-full object-contain transition-transform duration-500 group-hover:scale-105"
                : "size-full object-cover transition-transform duration-500 group-hover:scale-105"
            }
          />
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold">
            <Link to={`/projects/${project.slug}`} className="hover:text-accent">
              {project.title}
            </Link>
          </h3>
          <span className="shrink-0 text-xs text-muted">{project.date}</span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-4 space-y-1.5">
          {project.highlights.slice(0, 4).map((highlight) => (
            <li key={highlight} className="flex gap-2 text-sm text-foreground/85">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-card-border bg-background px-2.5 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            Voir le projet
            <ArrowRight size={14} />
          </Link>
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              {link.label}
              <ExternalLink size={14} />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
