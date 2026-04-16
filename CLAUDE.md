# Jessica Giordano — Assistante Maternelle · CLAUDE.md

> Référence IA pour ce projet. Mise à jour : avril 2026.

---

## 1. Identité

| Champ | Valeur |
|---|---|
| **Nom** | Jessica Giordano — Assistante Maternelle |
| ~~Ancien nom~~ | ~~Les bébés Clém~~ — **abandonné, ne plus utiliser** |
| **Localisation** | 4 Rue du Pré l'Étang, Lotissement la Roussille, 19700 Saint-Clément (Corrèze) |
| **Agrément** | Depuis juin 2011 |
| **Spécialité** | LSF, TSA, besoins spécifiques |
| **Slogan** | *"Grandir ensemble, pas à pas"* |
| **Tél** | 06.61.99.74.95 (`0661997495`) |
| **Email** | jeully19@gmail.com *(pro à configurer)* |
| **Horaires** | Lun-Ven, temps complet/partiel/périscolaire, mercredis et vacances |
| **Places** | 2 actuellement (modifiable dans `SITE_DATA.placesDisponibles`) |
| **Google Business** | https://share.google/YpFQO6T4wNdtFiQPq |

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

| Clé | Fichiers | Usage |
|---|---|---|
| `heroSlides` (6) | `lieux/jardin_02`, `roussille`, `jeux_maquette`, `entree`, `jardin_01`, `rangement` | Carrousel hero plein écran |
| `logo` | `bebesclem_illustration_lapin.jpg` | Nav + footer |
| `apropos` (4) | `jardin_02`, `bibliotheque`, `jeux_maquette`, `entree` | Grille à propos |
| `portfolio` (8) | 6 lieux + `bibliotheque` + `affiche_photos_enfants` | Galerie cadre de vie |
| `dessinsEnfants` (10) | `avis_jetadore_02`, `merci_jessica_02`, `merci_occupee_02`, `dessin_*` (×6), `illustration_livre` | Grille avis |
| `documentsTextes` (7) | `texte_01-04`, `manuscrit_01-02`, `affiche_verte` | Galerie lettres familles |
| `illustrations` (2) | `arbre_genet`, `ballons` | Réservées / décoratives |

> `bebesclem_logo_carte_pro.webp` non utilisé (remplacé par lapin). `arbre_genet` et `ballons` stockés mais pas encore placés.

---

## 6. Sections (ordre de rendu)

| Section | id | Notes |
|---|---|---|
| Nav fixe | — | Logo lapin cliquable → scroll top · Liens : À propos, Services, Tarifs, Portfolio, Avis, Contact · CTA tél gold |
| **Hero** | `#accueil` | `HeroSection()` — carrousel 6 slides paysage (4:3→16:9→21:9), overlay gradient, texte overlay desktop / sous-image mobile |
| Stats 4 cards | — | Agréée 2011 · LSF · Saint-Clément · Lun-Ven |
| À propos | `#a-propos` | Grille 2×2 photos lieux + texte + checklist 5 items + badge PMI |
| Expertise | — | 3 cards : LSF · Besoins spécifiques · Éveil & développement |
| Services | `#services` | 5 services icônes gauche + encart navy droite (horaires, CMG, localisation) |
| **Tarifs** | `#tarifs` | 3 cards placeholders + bloc CAF → **tarifs à renseigner par Jessica** |
| Portfolio | `#portfolio` | 8 photos, grille masonry, 1ère carte col-span-2, zoom hover |
| **Avis** | `#avis` | 1) Grille 5 col × 10 dessins enfants avec légère rotation hover · 2) 4 témoignages texte (Enola, Mélody, Gabrielle, Romain) · 3) Galerie 7 lettres familles |
| **Contact** | `#contact` | Fond navy · Tél + adresse + email + lien Google Business ⭐ · Carte Maps embed + boutons Itinéraire/Fiche Google · Bloc rappel tél+mail rapide |
| Footer | — | In Contact section · © + crédit Arx Systema |

---

## 7. Composants internes

- **`<Section>`** — wrapper `py-16 px-6→24`, `max-w-7xl`
- **`<Card>`** — `whileInView` entry + `whileHover y:-6`, fond `#E4EEF4`
- **`<SectionTitle>`** — `whileInView` entry
- **`HeroSection()`** — composant fonction avec `useState/useEffect` pour le carrousel

---

## 8. Animations (Framer Motion)

- **Hero** : fade + scale 1.04→1 à chaque slide · indicateurs barres plates
- **Blobs** : 2 orbes pulsantes idle (scale + opacity loop infini) — supprimées avec le nouveau hero plein écran
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

