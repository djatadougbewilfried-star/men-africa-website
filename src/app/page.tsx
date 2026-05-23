"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, Phone, MessageCircle, Shield, Award, Users, TrendingUp, ChevronDown } from "lucide-react";

// Compteur animé
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const poles = [
  {
    icon: "💼",
    title: "Finance & Investissement",
    description: "Courtage bancaire, assurance, levée de fonds et structuration de projets d'envergure.",
    features: ["Courtage bancaire", "Assurance", "Levée de fonds"],
    href: "/finance",
    color: "from-[#1B2B5A] to-[#243870]",
  },
  {
    icon: "🏗️",
    title: "Industrie & Béton",
    description: "Production de béton manufacturé, travaux BTP et fournitures techniques pour vos chantiers.",
    features: ["Béton manufacturé", "Travaux BTP", "Fournitures"],
    href: "/industrie",
    color: "from-[#B8923B] to-[#9A7B32]",
  },
  {
    icon: "🌍",
    title: "Commerce & Supply",
    description: "Commerce général, import-export et distribution de matériaux à travers l'Afrique de l'Ouest.",
    features: ["Import-Export", "Commerce général", "Distribution"],
    href: "/commerce",
    color: "from-[#1B2B5A] to-[#243870]",
  },
];

const valeurs = [
  { icon: Shield, title: "Intégrité", desc: "Transparence et honnêteté dans chaque relation" },
  { icon: Award, title: "Excellence", desc: "Qualité irréprochable sur chaque prestation" },
  { icon: Users, title: "Partenariat", desc: "Relations durables fondées sur la confiance" },
  { icon: TrendingUp, title: "Innovation", desc: "Solutions modernes adaptées au marché africain" },
];

