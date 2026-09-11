# Neatch — Proposition de direction artistique

> Mise en production du 11 septembre 2026 : Glacier éditorial est désormais intégré à `app/page.tsx` et servi à la racine `/`. Les maquettes historiques sont archivées dans `docs/design-proposals/` ; leurs anciennes URL redirigent vers l’accueil. Les chemins et états décrits ci-dessous documentent les étapes de conception.

Étude du 10 septembre 2026, fondée sur le code et le rendu local du site actuel.

Maquette : `/concept-neatch.html` (lancer `npm run dev -- --port 3010`, puis ouvrir `http://localhost:3010/concept-neatch.html`). Le bouton ◐ compare les ambiances sombre et claire.

## Lecture du design actuel

Le site exprime du sérieux : palette crème, portrait personnel, intitulé de mission explicite et références détaillées. La navigation, les accordéons et les prises de contact sont faciles à comprendre. Ces qualités constituent une bonne base.

La composition traduit moins bien l’expertise technologique et la singularité de Neatch :

- Le panneau de droite cumule portrait, biographie et secteurs. L’alignement vertical au centre repousse le titre et les appels à l’action ; à la taille de fenêtre observée (environ 1265 × 712), les boutons du hero sont sous la ligne de flottaison.
- Les cartes, parfois imbriquées, structurent presque toutes les sections. Cette répétition donne un poids visuel similaire aux services, aux chiffres, à la méthode et aux preuves.
- Les références détaillées arrivent après les principes, les publics et la méthode. Les résultats les plus convaincants demandent un effort de recherche.
- La palette très discrète, les icônes génériques et les nombreux badges donnent une impression de présentation professionnelle standard plutôt que d’identité singulière.
- Les chiffres apparaissent à plusieurs endroits ; les « 26 missions » et « 14 références client » gagneraient à être contextualisés pour éviter une comparaison involontaire.
- Inter est déclarée dans la pile typographique, mais aucun chargement de cette police n’apparaît dans le layout examiné. Le rendu dépend donc des polices disponibles sur l’appareil.

## Direction proposée : un futurisme sobre

L’idée directrice est la trajectoire commune : Neatch relie stratégie, produit et delivery pour transformer un contexte complexe en action. Trois orbites autour d’un centre donnent une traduction visuelle à cette promesse.

La proposition associe un fond encre verte `#091411`, un texte ivoire `#F1F4E9` et un accent vert lumineux `#C1F994`. Une grille discrète, des filets fins, des repères numérotés et un mouvement orbital lent apportent la dimension futuriste. La typographie est ample, resserrée et peu chargée en graisse. La maquette utilise une pile système sans téléchargement ; une police de marque auto-hébergée pourra être choisie lors de l’intégration.

Le portrait devient une signature humaine sous la promesse. Les références apparaissent immédiatement après l’introduction. Les expertises s’organisent en colonnes ouvertes ; les missions combinent une grande étude de cas et deux exemples courts. La méthode prend la forme d’un parcours en quatre étapes.

Accroche proposée : « Transformer la complexité en mouvement. » Le paragraphe qui suit précise le métier et les missions digitales critiques, afin que le traitement abstrait reste compréhensible.

Je recommande l’ambiance sombre comme direction principale. La variante claire sert à comparer le degré de rupture avec l’identité actuelle. Le sélecteur de thème est un outil de présentation ; sa présence dans le site final reste facultative.

## Parcours cible

1. Promesse, activité explicite, appel à échanger et signature personnelle.
2. Sélection de références client.
3. Trois domaines d’intervention.
4. Missions et résultats contextualisés.
5. Méthode en quatre étapes.
6. Contact direct.

Dans une refonte complète, conserver l’accès aux quatorze références et à la FAQ. L’identification de consultants peut devenir un module secondaire proche du contact, pour garder l’intervention personnelle au centre du positionnement. Le GenAI mérite un exemple concret issu de la mission Dior, plutôt qu’une promesse supplémentaire non étayée.

## Périmètre de la maquette

Le fichier `public/concept-neatch.html` est une proposition autonome. L’accueil, les composants, les styles de production et les mentions légales n’ont pas été modifiés. Aucune publication n’a été effectuée. Le fichier se trouve dans `public` : un futur déploiement du dépôt l’exposerait malgré sa directive `noindex` ; le retirer du livrable de production si cette proposition doit rester locale.

