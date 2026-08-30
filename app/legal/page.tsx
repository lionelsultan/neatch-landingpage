import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales | Neatch",
  description: "Mentions légales de Neatch E.U.R.L.",
};

export default function LegalPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="bg-background pb-20 pt-24 md:pt-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary">Neatch E.U.R.L.</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-normal text-foreground md:text-5xl">
            Mentions légales
          </h1>

          <div className="mt-10 grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Éditeur du site</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2 text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Raison sociale :</span> NEATCH E.U.R.L.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Forme juridique :</span> Entreprise
                  Unipersonnelle à Responsabilité Limitée
                </p>
                <p>
                  <span className="font-semibold text-foreground">SIREN :</span> 831282066
                </p>
                <p>
                  <span className="font-semibold text-foreground">SIRET du siège :</span> 83128206600024
                </p>
                <p>
                  <span className="font-semibold text-foreground">Email :</span>{" "}
                  <a
                    href="mailto:contact@neatch.com"
                    className="font-semibold text-foreground underline decoration-muted-foreground underline-offset-4 transition-colors hover:decoration-foreground"
                  >
                    contact@neatch.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-foreground">Directeur de la publication :</span> Lionel
                  Sultan
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Hébergement</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2 text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Hébergeur :</span> o2switch
                </p>
                <p>
                  <span className="font-semibold text-foreground">Adresse :</span> 222-224 Boulevard Gustave
                  Flaubert, 63000 Clermont-Ferrand, France
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Propriété intellectuelle</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 text-muted-foreground">
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
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Protection des données personnelles</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 text-muted-foreground">
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
                    className="font-semibold text-foreground underline decoration-muted-foreground underline-offset-4 transition-colors hover:decoration-foreground"
                  >
                    contact@neatch.com
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Cookies</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Ce site ne dépose pas de cookies de mesure d’audience, de personnalisation ou de publicité.
                  Si des outils de mesure ou services tiers sont ajoutés ultérieurement, cette information sera
                  mise à jour.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Conditions générales d’utilisation</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  L’utilisation de ce site implique l’acceptation pleine et entière des conditions générales
                  d’utilisation décrites ci-après. Ces conditions d’utilisation sont susceptibles d’être
                  modifiées ou complétées à tout moment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Limitation de responsabilité</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 text-muted-foreground">
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
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Liens hypertextes</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Ce site peut contenir des liens hypertextes vers d’autres sites. NEATCH E.U.R.L. n’exerce
                  aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Droit applicable</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Les présentes mentions légales sont régies par le droit français. En cas de litige, les
                  tribunaux français seront seuls compétents.
                </p>
              </CardContent>
            </Card>
          </div>

          <Separator className="mb-6 mt-10" />
          <p className="text-sm text-muted-foreground">Dernière mise à jour : 20 juillet 2026</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
