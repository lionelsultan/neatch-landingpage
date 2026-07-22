import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales | Neatch",
  description: "Mentions légales de Neatch E.U.R.L.",
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950">
      <nav className="border-b border-neutral-200 bg-white/90 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-black text-neutral-950">
              Neatch
            </Link>
            <Link
              href="/"
              className="text-sm font-semibold text-neutral-600 transition-colors hover:text-neutral-950"
            >
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </nav>

      <main
        id="main-content"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-neutral-500">
          Neatch E.U.R.L.
        </p>
        <h1 className="mb-10 text-4xl font-black leading-tight text-neutral-950 md:text-5xl">
          Mentions légales
        </h1>

        <div className="prose prose-neutral max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">
              Éditeur du site
            </h2>
            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm space-y-2">
              <p className="text-neutral-700">
                <strong>Raison sociale :</strong> NEATCH E.U.R.L.
              </p>
              <p className="text-neutral-700">
                <strong>Forme juridique :</strong> Entreprise Unipersonnelle à
                Responsabilité Limitée
              </p>
              <p className="text-neutral-700">
                <strong>SIREN :</strong> 831282066
              </p>
              <p className="text-neutral-700">
                <strong>SIRET du siège :</strong> 83128206600024
              </p>
              <p className="text-neutral-700">
                <strong>Email :</strong>{" "}
                <a
                  href="mailto:contact@neatch.com"
                  className="font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-950"
                >
                  contact@neatch.com
                </a>
              </p>
              <p className="text-neutral-700">
                <strong>Directeur de la publication :</strong>{" "}
                <span>Lionel Sultan</span>
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">
              Hébergement
            </h2>
            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm space-y-2">
              <p className="text-neutral-700">
                <strong>Hébergeur :</strong>{" "}
                <span>o2switch</span>
              </p>
              <p className="text-neutral-700">
                <strong>Adresse :</strong>{" "}
                <span>
                  222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France
                </span>
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">
              Propriété intellectuelle
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              L&apos;ensemble de ce site relève de la législation française et
              internationale sur le droit d&apos;auteur et la propriété
              intellectuelle. Tous les droits de reproduction sont réservés, y
              compris pour les documents téléchargeables et les représentations
              iconographiques et photographiques.
            </p>
            <p className="text-neutral-600 leading-relaxed mt-4">
              La reproduction de tout ou partie de ce site sur un support
              électronique ou autre est formellement interdite sauf autorisation
              expresse du directeur de la publication.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">
              Protection des données personnelles
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés, vous disposez de
              droits concernant vos données personnelles : droit d&apos;accès,
              de rectification, de suppression, de limitation du traitement, de
              portabilité et d&apos;opposition.
            </p>
            <p className="text-neutral-600 leading-relaxed mt-4">
              Pour exercer ces droits ou pour toute question relative à la
              protection de vos données, vous pouvez nous contacter à
              l&apos;adresse :{" "}
              <a
                href="mailto:contact@neatch.com"
                className="font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-950"
              >
                contact@neatch.com
              </a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">Cookies</h2>
            <p className="text-neutral-600 leading-relaxed">
              Ce site ne dépose pas de cookies de mesure d&apos;audience, de
              personnalisation ou de publicité. Si des outils de mesure ou services
              tiers sont ajoutés ultérieurement, cette information sera mise à jour.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">
              Conditions générales d&apos;utilisation
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              L&apos;utilisation de ce site implique l&apos;acceptation pleine
              et entière des conditions générales d&apos;utilisation décrites
              ci-après. Ces conditions d&apos;utilisation sont susceptibles
              d&apos;être modifiées ou complétées à tout moment.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">
              Limitation de responsabilité
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Les informations contenues sur ce site sont aussi précises que
              possible et le site est périodiquement remis à jour, mais peut
              toutefois contenir des inexactitudes, des omissions ou des
              lacunes.
            </p>
            <p className="text-neutral-600 leading-relaxed mt-4">
              NEATCH E.U.R.L. ne pourra être tenue responsable des dommages
              directs et indirects causés au matériel de l&apos;utilisateur,
              lors de l&apos;accès au site, et résultant soit de
              l&apos;utilisation d&apos;un matériel ne répondant pas aux
              spécifications techniques requises, soit de l&apos;apparition
              d&apos;un bug ou d&apos;une incompatibilité.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">
              Liens hypertextes
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Ce site peut contenir des liens hypertextes vers d&apos;autres
              sites. NEATCH E.U.R.L. n&apos;exerce aucun contrôle sur ces sites
              et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">
              Droit applicable
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Les présentes mentions légales sont régies par le droit français.
              En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section className="border-t border-neutral-200 pt-8">
            <p className="text-sm text-neutral-500">
              Dernière mise à jour : 20 juillet 2026
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-neutral-200 bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-neutral-600">
            &copy; {new Date().getFullYear()} Neatch E.U.R.L. Tous droits
            réservés. | SIREN : 831282066
          </p>
        </div>
      </footer>
    </div>
  );
}
