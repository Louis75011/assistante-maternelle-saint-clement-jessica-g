import { ReactNode, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Phone, MapPin, Clock, Baby, Heart, ShieldCheck, Sun, Home,
  Facebook, CheckCircle2, GraduationCap, HandMetal, Users,
  BookOpen, Trees, Euro, Star, ChevronRight, Mail,
} from "lucide-react";

// ─── Données centralisées ──────────────────────────────────────────────────
const SITE_DATA = {
  nom: "Jessica Giordano",
  titre: "Assistante Maternelle",
  slogan: "Grandir ensemble, pas à pas",
  telephone: "06.61.99.74.95",
  telephoneRaw: "0661997495",
  email: "jeully19@gmail.com",
  adresse: "4 Rue du Pré l'Étang — Lotissement la Roussille",
  ville: "19700 Saint-Clément",
  departement: "Corrèze — Limousin",
  agrement: "Depuis juin 2011",
  placesDisponibles: 2,
  tarifHoraire: "TARIF_HORAIRE_A_RENSEIGNER",
  tarifComplet: "TARIF_COMPLET_A_RENSEIGNER",
  tarifPartiel: "TARIF_PARTIEL_A_RENSEIGNER",
  tarifPeri: "TARIF_PERISCOLAIRE_A_RENSEIGNER",
  facebook: "https://www.facebook.com/search/top?q=les%20b%C3%A9b%C3%A9s%20clem",
};

// ─── Mapping des images — modifier les chemins ici uniquement ──────────────
const IMAGES = {
  heroSlides: [
    { src: "/images/bebesclem_domicile_jardin_02.webp", alt: "Le jardin de Jessica à Saint-Clément" },
    { src: "/images/bebesclem_domicile_roussille.jpg", alt: "Maison de Jessica Giordano" },
    { src: "/images/bebesclem_domicile_entree.webp", alt: "Entrée de la maison" },
    { src: "/images/bebesclem_domicile_jeux_exterieurs.webp", alt: "Espace jeux extérieur" },
  ],
  logo: "/images/bebesclem_illustration_lapin.jpg",
  apropos: [
    { src: "/images/bebesclem_domicile_jardin_01.webp", alt: "Jardin de Jessica" },
    { src: "/images/bebesclem_domicile_bibliotheque.jpg", alt: "Bibliothèque" },
    { src: "/images/bebesclem_domicile_jeux_exterieurs.webp", alt: "Jeux extérieurs" },
    { src: "/images/bebesclem_domicile_jeux_maquette.jpg", alt: "Espace de jeux" },
  ],
  portfolio: [
    { src: "/images/bebesclem_domicile_entree.webp", label: "L'entrée" },
    { src: "/images/bebesclem_domicile_jardin_01.webp", label: "Le jardin" },
    { src: "/images/bebesclem_domicile_jardin_02.webp", label: "Espace extérieur" },
    { src: "/images/bebesclem_domicile_jeux_exterieurs.webp", label: "Jeux extérieurs" },
    { src: "/images/bebesclem_domicile_jeux_maquette.jpg", label: "Espace de jeux" },
    { src: "/images/bebesclem_domicile_bibliotheque.jpg", label: "Bibliothèque" },
    { src: "/images/bebesclem_domicile_rangement.webp", label: "Espace rangement" },
  ],
  avis: [
    { src: "/images/bebesclem_avis_jetadore_01.webp", legende: "Un mot d'un enfant accueilli" },
    { src: "/images/bebesclem_avis_merci_jessica_02.jpg", legende: "Un dessin pour Jessica" },
    { src: "/images/bebesclem_avis_merci_occupee_02.jpg", legende: "Un souvenir chaleureux" },
    { src: "/images/bebesclem_avis_jetadore_02.jpg", legende: "Un mot d'un enfant accueilli" },
  ],
  // Documents textes (lettres/photos de familles)
  documentsTextes: [
    { src: "/images/textes/bebesclem_document_texte_01.jpg", legende: "Carte de Mélody — 4 années inoubliables" },
    { src: "/images/textes/bebesclem_document_texte_02.jpg", legende: "Avis famille de Gabrielle" },
    { src: "/images/textes/bebesclem_document_texte_04.jpg", legende: "Lettre de Nathalie, Matthias et Enola" },
    { src: "/images/textes/bebesclem_document_texte_03.jpg", legende: "Lettre famille de Florian" },
    { src: "/images/textes/bebesclem_document_manuscrit_01.jpg", legende: "Lettre manuscrite — famille de Romain" },
    { src: "/images/textes/bebesclem_document_manuscrit_02.jpg", legende: "Avis famille de Gabrielle" },
  ],
};

