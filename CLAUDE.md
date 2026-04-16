# Les bébés Clém — Fonctionnement de l'appli

## Stack technique
- **React 18 + TypeScript** via Vite
- **Tailwind CSS v4** (config dans `vite.config.ts`, pas de `tailwind.config.js`)
- **Framer Motion** (`motion/react`) pour les animations d'entrée et hover
- **Lucide React** pour toutes les icônes
- **pnpm** comme gestionnaire de paquets

## Structure des fichiers
```
src/
  main.tsx      → point d'entrée React, monte <App /> dans #root
  App.tsx       → toute l'UI (composant unique, monopage)
  index.css     → import Tailwind + variables CSS de la charte couleur
index.html      → template HTML, référence main.tsx
```

## Architecture de l'App

### Composants internes (dans App.tsx)
- **`<Section>`** : wrapper de section avec padding responsive et max-width centré
- **`<Card>`** : carte avec hover animé (y: -5), fond `#E4EEF4`, bordure `#B8CED9`

### Sections de la page (dans l'ordre)
1. **Nav fixe** — logo, liens ancre, bouton tel
2. **Hero** — titre, slogan, CTA, image (picsum placeholder), blobs décoratifs
3. **Stats** — 4 cards : agréée 2011, LSF, localisation, horaires
4. **À propos** (Jessica Giordano) — grille photos + texte + checklist
5. **Expertise & Formations** — 3 cards : LSF, TSA, éveil
6. **Services** — liste avec icônes + encart "Infos pratiques" (marine nuit)
7. **Contact** — tél / adresse / Facebook + iframe Google Maps
8. **Footer** — copyright

## Charte couleur (variables CSS)
| Variable | Hex | Usage |
|---|---|---|
| `--color-night-navy` | `#2C3D56` | Textes foncés, nav contact, fond section sombre |
| `--color-steel-blue` | `#4A6885` | Textes secondaires, icônes médianes |
| `--color-sky-soft` | `#7A9EB8` | Textes tertiaires, labels, footer |
| `--color-mist` | `#B8CED9` | Bordures, fond section expertise |
| `--color-celestial-white` | `#E4EEF4` | Fond cards, sections claires |
| `--color-cream` | `#EDE7DC` | Fond principal de la page |
| `--color-gold-star` | `#D4A854` | Accent chaud : CTA, icônes, logo |

## Points clés
- **Tout est dans un seul fichier** `App.tsx` — pas de routing, pas de state
- Les **données** (téléphone, adresse) sont des constantes en haut du composant
- Les **images** sont des placeholders picsum (à remplacer par les vraies photos)
- La **carte Google Maps** est une iframe avec coordonnées approximatives
- Navigation par **ancres** (#accueil, #a-propos, #services, #contact)
- Site **responsive** : mobile-first, breakpoints `md` et `lg`
