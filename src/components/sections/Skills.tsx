import { motion } from "framer-motion";
import { skillCategories } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcon";

const spanByCategory: Record<string, string> = {
  Langages: "col-span-4 md:col-span-2",
  "Développement Web": "col-span-4 md:col-span-2",
  "Data & Machine Learning": "col-span-4 md:col-span-2",
  "Bases de données": "col-span-2 md:col-span-1",
  "Outils & Modélisation": "col-span-2 md:col-span-1",
};

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Compétences"
          title="Technologies & notions"
          description="Ce que j'utilise en projet et ce que j'étudie à l'école : langages et outils pratiqués, notions de data & ML explorées en cours et en autonomie."
        />

        <div className="grid grid-cols-4 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={`rounded-3xl border border-card-border bg-card p-6 ${
                spanByCategory[category.title] ?? "col-span-4 md:col-span-2"
              }`}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
                {category.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-full border border-card-border bg-background py-1.5 pl-1.5 pr-3.5 text-sm text-foreground/90"
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                      <TechIcon name={skill} size={14} />
                    </span>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
