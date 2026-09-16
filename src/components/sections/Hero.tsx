import { motion } from "framer-motion";
import { ArrowRight, Brain, Download, GraduationCap, Mail, MapPin, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { links, profile } from "@/data/content";

const statTiles = [
  { icon: GraduationCap, label: "2ème année · ENSA Fès" },
  { icon: MapPin, label: "Fès, Maroc" },
  { icon: Brain, label: "IA & Data" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-20 pt-16 sm:pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl gradient-bg"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-1.5 text-sm text-muted">
            <Sparkles size={14} className="text-accent" />
            {profile.status}
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 text-xl font-medium text-muted sm:text-2xl">
            {profile.tagline}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.bio}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full gradient-bg px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Voir mes projets
              <ArrowRight size={16} />
            </a>
            <a
              href={profile.cvUrl}
              download={profile.cvFileName}
              className="inline-flex items-center gap-2 rounded-full border border-card-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Download size={16} />
              Télécharger mon CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              Me contacter
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil GitHub de Khalid Chliyahe"
              className="flex size-10 items-center justify-center rounded-full border border-card-border text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn de Khalid Chliyahe"
              className="flex size-10 items-center justify-center rounded-full border border-card-border text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${links.email}`}
              aria-label="Envoyer un email à Khalid Chliyahe"
              className="flex size-10 items-center justify-center rounded-full border border-card-border text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={18} />
            </a>
          </div>

          <div className="mt-8 grid max-w-lg grid-cols-3 gap-3">
            {statTiles.map((tile) => (
              <div
                key={tile.label}
                className="flex flex-col items-start gap-2 rounded-2xl border border-card-border bg-card px-4 py-3"
              >
                <tile.icon size={16} className="text-accent" />
                <span className="text-xs leading-snug text-muted">{tile.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[2rem] gradient-bg opacity-90 blur-md"
          />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-card-border/50 shadow-2xl">
            <img
              src={profile.avatar}
              alt={`Photo de ${profile.name}`}
              loading="eager"
              width={322}
              height={321}
              className="size-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
