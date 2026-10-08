import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales | Neatch",
  description: "Mentions légales de Neatch E.U.R.L.",
  alternates: { canonical: "/legal" },
  openGraph: { title: "Mentions légales | NEATCH", description: "Mentions légales de NEATCH E.U.R.L.", url: "/legal" },
};

export default function LegalPage() {
  return (
    <><Navigation />
      <main id="main-content" className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="space-y-10">
          <Button asChild variant="outline"><Link href="/">← Retour à l’accueil</Link></Button><div className="space-y-4"><span className="font-mono text-xs text-muted-foreground">Neatch E.U.R.L. / Informations légales</span>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Mentions légales
          </h1><p>Les informations relatives à l’éditeur du site, à son utilisation et à la protection de vos données.</p></div>

          <div className="space-y-8">
            <section className="border-t pt-8">
              <div className="mb-4 text-xl font-semibold tracking-tight">
                <h2>Éditeur du site</h2>
              </div>
              <div className="space-y-3 text-sm leading-7 text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">Raison sociale :</span> NEATCH E.U.R.L.
                </p>
                <p>
                  <span className="font-medium text-foreground">Forme juridique :</span> Entreprise
                  Unipersonnelle à Responsabilité Limitée
                </p>
                <p>
                  <span className="font-medium text-foreground">SIREN :</span> 831282066
                </p>
                <p>
                  <span className="font-medium text-foreground">SIRET du siège :</span> 83128206600024
                </p>
                <p>
                  <span className="font-medium text-foreground">Email :</span>{" "}
                  <a
                    href="mailto:contact@neatch.com"
                    className="text-foreground underline underline-offset-4"
                  >
                    contact@neatch.com
                  </a>
                </p>
                <p>
                  <span className="font-medium text-foreground">Directeur de la publication :</span> Lionel
                  Sultan
                </p>
              </div>
            </section>

            <section className="border-t pt-8">
              <div className="mb-4 text-xl font-semibold tracking-tight">
                <h2>Hébergement</h2>
              </div>
              <div className="space-y-3 text-sm leading-7 text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">Hébergeur :</span> Vercel Inc.
                </p>
                <p>
                  <span className="font-medium text-foreground">Adresse :</span> 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis
                </p>
              </div>
            </section>

            <section className="border-t pt-8">
              <div className="mb-4 text-xl font-semibold tracking-tight">
                <h2>Propriété intellectuelle</h2>
              </div>
              <div className="space-y-3 text-sm leading-7 text-muted-foreground">
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

            <section className="border-t pt-8">
              <div className="mb-4 text-xl font-semibold tracking-tight">
                <h2>Protection des données personnelles</h2>
              </div>
              <div className="space-y-3 text-sm leading-7 text-muted-foreground">
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
                    className="text-foreground underline underline-offset-4"
                  >
                    contact@neatch.com
                  </a>
                </p>
              </div>
            </section>

            <section className="border-t pt-8">
              <div className="mb-4 text-xl font-semibold tracking-tight">
                <h2>Cookies</h2>
              </div>
              <div className="space-y-3 text-sm leading-7 text-muted-foreground">
                <p>
                  Ce site ne dépose pas de cookies de mesure d’audience, de personnalisation ou de publicité.
                  Si des outils de mesure ou services tiers sont ajoutés ultérieurement, cette information sera
                  mise à jour.
                </p>
              </div>
            </section>

            <section className="border-t pt-8">
              <div className="mb-4 text-xl font-semibold tracking-tight">
                <h2>Conditions générales d’utilisation</h2>
              </div>
              <div className="space-y-3 text-sm leading-7 text-muted-foreground">
                <p>
                  L’utilisation de ce site implique l’acceptation pleine et entière des conditions générales
                  d’utilisation décrites ci-après. Ces conditions d’utilisation sont susceptibles d’être
                  modifiées ou complétées à tout moment.
                </p>
              </div>
            </section>

            <section className="border-t pt-8">
              <div className="mb-4 text-xl font-semibold tracking-tight">
                <h2>Limitation de responsabilité</h2>
              </div>
              <div className="space-y-3 text-sm leading-7 text-muted-foreground">
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

            <section className="border-t pt-8">
              <div className="mb-4 text-xl font-semibold tracking-tight">
                <h2>Liens hypertextes</h2>
              </div>
              <div className="space-y-3 text-sm leading-7 text-muted-foreground">
                <p>
                  Ce site peut contenir des liens hypertextes vers d’autres sites. NEATCH E.U.R.L. n’exerce
                  aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                </p>
              </div>
            </section>

            <section className="border-t pt-8">
              <div className="mb-4 text-xl font-semibold tracking-tight">
                <h2>Droit applicable</h2>
              </div>
              <div className="space-y-3 text-sm leading-7 text-muted-foreground">
                <p>
                  Les présentes mentions légales sont régies par le droit français. En cas de litige, les
                  tribunaux français seront seuls compétents.
                </p>
              </div>
            </section>
          </div>

          
          <p className="font-mono text-xs text-muted-foreground">Dernière mise à jour : 8 octobre 2026</p>
        </div>
      </main>
      <Footer /></>
  );
}
