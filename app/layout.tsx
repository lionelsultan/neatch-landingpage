import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.neatch.com"),
  title: "Neatch | Conseil IT, Product & Delivery",
  description:
    "Neatch est la structure de Lionel Sultan pour cadrer, piloter et sécuriser les missions IT, produit et delivery dans des contextes exigeants.",
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
      "Lionel Sultan intervient personnellement pour cadrer, piloter et sécuriser les missions IT, produit et delivery.",
    url: "/",
    siteName: "Neatch",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Neatch | Conseil IT, Product & Delivery",
    description:
      "Cadrage, pilotage, gouvernance et delivery par Lionel Sultan.",
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