| **Ancien nom** | Les bébés Clém *(abandonné — ne plus utiliser en titre principal ; effacer partout sauf éventuellement en sous-texte très discret si nécessaire pour la continuité)* |
| **Activité** | Assistante maternelle agréée, accueil à domicile |
| **Localisation** | Saint-Clément (19700) — Corrèze, Limousin |
| **Agrément** | Depuis juin 2011 |
| **Spécialité** | LSF (Langue des Signes Française), TSA, besoins spécifiques |
| **Slogan** | *"Grandir ensemble, pas à pas"* |
| **Tél** | 06.61.99.74.95 |
| **Adresse** | 4 Rue du Pré l'Étang — Lotissement la Roussille, 19700 Saint-Clément |
| **Email** | jeully19@gmail.com *(temporaire — adresse pro à configurer ultérieurement)* |
| **Horaires** | Lundi — Vendredi, temps complet / partiel / périscolaire · Mercredis et vacances |
| **Aides** | Emploi direct par les parents · Remboursement CAF via CMG |
| **Places** | 2 places disponibles actuellement *(donnée dynamique à rendre éditable)* |

---

## 2. Stack technique

- **React 18 + TypeScript** via Vite
- **Tailwind CSS v4** (config dans `vite.config.ts`, pas de `tailwind.config.js`)
- **Framer Motion** (`motion/react`) — animations d'entrée et hover
- **Lucide React** — toutes les icônes
- **pnpm** — gestionnaire de paquets

---

## 3. Structure des fichiers

```
src/
  main.tsx        → point d'entrée React, monte <App /> dans #root
  App.tsx         → toute l'UI (composant unique, monopage)
  index.css       → import Tailwind + variables CSS charte couleur
  assets/
    images/       → voir section 6 ci-dessous (mapping complet)
index.html        → template HTML, référence main.tsx
```

---

## 4. Charte couleur (variables CSS — NE PAS MODIFIER)

| Variable | Hex | Usage |
|---|---|---|
| `--color-night-navy` | `#2C3D56` | Textes foncés, nav, fond section sombre |
| `--color-steel-blue` | `#4A6885` | Textes secondaires, icônes médianes |
| `--color-sky-soft` | `#7A9EB8` | Textes tertiaires, labels, footer |
| `--color-mist` | `#B8CED9` | Bordures, fond section expertise |
| `--color-celestial-white` | `#E4EEF4` | Fond cards, sections claires |
| `--color-cream` | `#EDE7DC` | Fond principal de la page |
| `--color-gold-star` | `#D4A854` | Accent chaud : CTA, icônes, logo |

---

## 5. Architecture de la page — sections dans l'ordre

### 5.1 Nav fixe
- Logo (carte pro ou typographie) + prénom/nom
- Liens ancre : Accueil · À propos · Services · Tarifs · Portfolio · Avis · Contact
- Bouton téléphone orange `--color-gold-star`

### 5.2 Hero
- **Titre principal** : `Assistante Maternelle` / `à Saint-Clément (19700)`
- Badge : *Agréée depuis 2011*
- Slogan : *"Grandir ensemble, pas à pas."*
- Accroche courte : accueil bienveillant, épanouissement, cadre sécurisé, **à domicile**
- Pastille verte animée : *2 places disponibles*
- CTA primaire : `Prendre contact` → ancre #contact
- CTA secondaire : `Voir mes services`
- Image hero : `bebesclem_domicile_roussille.jpg` ou `bebesclem_domicile_entree.webp`
- Badge flottant : *Garantie Décennale & RC* *(à adapter : Agrément PMI + Assurance)*

### 5.3 Stats / chiffres clés (4 cards)
| Icône | Libellé | Valeur |
|---|---|---|
| Shield | Agréée depuis | 2011 |
| HandMetal | Spécialité | Signes (LSF) |
| MapPin | Localisation | Saint-Clément |
| Clock | Horaires | Lundi - Vendredi |

### 5.4 À propos — Jessica Giordano
- Grille photos gauche : utiliser `bebesclem_domicile_jardin_01.webp`, `bebesclem_domicile_bibliotheque.jpg`, `bebesclem_domicile_jeux_exterieurs.webp`, `bebesclem_domicile_jeux_maquette.jpg`
- Texte : présentation personnelle, formations continues, valeurs
- Checklist verte :
  - Langue des Signes Française (LSF) avec les enfants
  - Favoriser le jeu libre et l'autonomie
  - Communication régulière avec les parents
  - Respect du rythme de chaque enfant
- Badge : `Assurance Décennale` → remplacer par `Agrément PMI — Corrèze`

### 5.5 Expertise & Formations (3 cards)
- **Communication Signée** : LSF facilitant l'acquisition du langage, cours hebdomadaires en association
- **Besoins Spécifiques** : TSA, troubles du langage, accueil inclusif et adapté
- **Éveil & Motricité** : jeu libre, espaces aménagés, activités adaptées à chaque stade

