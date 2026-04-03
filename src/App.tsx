/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Baby, 
  Heart, 
  ShieldCheck, 
  Sun, 
  Home, 
  Facebook, 
  CheckCircle2, 
  GraduationCap, 
  HandMetal,
  Users
} from "lucide-react";

const Section = ({ children, className = "", id = "" }: { children: ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-16 px-6 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const Card = ({ children, className = "" }: { children: ReactNode, className?: string, key?: string | number }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`bg-white rounded-3xl p-8 shadow-sm border border-orange-50 ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  const phoneNumber = "06.61.99.74.95";
  const address = "4 Rue du Pré l'Etang - Lotissement la Roussille, 19700 SAINT CLEMENT";

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-800 font-sans selection:bg-orange-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-orange-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-400 rounded-xl flex items-center justify-center text-white font-bold text-xl">C</div>
            <span className="font-bold text-xl tracking-tight text-stone-900">Les bébés Clém</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a href="#accueil" className="hover:text-orange-500 transition-colors">Accueil</a>
            <a href="#a-propos" className="hover:text-orange-500 transition-colors">À propos</a>
            <a href="#services" className="hover:text-orange-500 transition-colors">Services</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
          </div>
          <a 
            href={`tel:${phoneNumber}`}
            className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-all shadow-md shadow-orange-200 flex items-center gap-2"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">{phoneNumber}</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <Section id="accueil" className="pt-32 pb-20 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-bold mb-6">
              Assistante Maternelle Agréée à Saint-Clément
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-[1.1] mb-6">
              L'éveil et l'épanouissement de votre enfant au cœur d'un <span className="text-orange-500">accueil professionnel.</span>
            </h1>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-xl">
              J'accueille vos enfants dans un environnement calme, sécurisé et stimulant à Saint-Clément. 
              Un accompagnement personnalisé pour grandir sereinement et à son propre rythme.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-stone-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-stone-800 transition-all"
              >
                Prendre contact
              </a>
              <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-stone-100 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-stone-700">2 places disponibles actuellement</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src="https://picsum.photos/seed/nursery/800/1000" 
                alt="Espace de jeu" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-200 rounded-full blur-3xl opacity-50 -z-10" />
          </motion.div>
        </div>
      </Section>

      {/* Stats/Quick Info */}
      <Section className="py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { icon: ShieldCheck, label: "Agréée depuis", value: "2011" },
            { icon: Baby, label: "Spécialité", value: "Signes (LSF)" },
            { icon: MapPin, label: "Localisation", value: "Saint-Clément" },
            { icon: Clock, label: "Horaires", value: "Lundi - Vendredi" },
          ].map((stat, i) => (
            <Card key={i} className="text-center flex flex-col items-center justify-center py-10">
              <stat.icon className="text-orange-500 mb-4" size={32} />
              <span className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">{stat.label}</span>
              <span className="text-xl font-bold text-stone-900">{stat.value}</span>
            </Card>
          ))}
        </div>
      </Section>

      {/* About Section */}
      <Section id="a-propos" className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <img src="https://picsum.photos/seed/play1/400/500" alt="Jeux" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/play2/400/300" alt="Jeux" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/play3/400/300" alt="Jeux" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/play4/400/500" alt="Jeux" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-stone-900 mb-6">Jessica Giordano</h2>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              Assistante Maternelle agréée depuis juin 2011, j'ai à cœur de créer un environnement où le respect est encouragé afin de permettre à chaque enfant de grandir à son propre rythme.
            </p>
            <p className="text-stone-600 mb-8 leading-relaxed">
              J'améliore régulièrement mes connaissances par des formations complémentaires : troubles du langage, activités adaptées, accompagnement de l'autisme, et gestion des émotions.
            </p>
            
            <div className="space-y-4">
              {[
                "Langue des Signes Française (LSF) avec les enfants",
                "Favoriser le jeu libre et l'autonomie",
                "Communication régulière avec les parents",
                "Respect du rythme de chaque enfant"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  <span className="font-medium text-stone-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Skills & Formations */}
      <Section className="bg-stone-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-900 mb-4">Expertise & Formations</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Un accueil de qualité passe par une formation continue pour mieux comprendre et accompagner vos enfants.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <HandMetal className="text-orange-500 mb-6" size={40} />
            <h3 className="text-xl font-bold mb-4">Communication Signée</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Utilisation de la LSF pour faciliter la communication avant l'acquisition de la parole. Je suis des cours hebdomadaires en association.
            </p>
          </Card>
          <Card>
            <Users className="text-blue-500 mb-6" size={40} />
            <h3 className="text-xl font-bold mb-4">Besoins Spécifiques</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Formation sur les troubles du spectre de l'autisme (TSA) et les troubles du langage pour un accueil inclusif et adapté.
            </p>
          </Card>
          <Card>
            <GraduationCap className="text-purple-500 mb-6" size={40} />
            <h3 className="text-xl font-bold mb-4">Éveil & Motricité</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Favoriser le jeu libre, aménager les espaces et proposer des activités adaptées à chaque stade de développement.
            </p>
          </Card>
        </div>
      </Section>

      {/* Services & Environment */}
      <Section id="services">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-stone-900 mb-8">Un cadre de vie épanouissant</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Home className="text-orange-600" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Espaces dédiés</h3>
                  <p className="text-stone-600">Un espace jeux à l'intérieur, un à l'extérieur et un dortoir entièrement dédiés à l'accueil des enfants.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Sun className="text-blue-600" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Activités variées</h3>
                  <p className="text-stone-600">Éveil, motricité libre, lecture, activités manuelles et sorties en extérieur pour découvrir le monde.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Heart className="text-green-600" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Soutien à la parentalité</h3>
                  <p className="text-stone-600">J'aime partager mes connaissances avec les parents pour les soutenir dans leur rôle quotidien.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-orange-500 rounded-[3rem] p-12 text-white">
            <h3 className="text-2xl font-bold mb-6">Informations Pratiques</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Clock className="shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-bold">Horaires d'accueil</p>
                  <p className="opacity-90">Du lundi au vendredi. Temps complet, partiel ou périscolaire (mercredis et vacances).</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <ShieldCheck className="shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-bold">Aides & Remboursements</p>
                  <p className="opacity-90">Emploi direct par les parents. Remboursement CAF via le Complément de libre choix du Mode de Garde (CMG).</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-bold">Localisation</p>
                  <p className="opacity-90">Saint-Clément (19700), Lotissement la Roussille. Proche des communes alentours.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-stone-900 text-white rounded-t-[4rem]">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">N'hésitez pas à me contacter</h2>
            <p className="text-stone-400 mb-12 text-lg">
              Vous cherchez un accueil bienveillant pour votre enfant ? Échangeons sur vos besoins et mon approche.
            </p>
            
            <div className="space-y-8">
              <a href={`tel:${phoneNumber}`} className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-stone-400 text-sm">Téléphone direct</p>
                  <p className="text-2xl font-bold">{phoneNumber}</p>
                </div>
              </a>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-stone-400 text-sm">Adresse</p>
                  <p className="text-lg font-medium">{address}</p>
                </div>
              </div>

              <a href="https://www.facebook.com/search/top?q=les%20b%C3%A9b%C3%A9s%20clem" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Facebook size={28} />
                </div>
                <div>
                  <p className="text-stone-400 text-sm">Suivez-moi</p>
                  <p className="text-lg font-medium">Jessica Giordano - Les bébés Clém</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
            <h3 className="text-xl font-bold mb-6">Localisation</h3>
            <div className="aspect-video bg-stone-800 rounded-2xl overflow-hidden relative">
              {/* Placeholder for map */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-500 p-6 text-center">
                <MapPin size={48} className="mb-4 opacity-20" />
                <p className="text-sm">4 Rue du Pré l'Etang<br/>Lotissement la Roussille<br/>19700 SAINT CLEMENT</p>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.123456789!2d1.7345!3d45.3456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f8976543210:0x123456789abcdef!2s4%20Rue%20du%20Pr%C3%A9%20l'Etang%2C%2019700%20Saint-Cl%C3%A9ment!5e0!3m2!1sfr!2sfr!4v1234567890" 
                className="w-full h-full border-0 grayscale invert opacity-50"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/10 text-center text-stone-500 text-sm">
          <p>© {new Date().getFullYear()} Les bébés Clém - Jessica Giordano. Tous droits réservés.</p>
          <p className="mt-2">Assistante Maternelle Agréée en Corrèze (19)</p>
        </div>
      </Section>
    </div>
  );
}
