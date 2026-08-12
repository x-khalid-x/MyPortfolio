import { projects } from "@/data/content";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projets"
          title="Ce que j'ai construit"
          description="Des projets personnels qui allient développement et machine learning."
        />

        <div
          className={
            projects.length === 1
              ? "mx-auto grid max-w-xl gap-8"
              : "grid gap-8 lg:grid-cols-2"
          }
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
