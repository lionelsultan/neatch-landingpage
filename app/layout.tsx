import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.neatch.com"),
  title: "NEATCH | Transformation, Gouvernance & Delivery",
  description:
    "Cabinet indépendant spécialisé dans la gouvernance et le delivery de transformations complexes : ERP, data, IA, intégration, équipes et fournisseurs multiples.",
  keywords: [
    "transformation delivery", "program delivery", "transformation governance",
    "program governance", "enterprise transformation", "delivery operating model",
    "AI-enabled delivery", "SAP transformation", "data transformation",
    "integration governance", "supply chain transformation",
  ],
  authors: [{ name: "Neatch E.U.R.L." }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NEATCH | Transformation, Gouvernance & Delivery",
    description:
      "Piloter les transformations complexes. Livrer ce qui compte. Gouvernance et delivery de programmes ERP, data, IA et intégration.",
    url: "/",
    siteName: "Neatch",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEATCH | Transformation, Gouvernance & Delivery",
    description:
      "Piloter les transformations complexes. Livrer ce qui compte.",
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