### 5.6 Services + Encart Infos pratiques
Colonne gauche — liste avec icônes :
- Accueil à domicile (temps complet, partiel, périscolaire)
- Activités d'éveil et motricité
- Sorties extérieures
- Lecture et activités manuelles
- Soutien à la parentalité

Encart droit `--color-night-navy` :
- Horaires d'accueil (lundi-vendredi, mercredis, vacances)
- Aides & Remboursements (CMG/CAF)
- Localisation (lotissement la Roussille, proches communes)

### 5.7 Tarifs *(section à créer — demande cliente)*
> **Axe client** : mettre en avant le prix abordable, la transparence, les aides CAF.

Structure suggérée :
- Titre : *Un accueil de qualité, à un tarif accessible*
- Texte explicatif : tarif horaire libre (fixé par contrat), remboursement CAF via CMG
- 2–3 cards : Temps complet · Temps partiel · Périscolaire
- Note : *Devis personnalisé sur demande — contactez Jessica directement*
- ⚠️ Les montants exacts sont à renseigner par la cliente (laisser des placeholders clairs dans le code : `TARIF_HORAIRE_A_RENSEIGNER`)

### 5.8 Portfolio / Cadre de vie *(section à enrichir)*
- Titre : *Un cadre de vie épanouissant*
- Galerie responsive : photos du domicile, du jardin, des espaces de jeux
- Images à utiliser (voir section 6) : domicile_entree, domicile_jardin_01/02, domicile_jeux_exterieurs, domicile_jeux_maquette, domicile_bibliotheque, domicile_rangement
- Sous-sections possibles : Intérieur · Jardin · Espaces dédiés

### 5.9 Avis / Témoignages *(section à créer — valorise la confiance)*
> **Axe client** : les dessins et mots d'enfants / parents sont des preuves sociales très puissantes dans ce secteur.

- Titre : *Ils me font confiance*
- Grille de cards avec les visuels d'avis manuscrits :
  - `bebesclem_avis_jetadore_01.webp` / `_02.jpg`
  - `bebesclem_avis_merci_jessica_01.webp` / `_02.jpg`
  - `bebesclem_avis_merci_occupee_01.webp` / `_02.jpg`
- Chaque card : image du dessin/mot + légende discrète (ex. *"Un mot d'un enfant accueilli"*)
- Optionnel : ajouter 1–2 témoignages texte de parents (à recueillir auprès de Jessica)

### 5.10 Contact
- Téléphone cliquable (`tel:0661997495`)
- Adresse postale
- ~~Lien Facebook~~ **supprimé** (demande cliente : Facebook non utilisé, lien non fonctionnel)
- Iframe Google Maps (coords : Saint-Clément 19700, lotissement la Roussille)
- Formulaire simple : Nom · Email · Message · Bouton envoi *(fonctionnel ou mailto: dans un premier temps)*

### 5.11 Footer
- Copyright Jessica Giordano · Assistante Maternelle Agréée en Corrèze (19)
- ~~"Les bébés Clém"~~ **retiré**
- Crédit : *Site réalisé par Arx Systema*

---

## 6. Mapping des assets images

> Tous les fichiers sont dans `src/assets/images/` (ou `public/images/` selon config).
> Les noms de fichiers sont fournis tels quels — certains existent en `.webp` et `.jpg`.

### Domicile & espaces
| Fichier | Usage suggéré |
|---|---|
| `bebesclem_domicile_roussille.jpg` | Hero (image principale) |
| `bebesclem_domicile_entree.webp` | Hero alternatif / portfolio |
| `bebesclem_domicile_jardin_01.webp` | Portfolio jardin |
| `bebesclem_domicile_jardin_02.webp` | Portfolio jardin |
| `bebesclem_domicile_jeux_exterieurs.webp` | Portfolio / section services |
| `bebesclem_domicile_jeux_maquette.jpg` | Portfolio / à propos |
| `bebesclem_domicile_bibliotheque.jpg` | Portfolio / à propos |
| `bebesclem_domicile_rangement.webp` | Portfolio (cadre de vie ordonné) |

### Avis & témoignages (dessins/mots d'enfants)
| Fichier | Usage |
|---|---|
| `bebesclem_avis_jetadore_01.webp` | Section Avis |
| `bebesclem_avis_jetadore_02.jpg` | Section Avis |
| `bebesclem_avis_merci_jessica_01.webp` | Section Avis |
| `bebesclem_avis_merci_jessica_02.jpg` | Section Avis |
| `bebesclem_avis_merci_occupee_01.webp` | Section Avis |
| `bebesclem_avis_merci_occupee_02.jpg` | Section Avis |

