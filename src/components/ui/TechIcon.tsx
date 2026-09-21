import type { ComponentType } from "react";
import {
  siC,
  siCplusplus,
  siCss,
  siDocker,
  siFastapi,
  siFramer,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siMysql,
  siNumpy,
  siPandas,
  siPhp,
  siPostgresql,
  siPython,
  siR,
  siReact,
  siScikitlearn,
  siTailwindcss,
  siTypescript,
  siUml,
  siVite,
} from "simple-icons";
import { Brain, Code2, Coffee, Database, Languages, LineChart, Network } from "lucide-react";

type SimpleIconData = { title: string; path: string; hex: string };

const BRAND_ICONS: Record<string, SimpleIconData> = {
  Python: siPython,
  JavaScript: siJavascript,
  "React.js": siReact,
  HTML: siHtml5,
  CSS: siCss,
  PHP: siPhp,
  MySQL: siMysql,
  Git: siGit,
  GitHub: siGithub,
  NumPy: siNumpy,
  Pandas: siPandas,
  "scikit-learn": siScikitlearn,
  R: siR,
  C: siC,
  "C++": siCplusplus,
  UML: siUml,
  TypeScript: siTypescript,
  "Tailwind CSS": siTailwindcss,
  Vite: siVite,
  "Framer Motion": siFramer,
  FastAPI: siFastapi,
  PostgreSQL: siPostgresql,
  Docker: siDocker,
};

const FALLBACK_ICONS: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  Java: Coffee,
  SQL: Database,
  "SQL Server": Database,
  Matplotlib: LineChart,
  NLTK: Languages,
  "NLP / TF-IDF": Languages,
  "VS Code": Code2,
  "Apprentissage supervisé": Brain,
  "Apprentissage non supervisé": Network,
};

export function TechIcon({ name, size = 18 }: { name: string; size?: number }) {
  const brand = BRAND_ICONS[name];
  if (brand) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={`#${brand.hex}`}
        aria-hidden="true"
      >
        <path d={brand.path} />
      </svg>
    );
  }

  const Fallback = FALLBACK_ICONS[name];
  if (Fallback) {
    return <Fallback size={size} className="text-accent" />;
  }

  return null;
}
