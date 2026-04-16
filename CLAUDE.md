# Jessica Giordano — Assistante Maternelle · CLAUDE.md

> Référence IA pour ce projet. Mise à jour : avril 2026.

---

## 1. Identité

| Champ               | Valeur                                                                        |
| ------------------- | ----------------------------------------------------------------------------- |
| **Nom**             | Jessica Giordano — Assistante Maternelle                                      |
| ~~Ancien nom~~      | ~~Les bébés Clém~~ — **abandonné, ne plus utiliser**                          |
| **Localisation**    | 4 Rue du Pré l'Étang, Lotissement la Roussille, 19700 Saint-Clément (Corrèze) |
| **Agrément**        | Depuis juin 2011                                                              |
| **Spécialité**      | LSF, TSA, besoins spécifiques                                                 |
| **Slogan**          | _"Grandir ensemble, pas à pas"_                                               |
| **Tél**             | 06.61.99.74.95 (`0661997495`)                                                 |
| **Email**           | jeully19@gmail.com _(pro à configurer)_                                       |
| **Horaires**        | Lun-Ven, temps complet/partiel/périscolaire, mercredis et vacances            |
| **Places**          | 2 actuellement (modifiable dans `SITE_DATA.placesDisponibles`)                |
| **Google Business** | https://share.google/YpFQO6T4wNdtFiQPq                                        |

---

## 2. Stack & structure

- **React 18 + TypeScript** via Vite · **Tailwind CSS v4** (config dans `vite.config.ts`) · **Framer Motion** (`motion/react`) · **Lucide React** · **pnpm**
- Tout le site est dans **`src/App.tsx`** (monopage, zéro routing)
- Assets dans `public/images/` (3 sous-dossiers : `lieux/`, `enfants/`, `textes/`)

---

## 3. Palette couleur (NE PAS MODIFIER)

`#2C3D56` navy · `#4A6885` steel · `#7A9EB8` sky · `#B8CED9` mist · `#E4EEF4` white · `#EDE7DC` cream · `#D4A854` gold

---

## 4. Données constantes (haut de App.tsx)

```ts
SITE_DATA = { nom, slogan, telephone, telephoneRaw, email, adresse, ville,
              googleBusiness, googleMaps, agrement, placesDisponibles,
              tarifHoraire/Complet/Partiel/Peri: "TARIF_*_A_RENSEIGNER" }
```

Tous les tarifs sont des placeholders — à renseigner par Jessica.

---

## 5. Images — mapping complet (objet IMAGES)

Tout modifier via l'objet `IMAGES` en haut de `App.tsx` uniquement.

| Clé                   | Fichiers                                                                                          | Usage                      |
| --------------------- | ------------------------------------------------------------------------------------------------- | -------------------------- |
| `heroSlides` (6)      | `lieux/jardin_02`, `roussille`, `jeux_maquette`, `entree`, `jardin_01`, `rangement`               | Carrousel hero plein écran |
| `logo`                | `bebesclem_illustration_lapin.jpg`                                                                | Nav + footer               |
| `apropos` (4)         | `jardin_02`, `bibliotheque`, `jeux_maquette`, `entree`                                            | Grille à propos            |
| `portfolio` (8)       | 6 lieux + `bibliotheque` + `affiche_photos_enfants`                                               | Galerie cadre de vie       |
| `dessinsEnfants` (10) | `avis_jetadore_02`, `merci_jessica_02`, `merci_occupee_02`, `dessin_*` (×6), `illustration_livre` | Grille avis                |
| `documentsTextes` (7) | `texte_01-04`, `manuscrit_01-02`, `affiche_verte`                                                 | Galerie lettres familles   |
| `illustrations` (2)   | `arbre_genet`, `ballons`                                                                          | Réservées / décoratives    |

> `bebesclem_logo_carte_pro.webp` non utilisé (remplacé par lapin). `arbre_genet` et `ballons` stockés mais pas encore placés.

---

## 6. Sections (ordre de rendu)

| Section       | id           | Notes                                                                                                                                                       |
| ------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nav fixe      | -            | Logo lapin cliquable → scroll top · Liens : À propos, Services, Tarifs, Portfolio, Avis, Contact · CTA tél gold                                             |
| **Hero**      | `#accueil`   | `HeroSection()` — carrousel 6 slides paysage (4:3→16:9→21:9), overlay gradient, texte overlay desktop / sous-image mobile                                   |
| Stats 4 cards | -            | Agréée 2011 · LSF · Saint-Clément · Lun-Ven                                                                                                                 |
| À propos      | `#a-propos`  | Grille 2×2 photos lieux + texte + checklist 5 items + badge PMI                                                                                             |
| Expertise     | -            | 3 cards : LSF · Besoins spécifiques · Éveil & développement                                                                                                 |
| Services      | `#services`  | 5 services icônes gauche + encart navy droite (horaires, CMG, localisation)                                                                                 |
| **Tarifs**    | `#tarifs`    | 3 cards placeholders + bloc CAF → **tarifs à renseigner par Jessica**                                                                                       |
| Portfolio     | `#portfolio` | 8 photos, grille masonry, 1ère carte col-span-2, zoom hover                                                                                                 |
| **Avis**      | `#avis`      | 1) Grille 5 col × 10 dessins enfants avec légère rotation hover · 2) 4 témoignages texte (Enola, Mélody, Gabrielle, Romain) · 3) Galerie 7 lettres familles |
| **Contact**   | `#contact`   | Fond navy · Tél + adresse + email + lien Google Business ⭐ · Carte Maps embed + boutons Itinéraire/Fiche Google · Bloc rappel tél+mail rapide              |
| Footer        | -            | In Contact section · © + crédit Arx Systema                                                                                                                 |

---

## 7. Composants internes

- **`<Section>`** — wrapper `py-16 px-6→24`, `max-w-7xl`
- **`<Card>`** — `whileInView` entry + `whileHover y:-6`, fond `#E4EEF4`
- **`<SectionTitle>`** — `whileInView` entry
- **`HeroSection()`** — composant fonction avec `useState/useEffect` pour le carrousel

---

## 8. Animations (Framer Motion)

- **Hero** : fade + scale 1.04→1 à chaque slide · indicateurs barres plates
- **Cards** : `whileInView opacity+y` (once) + `whileHover y:-6`
- **Images** : zoom interne `whileHover scale:1.07-1.09` avec `overflow-hidden` sur le parent
- **Dessins enfants** : `whileHover y:-4 + rotate(±1deg)`

---

## 9. Contact — décisions prises

- ❌ Formulaire supprimé (pas de backend)
- ❌ Facebook supprimé
- ✅ Google Business link (étoile dorée) dans la nav contact gauche
- ✅ Google Maps iframe + bouton Itinéraire + bouton Fiche Google
- ✅ Gros bouton tél gold en rappel rapide

---

## 10. Roadmap future

1. Tarifs réels (demander à Jessica)
2. Email pro + nom de domaine
3. Formulaire connecté (Brevo/Formspree)
4. Hébergement payant (hors Vercel free)
5. SEO schema.org `ChildCare`
