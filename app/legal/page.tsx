import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "../editorial.css";
import "./legal.css";

export const metadata: Metadata = {
  title: "Mentions légales | Neatch",
  description: "Mentions légales de Neatch E.U.R.L.",
};

export default function LegalPage() {
  return (
    <div className="editorial-site light legal-site"><header><nav className="wrap" aria-label="Navigation principale"><Link href="/" aria-label="Neatch, accueil"><Image className="logo" src="/neatch-logo-wordmark.png" alt="Neatch" width={119} height={31} /></Link><div className="nav-links"><Link href="/#expertise">Expertise</Link><Link href="/#references">Missions</Link><Link href="/#methode">Approche</Link></div><Link className="nav-cta" href="/#contact">Parlons de votre projet ↗</Link></nav></header>
      <main id="main-content" className="legal-main wrap">
        <div className="legal-content">
          <Link className="legal-back text-link" href="/">← Retour à l’accueil</Link><div className="legal-heading"><span className="mono muted">Neatch E.U.R.L. / Informations légales</span>
          <h1 className="legal-title">
            Mentions légales
          </h1><p>Les informations relatives à l’éditeur du site, à son utilisation et à la protection de vos données.</p></div>

          <div className="legal-sections">
            <section className="legal-section">
              <div className="legal-section-heading">
                <h2>Éditeur du site</h2>
              </div>
              <div className="legal-section-body">
                <p>
                  <span className="legal-label">Raison sociale :</span> NEATCH E.U.R.L.
                </p>
                <p>
                  <span className="legal-label">Forme juridique :</span> Entreprise
                  Unipersonnelle à Responsabilité Limitée
                </p>
                <p>
                  <span className="legal-label">SIREN :</span> 831282066
                </p>
                <p>
                  <span className="legal-label">SIRET du siège :</span> 83128206600024
                </p>
                <p>
                  <span className="legal-label">Email :</span>{" "}
                  <a
                    href="mailto:contact@neatch.com"
                    className="legal-link"
                  >
                    contact@neatch.com
                  </a>
                </p>
                <p>
                  <span className="legal-label">Directeur de la publication :</span> Lionel
                  Sultan
                </p>
              </div>
            </section>

            <section className="legal-section">
              <div className="legal-section-heading">
                <h2>Hébergement</h2>
              </div>
              <div className="legal-section-body">
                <p>
                  <span className="legal-label">Hébergeur :</span> Cloudflare, Inc. (Cloudflare Workers)
                </p>
                <p>
                  <span className="legal-label">Adresse :</span> 101 Townsend Street, San Francisco, CA 94107, États-Unis
                </p>
              </div>
            </section>

            <section className="legal-section">
              <div className="legal-section-heading">
                <h2>Propriété intellectuelle</h2>
              </div>
              <div className="legal-section-body">
                <p>
                  L’ensemble de ce site relève de la législation française et internationale sur le droit
                  d’auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y
                  compris pour les documents téléchargeables et les représentations iconographiques et
                  photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique ou autre est
                  formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </div>
            </section>

            <section className="legal-section">
              <div className="legal-section-heading">
                <h2>Protection des données personnelles</h2>
              </div>
              <div className="legal-section-body">
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
                  Informatique et Libertés, vous disposez de droits concernant vos données personnelles : droit
                  d’accès, de rectification, de suppression, de limitation du traitement, de portabilité et
                  d’opposition.
                </p>
                <p>
                  Pour exercer ces droits ou pour toute question relative à la protection de vos données, vous
                  pouvez nous contacter à l’adresse :{" "}
                  <a
                    href="mailto:contact@neatch.com"
                    className="legal-link"
                  >
                    contact@neatch.com
                  </a>
                </p>
              </div>
            </section>

            <section className="legal-section">
              <div className="legal-section-heading">
                <h2>Cookies</h2>
              </div>
              <div className="legal-section-body">
                <p>
                  Ce site ne dépose pas de cookies de mesure d’audience, de personnalisation ou de publicité.
                  Si des outils de mesure ou services tiers sont ajoutés ultérieurement, cette information sera
                  mise à jour.
                </p>
              </div>
            </section>

            <section className="legal-section">
              <div className="legal-section-heading">
                <h2>Conditions générales d’utilisation</h2>
              </div>
              <div className="legal-section-body">
                <p>
                  L’utilisation de ce site implique l’acceptation pleine et entière des conditions générales
                  d’utilisation décrites ci-après. Ces conditions d’utilisation sont susceptibles d’être
                  modifiées ou complétées à tout moment.
                </p>
              </div>
            </section>

            <section className="legal-section">
              <div className="legal-section-heading">
                <h2>Limitation de responsabilité</h2>
              </div>
              <div className="legal-section-body">
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible et le site est
                  périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou
                  des lacunes.
                </p>
                <p>
                  NEATCH E.U.R.L. ne pourra être tenue responsable des dommages directs et indirects causés au
                  matériel de l’utilisateur, lors de l’accès au site, et résultant soit de l’utilisation d’un
                  matériel ne répondant pas aux spécifications techniques requises, soit de l’apparition d’un
                  bug ou d’une incompatibilité.
                </p>
              </div>
            </section>

            <section className="legal-section">
              <div className="legal-section-heading">
                <h2>Liens hypertextes</h2>
              </div>
              <div className="legal-section-body">
                <p>
                  Ce site peut contenir des liens hypertextes vers d’autres sites. NEATCH E.U.R.L. n’exerce
                  aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                </p>
              </div>
            </section>

            <section className="legal-section">
              <div className="legal-section-heading">
                <h2>Droit applicable</h2>
              </div>
              <div className="legal-section-body">
                <p>
                  Les présentes mentions légales sont régies par le droit français. En cas de litige, les
                  tribunaux français seront seuls compétents.
                </p>
              </div>
            </section>
          </div>

          
          <p className="legal-date">Dernière mise à jour : 17 septembre 2026</p>
        </div>
      </main>
      <footer><div className="wrap"><Link href="/" aria-label="Neatch, accueil"><Image className="logo" src="/neatch-logo-wordmark.png" alt="Neatch" width={86} height={22} /></Link><span>© 2026 Neatch · Conseil indépendant, impact collectif.</span><Link href="/#faq">Questions fréquentes</Link><a href="mailto:contact@neatch.com">Contact ↗</a></div></footer></div>
  );
}
