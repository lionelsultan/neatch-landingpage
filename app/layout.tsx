import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neatch",
  description:
    "Neatch accompagne les entreprises dans leur transformation digitale et met en relation clients et consultants freelances avec transparence et qualité.",
  keywords: [
    "conseil digital",
    "consultants",
    "freelances",
    "transformation digitale",
    "staffing",
    "ESN",
    "mise en relation",
  ],
  authors: [{ name: "Neatch E.U.R.L." }],
  openGraph: {
    title: "Neatch | Conseil digital & mise en relation de consultants",
    description:
      "Neatch accompagne les entreprises dans leur transformation digitale et met en relation clients et consultants freelances avec transparence et qualité.",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}
