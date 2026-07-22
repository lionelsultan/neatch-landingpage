import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.neatch.com"),
  title: "Neatch | Conseil IT, Product & Delivery",
  description:
    "Neatch, structure de Lionel Sultan, accompagne les organisations sur les missions IT, Product Management, gouvernance agile, delivery et qualification de consultants freelances.",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Neatch | Conseil IT, Product & Delivery",
    description:
      "Neatch accompagne les missions IT, Product Management, gouvernance agile, delivery et la qualification de consultants freelances.",
    url: "/",
    siteName: "Neatch",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Neatch | Conseil IT, Product & Delivery",
    description:
      "Structure de Lionel Sultan pour sécuriser les missions IT, produit et delivery.",
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
