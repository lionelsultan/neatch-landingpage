import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neatch",
  description:
    "Neatch accompagne les organisations sur des enjeux de transformation IT, Product Management, gouvernance agile, delivery et recrutement de profils clés côté client final.",
  keywords: [
    "transformation IT",
    "product management",
    "gouvernance agile",
    "delivery",
    "release train engineer",
    "product owner",
    "scrum master",
    "product manager",
    "chef de projet",
    "recrutement",
  ],
  authors: [{ name: "Neatch E.U.R.L." }],
  openGraph: {
    title: "Neatch | Transformation IT, Product Management et delivery",
    description:
      "Neatch accompagne les organisations sur des enjeux de transformation IT, Product Management, gouvernance agile, delivery et recrutement de profils clés côté client final.",
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
