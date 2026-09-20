export const profile = {
  name: "Khalid Chliyahe",
  tagline: "Étudiant en Génie Informatique | Passionné d'IA & Data",
  bio: "Étudiant en Génie Informatique, passionné d'IA et de Data. J'aime explorer comment les données peuvent raconter une histoire et comment le machine learning peut la transformer en décision.",
  bioExtended:
    "En 2ème année à l'ENSA Fès, c'est l'intelligence artificielle et la data qui m'attirent le plus : comprendre comment un modèle apprend, tester ses limites, et voir ce que ça donne une fois mis en pratique.",
  location: "Fès, Maroc",
  status: "Ouvert aux opportunités de stage",
  avatar: "/images/profile.jpeg",
  cvUrl: "/cv/KHALID_CHLIYAHE.pdf",
  cvFileName: "KHALID_CHLIYAHE.pdf",
};

export const links = {
  github: "https://github.com/x-khalid-x",
  linkedin: "https://www.linkedin.com/in/khalid-chliyahe-59b1a0364/",
  email: "khalidchliyahe123@gmail.com",
};

export const languages = [
  { name: "Arabe", level: "Langue maternelle" },
  { name: "Français", level: "Bilingue" },
  { name: "Anglais", level: "Courant" },
];

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Langages",
    skills: ["Python", "Java", "C", "C++", "R", "SQL", "JavaScript"],
  },
  {
    title: "Développement Web",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "PHP"],
  },
  {
    title: "Data & Machine Learning",
    skills: [
      "scikit-learn",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Apprentissage supervisé",
      "Apprentissage non supervisé",
    ],
  },
  {
    title: "Bases de données",
    skills: ["MySQL", "SQL Server"],
  },
  {
    title: "Outils & Modélisation",
    skills: ["Git", "GitHub", "VS Code", "UML"],
  },
];

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  date: string;
  description: string;
  highlights: string[];
  stack: string[];
  result?: string;
  availabilityNote?: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageFit?: "cover" | "contain";
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "sir-patient",
    title: "SIR-Patient",
    date: "Juillet – Août 2026",
    description:
      "Système d'aide à l'orientation des patients développé lors de mon stage au CHU Hassan II Fès. À partir des symptômes décrits en français, l'application recommande l'hôpital le plus adapté du réseau CHU Hassan II Fès-Meknès.",
    highlights: [
      "Classification NLP des symptômes vers l'un des 9 services médicaux (TF-IDF + SVM linéaire)",
      "Classement multicritère des hôpitaux (méthode SAW) avec pondération automatique par entropie de Shannon",
      "Distance routière réelle via OSRM et délai d'attente par service",
      "Géolocalisation 100% hors-ligne via une instance Nominatim auto-hébergée",
      "Génération d'un bon de rendez-vous au format PDF avec QR code",
      "Interface web FastAPI + Jinja2",
    ],
    stack: ["Python", "FastAPI", "scikit-learn", "PostgreSQL", "OSRM", "Docker"],
    availabilityNote:
      "Projet réalisé dans le cadre d'un stage au CHU Hassan II Fès : le code et les données restent la propriété du CHU et ne sont pas rendus publics.",
    image: "/images/projects/sir-patient.webp",
    imageAlt: "Capture d'écran du classement des hôpitaux recommandés dans l'application SIR-Patient",
    imageWidth: 1210,
    imageHeight: 390,
    imageFit: "contain",
    links: [],
  },
  {
    slug: "spam-detection-ml",
    title: "Spam Detection ML",
    date: "Janvier 2026",
    description:
      "Système de classification de spam pour SMS en anglais, avec pipeline NLP complet et application web interactive déployée en ligne.",
    highlights: [
      "Pipeline NLP : nettoyage, suppression des stopwords, stemming",
      "Vectorisation TF-IDF (unigrammes et bigrammes)",
      "Classification par régression logistique — 97% d'accuracy",
      "Dataset SMS Spam Collection (Kaggle)",
      "Application Streamlit : analyse unitaire ou par lot, avec score de probabilité",
      "Historique des analyses et persistance du modèle (pickle)",
    ],
    stack: ["Python", "scikit-learn", "NLTK", "Pandas", "Streamlit"],
    result:
      "97% d'accuracy sur la classification spam/non-spam (régression logistique, dataset SMS Spam Collection).",
    image: "/images/projects/spam-detection.webp",
    imageAlt: "Capture d'écran de l'application Streamlit de détection de spam",
    imageWidth: 1900,
    imageHeight: 883,
    links: [
      { label: "Démo en ligne", url: "https://spam-detection-ml-wy7s2z2w4ycbxbvxtnwwvb.streamlit.app" },
      { label: "Code source", url: "https://github.com/x-khalid-x/spam-detection-ml" },
    ],
  },
];

export type TimelineItem = {
  type: "education" | "experience" | "certification";
  title: string;
  org: string;
  date: string;
  description?: string;
  url?: string;
};

export const educationTimeline: TimelineItem[] = [
  {
    type: "education",
    title: "Diplôme d'Ingénieur d'État en Génie Informatique",
    org: "ENSA Fès",
    date: "2025 – 2028",
    description: "2ème année du cycle ingénieur.",
  },
  {
    type: "education",
    title: "Cycle Préparatoire Intégré",
    org: "ENSA Fès",
    date: "2023 – 2025",
  },
];

export const experienceTimeline: TimelineItem[] = [
  {
    type: "experience",
    title: "Stagiaire en développement web et data",
    org: "Centre Hospitalier Universitaire Hassan II Fès",
    date: "Juillet – Août 2026",
    description:
      "Développement de SIR-Patient, un système d'aide à l'orientation des patients : classification automatique des symptômes par NLP (TF-IDF + SVM) vers le service médical adapté, classement multicritère des hôpitaux du réseau CHU Hassan II Fès-Meknès (distance, délai d'attente) et génération de bons de rendez-vous.",
  },
];

export const certifications: TimelineItem[] = [
  {
    type: "certification",
    title: "Supervised Machine Learning: Regression and Classification",
    org: "DeepLearning.AI & Stanford Online (Coursera)",
    date: "Juillet 2026",
    url: "https://coursera.org/share/f49425389637b5b04219a8ebff68722e",
  },
  {
    type: "certification",
    title: "Programming with JavaScript",
    org: "Meta (Coursera)",
    date: "Juin 2026",
    url: "https://coursera.org/share/e8dce57aec02336abc7e22ece55ad0a9",
  },
  {
    type: "certification",
    title: "HTML and CSS in depth",
    org: "Meta (Coursera)",
    date: "Février 2026",
    url: "https://coursera.org/share/4bb5ee2bc529fd188e8502f69eb3051b",
  },
  {
    type: "certification",
    title: "HTML Essentials",
    org: "Cisco & JS Institute (Credly)",
    date: "Février 2026",
    url: "https://www.credly.com/badges/36b3bc26-758e-44c6-9eec-bc61d09e67af/public_url",
  },
];
