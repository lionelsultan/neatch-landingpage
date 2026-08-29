import { ArrowUpRight, Mail, UserRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactForm() {
  return (
    <section id="contact" className="bg-background py-20 md:py-28" aria-labelledby="contact-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <Badge variant="secondary" className="w-fit">Contact</Badge>
            <CardTitle id="contact-title" className="text-3xl md:text-5xl">
              Parlons de votre contexte
            </CardTitle>
            <CardDescription className="max-w-3xl text-lg leading-8">
              Si vous avez un sujet IT, produit, projet, agile ou delivery à cadrer,
              piloter ou sécuriser, prenons un temps d’échange. Nous clarifierons
              le contexte, les enjeux, le niveau d’urgence et le mode d’intervention
              le plus utile.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <CardTitle>Email</CardTitle>
                  <CardDescription>contact@neatch.com</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline">
                    <a href="mailto:contact@neatch.com" aria-label="Envoyer un email à Neatch">
                      Envoyer un email
                      <ArrowUpRight />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <UserRound className="h-5 w-5 text-muted-foreground" />
                  <CardTitle>LinkedIn</CardTitle>
                  <CardDescription>Contacter Lionel Sultan</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline">
                    <a
                      href="https://linkedin.com/in/lionelsultan"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Contacter Lionel Sultan sur LinkedIn"
                    >
                      Ouvrir LinkedIn
                      <ArrowUpRight />
                      <span className="sr-only">, s’ouvre dans un nouvel onglet</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