// ─── Composants utilitaires ────────────────────────────────────────────────
const Section = ({ children, className = "", id = "" }: { children: ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-16 px-6 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const Card = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`bg-[#E4EEF4] rounded-3xl p-8 shadow-sm border border-[#B8CED9]/50 ${className}`}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ titre, sous }: { titre: string; sous?: string }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-[#2C3D56] mb-4">{titre}</h2>
    {sous && <p className="text-[#4A6885] max-w-2xl mx-auto">{sous}</p>}
  </div>
);

// ─── Composant Hero Slideshow ─────────────────────────────────────────────
function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={IMAGES.heroSlides[current].src}
          alt={IMAGES.heroSlides[current].alt}
          className="w-full h-full object-cover absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>
      {/* Indicateurs */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {IMAGES.heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#EDE7DC] text-[#2C3D56] font-sans selection:bg-[#D4A854]/20">

      {/* ══════════════════════════════════════
          Navigation
      ══════════════════════════════════════ */}
      <nav className="fixed top-0 w-full bg-[#E4EEF4]/90 backdrop-blur-md z-50 border-b border-[#B8CED9]/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={IMAGES.logo}
              alt="Jessica Giordano — Assistante Maternelle"
              className="h-12 w-auto rounded-lg object-cover"
            />
            <div className="hidden sm:block">
              <p className="font-bold text-base leading-tight text-[#2C3D56]">Jessica Giordano</p>
              <p className="text-xs text-[#7A9EB8]">Assistante Maternelle · Saint-Clément</p>
            </div>
          </div>
          {/* Liens */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#4A6885]">
            <a href="#accueil" className="hover:text-[#D4A854] transition-colors">Accueil</a>
            <a href="#a-propos" className="hover:text-[#D4A854] transition-colors">À propos</a>
            <a href="#services" className="hover:text-[#D4A854] transition-colors">Services</a>
            <a href="#tarifs" className="hover:text-[#D4A854] transition-colors">Tarifs</a>
            <a href="#portfolio" className="hover:text-[#D4A854] transition-colors">Portfolio</a>
            <a href="#avis" className="hover:text-[#D4A854] transition-colors">Avis</a>
            <a href="#contact" className="hover:text-[#D4A854] transition-colors">Contact</a>
          </div>
          {/* CTA téléphone */}
          <a
            href={`tel:${SITE_DATA.telephoneRaw}`}
            className="bg-[#D4A854] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#b8943e] transition-all shadow-md shadow-[#D4A854]/30 flex items-center gap-2"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">{SITE_DATA.telephone}</span>
          </a>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          Hero
      ══════════════════════════════════════ */}
      <Section id="accueil" className="pt-32 pb-20 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge agrément */}
            <div className="inline-flex items-center gap-2 bg-[#D4A854]/15 text-[#D4A854] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <ShieldCheck size={14} />
              Agréée depuis 2011 · Corrèze
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#2C3D56] leading-[1.1] mb-4">
              Assistante<br />
              <span className="text-[#D4A854]">Maternelle</span>
            </h1>
            <p className="text-2xl font-semibold text-[#4A6885] mb-1">à Saint-Clément (19700)</p>
            <p className="text-[#7A9EB8] text-sm uppercase tracking-widest mb-5">
              Corrèze — Limousin · Accueil à domicile
            </p>
            <p className="text-xl italic text-[#4A6885] font-medium mb-6">
              "{SITE_DATA.slogan}"
            </p>
            <p className="text-lg text-[#4A6885] mb-8 leading-relaxed max-w-xl">
              J'accompagne les enfants vers l'autonomie et la vie en collectivité à travers des
              activités adaptées, dans un cadre calme et sécurisé — espaces jeux et dortoir dédiés,
              du lundi au vendredi.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-[#2C3D56] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#4A6885] transition-all flex items-center gap-2"
              >
                Prendre contact <ChevronRight size={18} />
              </a>
              <a
                href="#services"
                className="bg-[#E4EEF4] text-[#2C3D56] px-8 py-4 rounded-2xl font-bold hover:bg-[#B8CED9] transition-all border border-[#B8CED9]"
              >
                Voir mes services
              </a>
            </div>
            {/* Pastille places dispo */}
            <div className="mt-5 inline-flex items-center gap-3 px-5 py-3 bg-[#E4EEF4] rounded-2xl border border-[#B8CED9]/50 shadow-sm">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-[#4A6885]">
                {SITE_DATA.placesDisponibles} places disponibles actuellement
              </span>
            </div>
          </motion.div>

          {/* Image hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <HeroSlideshow />
            {/* Badge flottant */}
            <div className="absolute top-8 -left-4 z-20 bg-white rounded-2xl shadow-lg px-4 py-3 border border-[#B8CED9]/50">
              <p className="text-xs text-[#7A9EB8] font-medium">Agrément PMI</p>
              <p className="text-sm font-bold text-[#2C3D56]">Corrèze · Depuis 2011</p>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#D4A854] rounded-full blur-3xl opacity-30 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#7A9EB8] rounded-full blur-3xl opacity-30 -z-10" />
          </motion.div>
        </div>
      </Section>

      {/* ══════════════════════════════════════
          Stats / Chiffres clés
      ══════════════════════════════════════ */}
      <Section className="py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { icon: ShieldCheck, label: "Agréée depuis", value: "2011" },
            { icon: HandMetal, label: "Spécialité", value: "Signes (LSF)" },
            { icon: MapPin, label: "Localisation", value: "Saint-Clément" },
            { icon: Clock, label: "Accueil", value: "Lun — Ven" },
          ].map((stat, i) => (
            <Card key={i} className="text-center flex flex-col items-center justify-center py-10">
              <stat.icon className="text-[#D4A854] mb-4" size={32} />
              <span className="text-xs font-bold uppercase tracking-widest text-[#7A9EB8] mb-1">{stat.label}</span>
              <span className="text-xl font-bold text-[#2C3D56]">{stat.value}</span>
            </Card>
          ))}
        </div>
      </Section>

      {/* ══════════════════════════════════════
          À propos
      ══════════════════════════════════════ */}
      <Section id="a-propos" className="bg-[#E4EEF4]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Grille photos */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <img src={IMAGES.apropos[0].src} alt={IMAGES.apropos[0].alt} className="rounded-3xl shadow-lg object-cover h-52 w-full" />
                <img src={IMAGES.apropos[1].src} alt={IMAGES.apropos[1].alt} className="rounded-3xl shadow-lg object-cover h-40 w-full" />
              </div>
              <div className="space-y-4">
                <img src={IMAGES.apropos[2].src} alt={IMAGES.apropos[2].alt} className="rounded-3xl shadow-lg object-cover h-40 w-full" />
                <img src={IMAGES.apropos[3].src} alt={IMAGES.apropos[3].alt} className="rounded-3xl shadow-lg object-cover h-52 w-full" />
              </div>
            </div>
          </div>
          {/* Texte */}
          <div className="order-1 lg:order-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4A854] mb-4">À propos</p>
            <h2 className="text-4xl font-bold text-[#2C3D56] mb-6">Jessica Giordano</h2>
            <p className="text-lg text-[#4A6885] mb-4 leading-relaxed">
              Assistante maternelle agréée depuis juin 2011 à Saint-Clément en Corrèze, j'accueille
              vos enfants à mon domicile en temps complet, temps partiel ou périscolaire —
              mercredis et vacances compris.
            </p>
            <p className="text-[#4A6885] mb-8 leading-relaxed">
              Mon approche repose sur le respect du rythme de chaque enfant, le jeu libre,
              l'accompagnement des émotions et une communication régulière avec les parents.
              Je me forme régulièrement sur mon temps personnel pour enrichir mon accompagnement.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Langue des Signes Française (LSF) avec les enfants",
                "Favoriser le jeu libre et l'autonomie",
                "Communication régulière avec les parents",
                "Respect du rythme de chaque enfant",
                "Soutien à la parentalité au quotidien",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#D4A854] shrink-0" size={20} />
                  <span className="font-medium text-[#4A6885]">{item}</span>
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 bg-[#2C3D56] text-white px-5 py-3 rounded-2xl text-sm font-semibold">
              <ShieldCheck size={18} />
              Agrément PMI — Corrèze
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════
          Expertise & Formations
      ══════════════════════════════════════ */}
      <Section className="bg-[#B8CED9]/20">
        <SectionTitle
          titre="Expertise & Formations"
          sous="Je me forme régulièrement sur mon temps personnel pour proposer un accueil attentif et adapté à chaque enfant."
        />
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <HandMetal className="text-[#D4A854] mb-6" size={40} />
            <h3 className="text-xl font-bold mb-1 text-[#2C3D56]">Communication Signée</h3>
            <p className="text-[#7A9EB8] text-xs font-bold uppercase tracking-widest mb-4">LSF · Langue des Signes</p>
            <p className="text-[#4A6885] text-sm leading-relaxed">
              Parler avec un mot et un signe (LSF) pour faciliter la communication avant
              l'acquisition de la parole. Bénéfique pour tous, essentiel pour certains.
            </p>
          </Card>
          <Card>
            <Users className="text-[#4A6885] mb-6" size={40} />
            <h3 className="text-xl font-bold mb-1 text-[#2C3D56]">Besoins Spécifiques</h3>
            <p className="text-[#7A9EB8] text-xs font-bold uppercase tracking-widest mb-4">TSA · Troubles du langage</p>
            <p className="text-[#4A6885] text-sm leading-relaxed">
              Accompagnement des troubles du spectre de l'autisme (TSA) et des troubles du langage.
              Un accueil inclusif, adapté et bienveillant pour chaque profil.
            </p>
          </Card>
          <Card>
            <GraduationCap className="text-[#7A9EB8] mb-6" size={40} />
            <h3 className="text-xl font-bold mb-1 text-[#2C3D56]">Éveil & Développement</h3>
            <p className="text-[#7A9EB8] text-xs font-bold uppercase tracking-widest mb-4">Motricité · Émotions · Repas</p>
            <p className="text-[#4A6885] text-sm leading-relaxed">
              Activités adaptées selon l'âge, jeu libre et aménagement des espaces, compréhension
              des émotions pour mieux accompagner l'enfant au quotidien.
            </p>
          </Card>
        </div>
      </Section>

      {/* ══════════════════════════════════════
          Services
      ══════════════════════════════════════ */}
      <Section id="services">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Liste services */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4A854] mb-4">Mes services</p>
            <h2 className="text-4xl font-bold text-[#2C3D56] mb-8">
              Un accueil à domicile<br />bienveillant et sécurisé
            </h2>
            <div className="space-y-6">
              {[
                { icon: Home, titre: "Accueil à domicile", texte: "À temps complet, temps partiel ou périscolaire. Mercredis et vacances selon disponibilités. Cadre calme et sécurisé." },
                { icon: Sun, titre: "Activités d'éveil & motricité", texte: "Éveil sensoriel, motricité libre, jeux adaptés à l'âge et activités créatives pour grandir en confiance." },
                { icon: BookOpen, titre: "Lecture & activités manuelles", texte: "Bibliothèque dédiée, histoires, créations artistiques et activités sensorielles adaptées au rythme de chaque enfant." },
                { icon: Trees, titre: "Sorties extérieures", texte: "Découverte de la nature, promenades et jeux en plein air dans l'environnement rural calme et éveillant de Saint-Clément." },
                { icon: Heart, titre: "Soutien à la parentalité", texte: "Partage régulier avec les parents, conseils bienveillants et accompagnement dans votre rôle au quotidien." },
              ].map(({ icon: Icon, titre, texte }, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-12 h-12 bg-[#D4A854]/15 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon className="text-[#D4A854]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2C3D56] mb-1">{titre}</h3>
                    <p className="text-[#4A6885] text-sm">{texte}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Encart infos pratiques */}
          <div className="bg-[#2C3D56] rounded-[3rem] p-10 text-white">
            <h3 className="text-2xl font-bold mb-8">Informations Pratiques</h3>
            <ul className="space-y-7">
              <li className="flex items-start gap-4">
                <Clock className="shrink-0 mt-1 text-[#D4A854]" size={24} />
                <div>
                  <p className="font-bold mb-1">Horaires d'accueil</p>
                  <p className="opacity-80 text-sm">
                    Du lundi au vendredi, temps complet, partiel, périscolaire.
                    Mercredis et vacances scolaires inclus.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <ShieldCheck className="shrink-0 mt-1 text-[#D4A854]" size={24} />
                <div>
                  <p className="font-bold mb-1">Aides & Remboursements</p>
                  <p className="opacity-80 text-sm">
                    Emploi direct par les parents. Remboursement CAF via le
                    Complément de libre choix du Mode de Garde (CMG).
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="shrink-0 mt-1 text-[#D4A854]" size={24} />
                <div>
                  <p className="font-bold mb-1">Localisation</p>
                  <p className="opacity-80 text-sm">
                    Saint-Clément (19700), Lotissement la Roussille.
                    Proche des communes alentours de Corrèze.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Baby className="shrink-0 mt-1 text-[#D4A854]" size={24} />
                <div>
                  <p className="font-bold mb-1">Places disponibles</p>
                  <p className="opacity-80 text-sm">
                    {SITE_DATA.placesDisponibles} places disponibles actuellement.
                    Contactez-moi pour échanger sur vos besoins.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════
          Tarifs
      ══════════════════════════════════════ */}
      <Section id="tarifs" className="bg-[#E4EEF4]">
        <SectionTitle
          titre="Un accueil de qualité, à un tarif accessible"
          sous="Le tarif horaire est librement fixé entre les parents et l'assistante maternelle dans le cadre du contrat d'accueil. La CAF rembourse une partie via le CMG."
        />
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <Card className="text-center">
            <Clock className="text-[#D4A854] mx-auto mb-4" size={36} />
            <h3 className="text-xl font-bold text-[#2C3D56] mb-2">Temps complet</h3>
            <p className="text-[#7A9EB8] text-sm mb-5">Accueil sur la journée complète, lundi au vendredi</p>
            <div className="bg-[#2C3D56] text-white rounded-2xl py-3 px-4 font-bold">
              {SITE_DATA.tarifComplet}
            </div>
          </Card>
          <Card className="text-center">
            <Star className="text-[#D4A854] mx-auto mb-4" size={36} />
            <h3 className="text-xl font-bold text-[#2C3D56] mb-2">Temps partiel</h3>
            <p className="text-[#7A9EB8] text-sm mb-5">Accueil sur des demi-journées ou jours fixes</p>
            <div className="bg-[#2C3D56] text-white rounded-2xl py-3 px-4 font-bold">
              {SITE_DATA.tarifPartiel}
            </div>
          </Card>
          <Card className="text-center">
            <Sun className="text-[#D4A854] mx-auto mb-4" size={36} />
            <h3 className="text-xl font-bold text-[#2C3D56] mb-2">Périscolaire</h3>
            <p className="text-[#7A9EB8] text-sm mb-5">Mercredis et vacances scolaires compris</p>
            <div className="bg-[#2C3D56] text-white rounded-2xl py-3 px-4 font-bold">
              {SITE_DATA.tarifPeri}
            </div>
          </Card>
        </div>
        {/* Bloc CAF */}
        <div className="bg-[#2C3D56]/10 rounded-3xl p-8 border border-[#B8CED9]/60 flex flex-col md:flex-row items-center gap-6">
          <Euro className="text-[#D4A854] shrink-0" size={40} />
          <div className="flex-1">
            <p className="font-bold text-[#2C3D56] mb-1">Remboursement CAF — CMG</p>
            <p className="text-[#4A6885] text-sm">
              Les parents employeurs peuvent bénéficier du Complément de libre choix du Mode de
              Garde versé par la CAF, qui rembourse une partie significative du salaire.
              Devis personnalisé sur demande.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-[#D4A854] text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-[#b8943e] transition-all whitespace-nowrap"
          >
            Me contacter
          </a>
        </div>
      </Section>

      {/* ══════════════════════════════════════
          Portfolio
      ══════════════════════════════════════ */}
      <Section id="portfolio">
        <SectionTitle
          titre="Un cadre de vie épanouissant"
          sous="Découvrez les espaces dédiés aux enfants : intérieur chaleureux, jardin, jeux extérieurs et bibliothèque."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {IMAGES.portfolio.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className={`rounded-3xl overflow-hidden shadow-sm ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              style={{ minHeight: i === 0 ? "320px" : "160px" }}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover"
                style={{ minHeight: "inherit" }}
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══════════════════════════════════════
          Avis / Témoignages
      ══════════════════════════════════════ */}
      <Section id="avis" className="bg-[#E4EEF4]">
        <SectionTitle
          titre="Ils me font confiance"
          sous="Des mots et des dessins d'enfants accueillis — la plus belle des preuves."
        />
        {/* Dessins et mots d'enfants */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {IMAGES.avis.map((avis, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#B8CED9]/50"
            >
              <img
                src={avis.src}
                alt={avis.legende}
                className="w-full aspect-square object-cover"
              />
              <p className="text-xs text-[#7A9EB8] text-center py-3 px-3 italic">{avis.legende}</p>
            </motion.div>
          ))}
        </div>

        {/* Témoignages texte */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {[
            {
              auteur: "Nathalie, Matthias & Enola",
              texte: "Les mots sont parfois plus faciles que les paroles, même s'ils ne sont pas assez forts pour décrire notre gratitude. Enola est arrivée chez vous toute petite, bébé — vous l'avez aidée à grandir, à s'épanouir, à devenir cette petite fille que nous aimons tant. Chez vous, nous la savions en sécurité, heureuse, épanouie. Nous avions toute confiance en vous. Merci de vous être si bien occupée de notre fille durant ces dernières années.",
              note: "★★★★★",
            },
            {
              auteur: "Mélody",
              texte: "Merci pour ces (presque !) 4 années, elles ont été superbes ! Grâce à toi je me suis fait mes premiers copains : Arthur, Ewen, Manon, Enola, Hugo, Joseph... Merci d'avoir su m'aider à grandir et d'avoir su me cajoler quand il le fallait. Merci d'avoir été tout simplement toi, une nounou géniale ! Tu es et resteras toujours dans mon cœur.",
              note: "★★★★★",
            },
            {
              auteur: "Famille de Gabrielle",
              texte: "Jessica a été la nounou de Gabrielle durant ces deux dernières années. J'ai beaucoup apprécié son approche centrée sur les besoins de l'enfant, l'autonomie, le bien grandir. Elle propose une grande variété de jeux, d'activités manuelles. La complicité qu'elles ont développée est belle à voir. Je vous la recommande les yeux fermés !!",
              note: "★★★★★",
            },
            {
              auteur: "Nathalie, famille de Romain",
              texte: "Je garderai en mémoire vos échanges de sourires, vos regards complices, votre façon de rire en me racontant des anecdotes. J'ai aimé le voir dans vos bras car il y a toujours été bien. C'est une véritable chance qu'il a eu d'être à vos côtés pour ses débuts dans la vie. Les mots me manquent pour vous dire à quel point je vous suis reconnaissante. Un immense MERCI !",
              note: "★★★★★",
            },
          ].map(({ auteur, texte, note }, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              className="bg-white rounded-3xl p-8 border border-[#B8CED9]/50 shadow-sm flex flex-col gap-4"
            >
              <p className="text-[#D4A854] text-lg tracking-widest">{note}</p>
              <p className="text-[#4A6885] text-sm leading-relaxed italic">"{texte}"</p>
              <p className="text-[#2C3D56] font-bold text-sm mt-auto">— {auteur}</p>
            </motion.div>
          ))}
        </div>

        {/* Galerie documents / lettres */}
        <div className="border-t border-[#B8CED9]/60 pt-12">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#7A9EB8] mb-8">
            Lettres et courriers des familles
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {IMAGES.documentsTextes.map((doc, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-sm border border-[#B8CED9]/40 bg-white"
              >
                <img
                  src={doc.src}
                  alt={doc.legende}
                  className="w-full aspect-[3/4] object-cover"
                />
                <p className="text-xs text-[#7A9EB8] text-center py-3 px-3 italic">{doc.legende}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════
          Contact
      ══════════════════════════════════════ */}
      <Section id="contact" className="bg-[#2C3D56] text-white rounded-t-[4rem]">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Coordonnées */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4A854] mb-4">Contact</p>
            <h2 className="text-4xl font-bold mb-6">
              N'hésitez pas<br />à me contacter
            </h2>
            <p className="text-[#B8CED9] mb-10 text-lg">
              Vous cherchez un accueil bienveillant pour votre enfant à Saint-Clément ?
              Échangeons sur vos besoins et mon approche.
            </p>
            <div className="space-y-6">
              {/* Téléphone */}
              <a href={`tel:${SITE_DATA.telephoneRaw}`} className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#D4A854] transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[#7A9EB8] text-xs">Téléphone direct</p>
                  <p className="text-xl font-bold">{SITE_DATA.telephone}</p>
                </div>
              </a>
              {/* Adresse */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[#7A9EB8] text-xs">Adresse</p>
                  <p className="font-medium">{SITE_DATA.adresse}</p>
                  <p className="font-medium">{SITE_DATA.ville}</p>
                </div>
              </div>
              {/* Email */}
              <a href={`mailto:${SITE_DATA.email}`} className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#D4A854] transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[#7A9EB8] text-xs">E-mail</p>
                  <p className="font-medium">{SITE_DATA.email}</p>
                </div>
              </a>
              {/* Facebook */}
              <a href={SITE_DATA.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Facebook size={24} />
                </div>
                <div>
                  <p className="text-[#7A9EB8] text-xs">Suivez-moi</p>
                  <p className="font-medium">Les bébés Clém — Jessica Giordano</p>
                </div>
              </a>
            </div>
          </div>

          {/* Carte + formulaire */}
          <div className="flex flex-col gap-6">
            {/* Carte Google Maps */}
            <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10">
              <h3 className="text-lg font-bold mb-4">Localisation</h3>
              <div className="aspect-video rounded-2xl overflow-hidden relative bg-[#4A6885]/30">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[#7A9EB8] p-6 text-center z-10">
                  <MapPin size={40} className="mb-3 opacity-30" />
                  <p className="text-sm">
                    4 Rue du Pré l'Étang<br />
                    Lotissement la Roussille<br />
                    19700 Saint-Clément, Corrèze
                  </p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.123456789!2d1.7345!3d45.3456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f8976543210:0x123456789abcdef!2s4%20Rue%20du%20Pr%C3%A9%20l'Etang%2C%2019700%20Saint-Cl%C3%A9ment!5e0!3m2!1sfr!2sfr!4v1234567890"
                  className="w-full h-full border-0 grayscale opacity-40 absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Jessica Giordano — Saint-Clément"
                />
              </div>
            </div>
            {/* Formulaire mailto */}
            <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10">
              <h3 className="text-lg font-bold mb-5">Envoyez-moi un message</h3>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const nom = (form.elements.namedItem("nom") as HTMLInputElement).value;
                  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                  window.location.href = `mailto:${SITE_DATA.email}?subject=Contact depuis le site — ${encodeURIComponent(nom)}&body=${encodeURIComponent(message)}%0A%0AEmail de réponse : ${encodeURIComponent(email)}`;
                }}
              >
                <input
                  name="nom"
                  type="text"
                  placeholder="Votre nom"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-[#7A9EB8] focus:outline-none focus:border-[#D4A854] text-sm"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Votre e-mail"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-[#7A9EB8] focus:outline-none focus:border-[#D4A854] text-sm"
                />
                <textarea
                  name="message"
                  placeholder="Votre message…"
                  rows={4}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-[#7A9EB8] focus:outline-none focus:border-[#D4A854] text-sm resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#D4A854] text-white py-3 rounded-xl font-bold hover:bg-[#b8943e] transition-all"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-[#7A9EB8] text-center md:text-left">
            © {new Date().getFullYear()} Jessica Giordano — Assistante Maternelle Agréée en Corrèze (19)
          </p>
          <p className="text-[#7A9EB8]">
            Site réalisé par{" "}
            <span className="text-[#D4A854] font-semibold">Arx Systema</span>
          </p>
        </div>
      </Section>
    </div>
  );
}
