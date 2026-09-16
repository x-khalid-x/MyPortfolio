# Khalid Chliyahe — Portfolio

Portfolio personnel construit avec Vite + React + TypeScript, Tailwind CSS v4 et Framer Motion.

## Stack

- [Vite](https://vitejs.dev) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) pour les animations (respecte `prefers-reduced-motion`)
- [react-router-dom](https://reactrouter.com) pour le routing (accueil one-page + pages projets `/projects/:slug`)
- [lucide-react](https://lucide.dev) et [simple-icons](https://simpleicons.org) pour les icônes
- Thème clair/sombre géré par un contexte React maison (persistance `localStorage` + respect de `prefers-color-scheme`), voir `src/hooks/useTheme.tsx`

## Démarrage

```bash
npm install
npm run dev       # serveur de développement
npm run build     # build de production dans dist/
npm run preview   # prévisualiser le build
npm run lint      # ESLint
```

## Structure

```
src/
  main.tsx, App.tsx        # point d'entrée + routing
  components/layout/       # Navbar, Footer
  components/sections/     # Hero, About, Skills, Projects, Timeline, Contact
  components/ui/           # SectionHeading, ThemeToggle, ProjectCard, TechIcon, icons
  pages/                   # Home, ProjectDetail, NotFound
  data/content.ts          # tout le contenu réel (profil, projets, compétences, parcours)
  hooks/                   # useTheme, useReducedMotion
  index.css                # styles globaux + variables de thème (accent #3B82F6)
public/
  images/, cv/              # assets statiques (photo, captures de projets, CV)
```

## Personnaliser le contenu

Toutes les données affichées (profil, liens, compétences, projets, parcours, certifications) vivent dans **`src/data/content.ts`**. Pour mettre à jour le portfolio :

- Modifier `profile`, `links`, `languages` pour les infos personnelles.
- Modifier `skillCategories` pour les compétences.
- Modifier `projects` pour ajouter/éditer un projet — chaque entrée alimente automatiquement sa page de détail (`/projects/:slug`). Seules les sections avec des données réelles (highlights, stack, liens) sont affichées.
- Modifier `educationTimeline`, `experienceTimeline`, `certifications` pour le parcours.

Les assets (photo de profil, captures d'écran, CV) sont dans `public/` et référencés par chemin absolu (`/images/...`, `/cv/...`).

## Déploiement

Le site est une SPA statique buildée dans `dist/`. `vercel.json` réécrit toutes les routes vers `index.html` pour que le routing côté client (`/projects/:slug`) fonctionne en production.
