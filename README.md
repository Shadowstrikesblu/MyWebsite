# Portfolio – Harvey Mouloundou

Site personnel : présentation, CV en ligne, projets et formulaire de contact.
Construit avec **Next.js 15** (App Router), **React 19**, **TypeScript** et **Tailwind CSS 4**, exporté en site statique et hébergé via cPanel.

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # génère le site statique dans out/
```

> Si le build échoue avec une erreur du type `Cannot find module for page`, supprimez le dossier `.next` puis relancez `npm run build` (cache corrompu, fréquent dans un dossier OneDrive).

## Pages

| Route | Fichier | Contenu |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Accueil, carrousel de projets, compétences |
| `/Resume` | `src/app/Resume/page.tsx` | CV en ligne + téléchargement du PDF |
| `/about` | `src/app/about/` | À propos, parcours |
| `/contact` | `src/app/contact/` | Coordonnées et formulaire (envoyé via Formspree) |
| `/Dashboard/projects/[id]` | `src/app/Dashboard/projects/[id]/page.tsx` | Détail d'un projet |

## Modifier le contenu

Tout le texte est centralisé dans `src/data/`, il n'est pas nécessaire de toucher aux composants :

- **`resume.js`** : CV (identité, objectif, expériences, formation, compétences, projets personnels)
- **`project.js`** : projets du carrousel et des pages de détail
- **`texts.js`** : textes des pages À propos et Contact

Le PDF téléchargeable est `public/CV_HARVEY_MOULOUNDOU.pdf`. Pour le remplacer, gardez le même nom de fichier ou mettez à jour le lien dans `src/app/Resume/page.tsx`.

## Images et icônes

- Les images sont dans `public/` au format **WebP** (largeur max 1600 px). Pour en ajouter une, convertissez-la avant de l'utiliser, par exemple avec `sharp` (déjà installé) :

  ```js
  const sharp = require('sharp');
  sharp('public/photo.png').resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 80 }).toFile('public/photo.webp');
  ```

- Les logos des technologies (section « Mes Compétences ») sont dans `public/icons/`, issus de [Devicon](https://devicon.dev). Pour une nouvelle techno, ajoutez son SVG et une entrée dans `SKILL_ICONS` (`src/components/Skillsbubble.tsx`).

## Styles

Thème clair / sombre géré par `ThemeProvider` (attribut `data-theme` sur `<html>`). Les classes réutilisables sont définies dans `src/app/globals.css` :

| Classe | Usage |
| --- | --- |
| `btn` | Bouton secondaire (contour marqué, bleu au survol) |
| `btn btn-primary` | Bouton principal (bleu, violet au survol) |
| `text-link` | Lien dans du texte (bleu souligné) |
| `chip chip-blue` / `chip-green` / `chip-neutral` | Pastilles de compétences et technos |
| `social-link` | Icônes réseaux sociaux du footer |
| `nav-link-active` | Indicateur de la page courante dans la navbar |
| `on-image` | Force le texte en blanc par-dessus une image (carrousel) |
| `glass-panel` / `glass-card` / `glass-surface` | Panneaux effet verre |

En thème clair, les classes `text-white` / `text-gray-*` sont converties en texte foncé : utilisez `on-image` pour du texte posé sur une photo.

## Déploiement

Le site est exporté en statique (`output: "export"` dans `next.config.ts`).

1. `npm run build` → génère `out/`
2. Pousser sur le dépôt relié à cPanel : `.cpanel.yml` copie `out/` dans `public_html/`

Voir aussi `DEPLOYMENT_GUIDE.md` pour d'autres options (Vercel, etc.).