Les résultats affichés proviennent du contenu existant : 12 équipes chez Dior, plus de 400 utilisateurs chez Chanel, réduction de plus de 80 % de l’attente avec Smart Access chez EDF Renouvelables. Ils sont repris pour la composition, sans nouvelle vérification externe. Le budget Dior a été actualisé sur instruction de Lionel Sultan : plus de 2M€ de budget géré par PI. Les noms des clients sont du texte, sans ajout de logos externes.

La maquette montre une sélection de sections, avec des liens vers les références complètes et les mentions légales du site actuel. Le contact ouvre un email ou LinkedIn ; aucun formulaire ni envoi automatique n’est ajouté.

## Vérifications

- Inspection visuelle de l’accueil actuel et de la proposition sur ordinateur.
- Inspection mobile à une largeur de 390 px : pas de débordement horizontal mesuré, images chargées.
- Bascule sombre / clair, pause de l’animation, lien vers les missions et ouverture du détail Dior vérifiés dans le navigateur.
- Styles de focus, lien d’évitement, structure de titres et alternative textuelle du visuel intégrés.
- Animation désactivée via `prefers-reduced-motion`, avec commande de pause supplémentaire.

Ces vérifications ne constituent pas un audit complet d’accessibilité ni une validation de conversion. Une intégration finale nécessitera notamment une revue clavier complète et la validation des contrastes, du contenu et des performances sur les appareils ciblés.

## Variante 02 — Glacier

À la demande de Lionel, une seconde proposition couleur est disponible dans `/concept-neatch-glacier.html`. Elle associe bleu nuit `#080F20`, surfaces bleu ardoise `#101D33`, blanc froid `#EFF5FF` et cyan glacier `#82E4F5`. Les halos, filets, chiffres et boutons suivent cette palette. Le mode clair utilise un blanc bleuté et un accent bleu pétrole plus foncé pour la lecture. Cette variante conserve le contenu actualisé, dont le budget Dior de plus de 2M€ par PI, et offre un lien de comparaison vers la proposition verte.

## Variante 03 — Cyberpunk 2077

Expérimentation demandée par Lionel, visible dans `/concept-neatch-cyberpunk.html` : jaune acide `#F5EF18`, noir charbon `#090A0E`, cyan `#49EFFF` et magenta `#FF539A`. Typographie capitale inclinée, boutons aux angles coupés, cadres techniques, trame de balayage et décalages chromatiques statiques. Une ligne lumineuse lente complète les orbites ; la pause et la préférence de mouvement réduit couvrent aussi cet effet. Cette piste exploratoire reprend le contenu de Glacier, notamment plus de 2M€ de budget géré par PI. Aucun asset du jeu n’est utilisé.

## Évolution de Glacier — Palette classique

À la demande de Lionel, `/concept-neatch-glacier.html` revient à une palette classique et s’ouvre désormais en mode clair : blanc `#FFFFFF`, bleu marine `#18283F`, gris ardoise `#5D6877`, bleu sobre `#294B7A` pour les accents et les boutons. Les surfaces secondaires sont gris clair `#F4F6F8`. Les halos sont atténués et les points lumineux deviennent mats. La composition de Glacier, son animation orbitale et le contenu sont conservés ; le mode sombre assorti reste accessible via ◐. Cette évolution remplace la précédente palette cyan du fichier Glacier.

## Variante typographique — Glacier éditorial

Proposition dans `/concept-neatch-editorial.html`, inspirée du contraste typographique observé sur [bcg.com](https://www.bcg.com/) le 10 septembre 2026. Le titre principal utilise Henderson BCG Serif (graisse calculée 300), avec notamment Palatino et Georgia dans sa pile de secours ; le texte courant utilise Henderson BCG Sans (graisse 400), avec Helvetica Neue et Arial en secours.

La maquette utilise Palatino pour les grands titres et les chiffres, avec Helvetica Neue pour le corps, les boutons et la navigation. Ces familles sont des alternatives système : aucun fichier Henderson n’est copié. Des polices de secours sont prévues, mais leur rendu dépend de l’appareil. Les repères auparavant monospace passent en sans-serif et les espacements sont adaptés aux empattements. Les noms de clients et le logo gardent leur traitement.

La palette de Glacier classique est conservée intégralement, ainsi que les corrections du pied de page, de la grille client et du budget Dior. Un lien permet de comparer avec la typographie précédente.
