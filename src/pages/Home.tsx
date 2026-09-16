import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Timeline } from "@/components/sections/Timeline";
import { Contact } from "@/components/sections/Contact";
import { useSEO, SITE_URL } from "@/hooks/useSEO";
import { profile, links } from "@/data/content";

export default function Home() {
  useSEO({
    title: "Khalid Chliyahe — Étudiant en Génie Informatique | IA & Data",
    description:
      "Portfolio de Khalid Chliyahe, étudiant ingénieur en Génie Informatique à l'ENSA Fès, passionné d'intelligence artificielle et de data. Projets, compétences et parcours.",
    path: "/",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.tagline,
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "ENSA Fès",
      },
      url: SITE_URL,
      sameAs: [links.github, links.linkedin],
      email: `mailto:${links.email}`,
    },
  });

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
    </>
  );
}
