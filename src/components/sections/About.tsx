import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { languages, profile } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

const tileMotion = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 } as const,
};

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="À propos" title="Qui suis-je" />

        <div className="grid grid-cols-4 gap-4">
          <motion.div
            {...tileMotion}
            transition={{ duration: 0.5 }}
            className="col-span-4 rounded-3xl border border-card-border bg-card p-8 md:col-span-2 md:row-span-2"
          >
            <p className="text-xl leading-relaxed text-foreground/90">
              {profile.bioExtended}
            </p>
          </motion.div>

          <motion.div
            {...tileMotion}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="col-span-2 rounded-3xl border border-card-border bg-card p-6 md:col-span-1"
          >
            <MapPin size={18} className="text-accent" />
            <p className="mt-4 text-sm font-medium">Localisation</p>
            <p className="text-sm text-muted">{profile.location}</p>
          </motion.div>

          <motion.div
            {...tileMotion}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="col-span-2 rounded-3xl border border-card-border bg-card p-6 md:col-span-1"
          >
            <Sparkles size={18} className="text-accent" />
            <p className="mt-4 text-sm font-medium">Statut</p>
            <p className="text-sm text-muted">{profile.status}</p>
          </motion.div>

          <motion.div
            {...tileMotion}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-4 rounded-3xl border border-card-border bg-card p-6 md:col-span-2"
          >
            <div className="flex items-center gap-2">
              <GraduationCap size={18} className="text-accent" />
              <p className="text-sm font-medium">Langues</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang.name}
                  className="rounded-full border border-card-border bg-background px-3 py-1.5 text-sm"
                >
                  {lang.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
