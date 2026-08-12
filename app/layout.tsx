import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://khalidchliyahe.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Khalid Chliyahe — Étudiant en Génie Informatique | IA & Data",
  description:
    "Portfolio de Khalid Chliyahe, étudiant ingénieur en Génie Informatique à l'ENSA Fès, passionné d'intelligence artificielle et de data. Projets, compétences et parcours.",
  keywords: [
    "Khalid Chliyahe",
    "Génie Informatique",
    "ENSA Fès",
    "Intelligence Artificielle",
    "Machine Learning",
    "Data Science",
    "Portfolio",
    "Développeur",
  ],
  authors: [{ name: "Khalid Chliyahe" }],
  openGraph: {
    title: "Khalid Chliyahe — Étudiant en Génie Informatique | IA & Data",
    description:
      "Portfolio de Khalid Chliyahe : projets IA/Data, compétences techniques et parcours académique.",
    url: siteUrl,
    siteName: "Khalid Chliyahe — Portfolio",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Khalid Chliyahe — Étudiant en Génie Informatique | IA & Data",
    description:
      "Portfolio de Khalid Chliyahe : projets IA/Data, compétences techniques et parcours académique.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
