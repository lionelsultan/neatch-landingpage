# Repositionnement NEATCH — Transformation & Delivery

La page d’accueil présente désormais NEATCH comme un cabinet indépendant spécialisé dans la gouvernance et le delivery de transformations complexes.

Le positionnement précise que NEATCH n’est pas une agence : Lionel Sultan pilote personnellement les interventions, réunit et organise des consultants d’ESN et des freelances issus de Malt, d’autres plateformes et de son réseau. Cette capacité est présentée dans la section About, la FAQ et le pied de page.

## Changements
- Hero, enjeux de programme, quatre piliers, domaines d’expertise.
- Approche Diagnose / Structure / Operate / Automate.
- AI-enabled Delivery et résultats attendus, sans KPI historiques inventés.
- Présentation du cabinet, références existantes et FAQ adaptées.
- Design éditorial ivoire / vert, menu mobile, navigation clavier et réduction des mouvements.
- Métadonnées et image Open Graph alignées ; canonical dédié aux mentions légales.
- Accueil rendu côté serveur, sans JavaScript spécifique pour les interactions natives.

## Vérification locale
```sh
npm ci
npm run dev
npm run lint
npm run build
npm run start
```
Ouvrir http://localhost:3000. `start` nécessite un build préalable. Aucun script de tests automatisés n’est configuré.

## Points éditoriaux à valider
- Les références et résultats détaillés proviennent du contenu existant ; confirmer leur actualité et leur autorisation de publication.
- ERP/SAP, cloud et IA figurent comme contextes de gouvernance, sans présenter NEATCH comme intégrateur généraliste.
- Les CTA ouvrent la messagerie à contact@neatch.com ; aucun service de prise de rendez-vous ajouté.

## Fichiers modifiés
- `app/components/EditorialHome.tsx` : contenu, sections et navigation de l’accueil.
- `app/editorial.css` : design éditorial et responsive.
- `app/layout.tsx` : métadonnées SEO et partage social.
- `app/opengraph-image.tsx` : visuel de partage.
- `app/legal/page.tsx` : canonical et wording de navigation.
- `app/components/Navigation.tsx`, `Footer.tsx`, `FAQ.tsx`, `ContactForm.tsx` : composants existants alignés sur le positionnement.
- `docs/repositionnement-neatch.md` : compte rendu et commandes locales.

## Validation réalisée
- `npm run lint` : succès.
- `npm run build` : succès, vérification TypeScript et génération statique incluses.
- Contrôle visuel de l’accueil et vérification du menu mobile à 390 px.
- Aucun débordement horizontal mobile ; aucune ancre interne manquante.
- Route `/legal` accessible, canonical `https://www.neatch.com/legal`.
- Aucun script de tests disponible dans le projet.
- Le build et le serveur local ont nécessité l’accès aux fichiers Wrangler dans AppData hors bac à sable.
