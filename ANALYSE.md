# Analyse du repo — Neatch Landing Page

## Stack technique

- **Next.js 15.5.9** avec App Router + **React 19** + **TypeScript 5.7** (strict)
- **Tailwind CSS 3.4** pour le styling utilitaire
- **PostCSS + Autoprefixer** pour la compatibilité navigateurs

---

## Structure du projet

```
app/
├── page.tsx          — Page principale (24KB, 6 sections)
├── layout.tsx        — Root layout + métadonnées SEO
├── globals.css       — Animations CSS personnalisées
├── legal/page.tsx    — Page mentions légales
└── components/
    ├── Navigation.tsx — Navbar responsive avec scroll detection
    ├── FAQ.tsx        — Accordion animé
    ├── ContactForm.tsx— Email + LinkedIn animé
    └── Footer.tsx     — Footer 4 colonnes
```

---

## Architecture

| Aspect | Choix |
|--------|-------|
| Composants | Server components par défaut, `"use client"` uniquement si interactif |
| State | Hooks React (`useState`, `useEffect`) — pas de store externe |
| Données | Hard-codées inline (pas de CMS) |
| Routing | App Router Next.js (file-based) |
| Responsive | Mobile-first, breakpoints `sm/md/lg` |

---

## Sections de la page principale

1. **Hero** — gradient animé 10s + 2 CTAs
2. **Services** — 2 piliers, 8 services avec icônes SVG
3. **Méthode** — timeline 4 étapes (Cadrage → Sélection → Démarrage → Amélioration), layout différent desktop/mobile
4. **Pour les clients** — fond teal, 3 bénéfices
5. **Pour les freelances** — 3 bénéfices miroir
6. **Témoignages** — 3 cards avec citations

---

## Points forts

- Accessibilité soignée (ARIA labels, skip-link, hierarchy de headings, `prefers-reduced-motion`)
- SEO complet (Open Graph, robots, locale fr_FR)
- Animations premium (glow button, breathing shadow LinkedIn, hero gradient)
- TypeScript strict sans compromis
- Déployable statiquement sur Vercel sans backend

---

## Points d'attention

- **Formulaire de contact absent** — `ContactForm.tsx` affiche uniquement l'email/LinkedIn, aucun backend
- **Contenu hard-codé** — pas de CMS, toutes modifications passent par le code
- **Page légale incomplète** — sections avec placeholders en amber (adresse siège, politique de confidentialité détaillée, CGU complètes)
- **Pas d'analytics** — aucun tracking configuré
- **Mono-langue** — uniquement français

---

## Identité

- Société : **Neatch E.U.R.L.** (SIREN 831282066)
- Fondateur : Lionel Sultan
- Contact : contact@neatch.com
- Hébergeur : o2switch (Clermont-Ferrand)
