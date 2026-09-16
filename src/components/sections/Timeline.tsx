import { motion } from "framer-motion";
import { Award, Briefcase, ExternalLink, GraduationCap } from "lucide-react";
import {
  certifications,
  educationTimeline,
  experienceTimeline,
  type TimelineItem,
} from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

function TimelineGroup({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof GraduationCap;
  title: string;
  items: TimelineItem[];
}) {
  return (
    <div>
      <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent">
        <Icon size={16} />
        {title}
      </h3>

      <div className="mt-5 flex flex-col gap-3">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-2xl border border-card-border bg-card p-5"
          >
            <p className="text-xs text-muted">{item.date}</p>
            <h4 className="mt-1 text-base font-medium leading-snug">
              {item.title}
            </h4>
            <p className="text-sm text-muted">{item.org}</p>
            {item.description && (
              <p className="mt-1.5 text-sm text-foreground/80">{item.description}</p>
            )}
            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                Voir le certificat
                <ExternalLink size={12} />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Timeline() {
  return (
    <section id="journey" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Parcours"
          title="Formation, expérience & certifications"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <TimelineGroup icon={GraduationCap} title="Formation" items={educationTimeline} />
          <TimelineGroup icon={Briefcase} title="Expérience" items={experienceTimeline} />
          <TimelineGroup icon={Award} title="Certifications" items={certifications} />
        </div>
      </div>
    </section>
  );
}
