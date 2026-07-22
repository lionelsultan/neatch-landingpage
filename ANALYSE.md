# Analyse du repo — Neatch Landing Page

## Stack technique

- **Next.js 15.5.21** avec App Router
- **React 19** + **TypeScript** en mode strict
- **Tailwind CSS 3.4** pour le styling utilitaire
- **OpenNext Cloudflare 1.20** et **Wrangler 4.113** pour les builds/deploys Cloudflare

---

## Structure du projet

```
app/
├── page.tsx             — Landing page principale
├── layout.tsx           — Root layout + métadonnées SEO
├── globals.css          — Design system utilitaire et styles globaux
├── icon.svg             — Favicon Neatch
├── legal/page.tsx       — Mentions légales
├── opengraph-image.tsx  — Image Open Graph générée
├── robots.ts            — Robots.txt
├── sitemap.ts           — Sitemap XML
└── components/
    ├── Navigation.tsx   — Navbar responsive avec scroll detection
    ├── FAQ.tsx          — Accordéon FAQ
    ├── ContactForm.tsx  — Bloc contact email + LinkedIn
    └── Footer.tsx       — Footer navigation, contact et positionnement
```

---

## Architecture

| Aspect | Choix |
|--------|-------|
| Composants | Server components par défaut, `"use client"` uniquement pour Navigation, FAQ et Footer |
| State | Hooks React locaux, pas de store externe |
| Données | Contenu éditorial hard-codé dans les composants |
| Routing | App Router Next.js |
| Styling | Tailwind + classes globales `notion-*` |
| Responsive | Mobile-first, breakpoints `sm/md/lg` |

---

## Sections de la page principale

1. **Hero** — proposition de valeur, CTA et aperçu de qualification.
2. **Missions** — mission directe, sélection et filtre terrain.
3. **Méthode** — compréhension, recherche, qualification, présentation.
4. **Partenaires** — positionnement auprès des plateformes et cabinets.
5. **Contextes** — situations où le choix du consultant est critique.
6. **Profil** — carte de visite de Lionel Sultan et expérience Accenture détaillée.
7. **Références** — organisations, rôles et missions extraites du CV.
8. **FAQ** — réponses aux objections principales.
9. **Contact** — email et LinkedIn.

---

## Points forts

- Accessibilité correcte : skip-link, ARIA labels, headings, `prefers-reduced-motion`.
- SEO de base présent : métadonnées, Open Graph, locale `fr_FR`, robots.
- Identité visuelle cohérente : palette neutre, favicon aligné, pages légales harmonisées.
- Build statique validé sur Next.js.
- Contenu aligné sur le CV et sur le positionnement freelance expérimenté / qualification de consultants.

---

## Points d'attention

- **Dépendances** — `npm audit --omit=dev` est propre. Les dépendances transitives sensibles sont verrouillées par overrides (`next > postcss` et `sharp`) tant que Next et Wrangler n'intègrent pas directement les versions corrigées.
- **Lint** — migration effectuée vers l'ESLint CLI (`eslint .`) avec configuration flat compatible Next.
- **Browserslist** — `caniuse-lite` mis à jour après l'audit.
- **Contenu hard-codé** — chaque modification éditoriale passe par le code.
- **Pas d'analytics** — aucun tracking configuré.
- **Mono-langue** — uniquement français.

---

## Identité

- Société : **Neatch E.U.R.L.** (SIREN 831282066)
- Fondateur : Lionel Sultan
- Contact : contact@neatch.com
- LinkedIn : linkedin.com/in/lionelsultan
- Hébergeur : o2switch, Clermont-Ferrand