const produits = [
  { name: "Bordures", image: "/catalogue/bordure-t1.jpg" },
  { name: "Caniveaux", image: "/catalogue/caniveau-rectangulaire.jpg" },
  { name: "Pavés", image: "/catalogue/pave-i.jpg" },
  { name: "Dalots", image: "/catalogue/dalot-ouvert.jpg" },
];

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* ═══════════════════════════════════════
          HERO — Cinématique & Immersif
      ═══════════════════════════════════════ */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="/hero-accueil.jpg"
            alt="Chantier BTP Men Africa Company"
            fill
            className="object-cover scale-105"
            priority
            quality={75}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAARACADASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGBwT/xAAoEAABAwMDAwMFAAAAAAAAAAABAgMEBQYRAAchEiIxE0FRFGFxgZH/xAAXAQADAQAAAAAAAAAAAAAAAAACAwQF/8QAHREAAgICAwEAAAAAAAAAAAAAAQIAEQMhBBJBcf/aAAwDAQACEQMRAD8A0G4LtpFvQ0yKjJCUqOEoSMrWfgD4+54GsijXhd9XfDgmupgMvPltlqAwyHASQMA5Ur30VZelXbXKk4oIDiWXCEpcksJbQSPHSUjOO3wDnTKxdqK3R5TV11WomFVZICY9OB7Y6AOjqCfKlHuPvk4GNKCMFuxgn3O5e2gJvWbXpqJdoVBaahKShbaWQoJKsDyPPONNJAK46F+VaaN9UY5MWsYgOJP/2Q=="
          />
          {/* Gradient multicouche pour effet cinématique */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1829]/85 via-[#1B2B5A]/60 to-[#0d1829]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1829]/40 via-transparent to-[#0d1829]/40" />
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Badge premium */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#B8923B]/20 border border-[#B8923B]/40 px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-[#B8923B] rounded-full animate-pulse" />
            <span className="text-[#B8923B] text-sm font-medium tracking-widest uppercase">
              Groupe Multisectoriel — Côte d&apos;Ivoire
            </span>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            MEN AFRICA
            <br />
            <span className="text-[#B8923B]">COMPANY</span>
          </motion.h1>

          {/* Ligne dorée */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-32 h-1 bg-gradient-to-r from-transparent via-[#B8923B] to-transparent mx-auto mb-8"
          />

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-[#D4A84B] font-semibold mb-4 tracking-widest"
          >
            BTP • BÉTON MANUFACTURÉ • IMPORT-EXPORT
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg text-white/75 max-w-2xl mx-auto mb-12"
          >
            Votre partenaire stratégique pour bâtir l&apos;Afrique de demain.
            Finance, Industrie et Commerce au service de votre réussite.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/industrie"
              className="group px-8 py-4 bg-[#B8923B] text-white font-semibold hover:bg-[#9A7B32] transition-all duration-300 shadow-lg hover:shadow-[#B8923B]/30 hover:shadow-xl flex items-center justify-center gap-2"
            >
              Découvrir nos produits
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white/60 text-white font-semibold hover:bg-white hover:text-[#1B2B5A] transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Nous contacter
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">Découvrir</span>
          <ChevronDown size={20} className="text-white/50 animate-bounce" />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          CHIFFRES CLÉS — Compteurs animés
      ═══════════════════════════════════════ */}
      <section className="bg-[#1B2B5A] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { target: 10, suffix: "+", label: "Années d'expérience" },
              { target: 500, suffix: "+", label: "Projets réalisés" },
              { target: 50, suffix: "+", label: "Produits catalogue" },
              { target: 100, suffix: "%", label: "Satisfaction client" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[#B8923B] mb-2">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          QUI SOMMES-NOUS
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#B8923B] font-semibold tracking-widest uppercase text-sm mb-4">
                À propos de nous
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1B2B5A] mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Bâtisseurs de la<br />
                <span className="text-[#B8923B]">nouvelle Afrique</span>
              </h2>
              <div className="w-16 h-1 bg-[#B8923B] mb-8" />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                <strong className="text-[#1B2B5A]">MEN AFRICA COMPANY</strong> est un groupe
                multisectoriel ivoirien (SARL U) au capital de <strong>5 000 000 FCFA</strong>.
                Nous opérons dans trois domaines stratégiques complémentaires.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Notre expertise couvre la production de béton manufacturé, les travaux BTP,
                le courtage bancaire & assurance, ainsi que l&apos;import-export à travers
                l&apos;Afrique de l&apos;Ouest.
              </p>

              {/* Quote */}
              <div className="bg-[#F8F9FA] border-l-4 border-[#B8923B] p-6 mb-8">
                <p className="text-[#1B2B5A] font-semibold italic text-lg">
                  &ldquo;Faite briller votre lumière&rdquo;
                </p>
                <p className="text-gray-500 text-sm mt-1">— Notre devise</p>
              </div>

              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 text-[#B8923B] font-semibold hover:gap-4 transition-all"
              >
                En savoir plus <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Infos clés */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4"
            >
              {[
                { label: "Forme juridique", value: "SARL U", icon: "🏢" },
                { label: "Capital social", value: "5 000 000 FCFA", icon: "💰" },
                { label: "RCCM", value: "CI-ABJ-03-2024-B13-02779", icon: "📋" },
                { label: "Siège social", value: "Cocody, Riviera Palmeraie", icon: "📍" },
                { label: "Pôles d'activité", value: "Finance • Industrie • Commerce", icon: "⚡" },
                { label: "Zone de couverture", value: "Afrique de l'Ouest", icon: "🌍" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-[#1B2B5A]/5 transition-colors border border-gray-100"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</p>
                    <p className="font-semibold text-[#1B2B5A]">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          NOS 3 PÔLES D'ACTIVITÉ
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#B8923B] font-semibold tracking-widest uppercase text-sm mb-4">
              Nos domaines d&apos;expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B2B5A] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Trois Pôles, Une Vision
            </h2>
            <div className="w-24 h-1 bg-[#B8923B] mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {poles.map((pole, i) => (
              <motion.div
                key={pole.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Link href={pole.href} className="group block h-full">
                  <div className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col">
                    {/* Header coloré */}
                    <div className={`bg-gradient-to-br ${pole.color} p-8 text-white`}>
                      <span className="text-5xl block mb-4">{pole.icon}</span>
                      <h3 className="text-xl font-bold mb-2"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                        {pole.title}
                      </h3>
                    </div>
                    {/* Corps */}
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-gray-600 mb-6 leading-relaxed flex-1">{pole.description}</p>
                      <ul className="space-y-2 mb-6">
                        {pole.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-[#B8923B] rounded-full flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-[#B8923B] font-semibold text-sm group-hover:gap-4 transition-all">
                        Explorer <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CATALOGUE PHARE
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#B8923B] font-semibold tracking-widest uppercase text-sm mb-4">
              Béton manufacturé
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B2B5A] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Notre Catalogue Produits
            </h2>
            <div className="w-24 h-1 bg-[#B8923B] mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des produits en béton manufacturé de haute qualité, fabriqués selon les normes
              les plus strictes pour vos projets de construction.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {produits.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href="/industrie"
                  className="group block overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-square relative bg-white">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      quality={75}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4 bg-[#1B2B5A] group-hover:bg-[#B8923B] transition-colors text-center">
                    <h3 className="font-semibold text-white text-sm">{item.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/industrie"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#1B2B5A] text-white font-semibold hover:bg-[#B8923B] transition-all duration-300 shadow-lg group"
            >
              Voir tout le catalogue
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          NOS VALEURS
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-[#1B2B5A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#B8923B] font-semibold tracking-widest uppercase text-sm mb-4">
              Ce qui nous distingue
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Pourquoi Nous Choisir
            </h2>
            <div className="w-24 h-1 bg-[#B8923B] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valeurs.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#B8923B]/20 group-hover:border-[#B8923B] transition-all duration-300">
                  <v.icon size={36} className="text-[#B8923B]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  {v.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA FINAL — Premium
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#1B2B5A] to-[#0d1829] p-12 md:p-16 text-center relative overflow-hidden">
            {/* Décoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8923B]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#B8923B]/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <p className="text-[#B8923B] font-semibold tracking-widest uppercase text-sm mb-4">
                Passons à l&apos;action
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Prêt à démarrer<br />votre projet ?
              </h2>
              <div className="w-24 h-1 bg-[#B8923B] mx-auto mb-8" />
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
                Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins et obtenir
                un devis personnalisé. Notre équipe vous répond rapidement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-[#B8923B] text-white font-semibold hover:bg-[#9A7B32] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  Demander un devis gratuit
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/2250702020145"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#25D366] text-white font-semibold hover:bg-[#20b858] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  WhatsApp direct
                </a>
                <a
                  href="tel:+2250702020145"
                  className="px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  07 02 02 01 45
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