### Dessins d'enfants (décoratifs / portfolio activités)
| Fichier | Usage |
|---|---|
| `bebesclem_dessin_enfant_crayon.jpg` | Section éveil / activités |
| `bebesclem_dessin_enfant_multicolore.jpg` | Section éveil / activités |
| `bebesclem_dessin_enfant_pompons.jpg` | Section éveil / activités |
| `bebesclem_dessin_enfant_texte_01.jpg` | Portfolio ou avis |
| `bebesclem_dessin_enfant_texte_02.jpg` | Portfolio ou avis |
| `bebesclem_dessin_enfant_texte_03.jpg` | Portfolio ou avis |

### Illustrations (éléments décoratifs doux)
| Fichier | Usage |
|---|---|
| `bebesclem_illustration_arbre_genet.jpg` | Décoration section à propos / fond |
| `bebesclem_illustration_ballons.jpg` | Décoration hero ou section tarifs |
| `bebesclem_illustration_lapin.jpg` | Décoration hero ou fond |
| `bebesclem_illustration_livre_enfants.jpg` | Section éveil / bibliothèque |

### Documents & affichage
| Fichier | Usage |
|---|---|
| `bebesclem_logo_carte_pro.webp` | Logo nav + footer |
| `bebesclem_document_affiche_verte.jpg` | Optionnel (section à propos, preuve agrément) |
| `bebesclem_affiche_photos_enfants.jpg` | Portfolio ou section services |

> Les fichiers `bebesclem_document_manuscrit_01/02.jpg` et `bebesclem_document_texte_01-04.jpg` sont des documents internes — ne pas afficher publiquement sans validation de Jessica.

---

## 7. Demandes et arbitrages clients (issues actives)

| # | Demande | Statut | Action dans le code |
|---|---|---|---|
| 1 | Retirer "Les bébés Clém" du titre / branding | ✅ À faire | Remplacer par "Jessica Giordano — Assistante Maternelle" partout |
| 2 | Supprimer le lien Facebook | ✅ À faire | Retirer de nav, contact, footer |
| 3 | Rendre les photos modifiables | 🔄 En cours | Centraliser toutes les images dans un objet `IMAGES` en haut de `App.tsx` pour faciliter le remplacement ; panneau admin = chantier futur |
| 4 | Adresse mail pro | 🔄 Future | Placeholder `contact@jessica-giordano-am.fr` (nom de domaine à décider) |
| 5 | Hébergement propre + nom de domaine | 🔄 Future | Site fonctionne en préprod Vercel ; migration vers hébergement payant à prévoir |
| 6 | Section Tarifs | ⭐ À créer | Voir §5.7 — laisser `TARIF_HORAIRE_A_RENSEIGNER` comme placeholder visible |
| 7 | Mise en avant "accueil à domicile" | ⭐ À faire | Mentionner explicitement "à domicile" dans hero, services, meta description |
| 8 | Réel référencement local | 🔄 Future | Dépend du nom de domaine et hébergement définitif |

---

## 8. Composants internes (dans App.tsx)

- **`<Section>`** : wrapper avec padding responsive et max-width centré
- **`<Card>`** : carte hover animé (y: -5), fond `--color-celestial-white`, bordure `--color-mist`
- **`<PhotoGrid>`** *(à créer)* : grille responsive 2×2 ou 3×2 pour portfolio
- **`<AvisCard>`** *(à créer)* : card témoignage avec image de dessin + légende

---

## 9. Navigation (ancres)

```
#accueil · #a-propos · #services · #tarifs · #portfolio · #avis · #contact
```

---

## 10. Points d'attention

- **Tout est dans `App.tsx`** — pas de routing, pas de state global
- Les **données constantes** (tél, adresse, horaires, nb de places) sont regroupées en haut du composant dans un objet `SITE_DATA` pour modification facile
- Site **responsive** : mobile-first, breakpoints `md` et `lg`
- La **carte Google Maps** est une iframe (coordonnées : Saint-Clément 19700)
- ~~Facebook~~ supprimé de tous les points de contact
- Le mot "**domicile**" doit apparaître dès le hero et dans les balises meta
- La **section avis avec dessins d'enfants** est un atout différenciant fort — la soigner visuellement

---

## 11. Roadmap ultérieure (hors scope immédiat)

1. Panneau d'administration léger pour que Jessica gère ses photos elle-même
2. Nom de domaine propre + hébergement payant (quelques €/mois)
3. Adresse mail professionnelle incluse
4. Formulaire de contact fonctionnel (Brevo ou Formspree)
5. Optimisation SEO locale (balises meta, schema.org `ChildCare`)