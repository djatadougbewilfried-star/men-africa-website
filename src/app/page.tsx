"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Landmark, Building2, ShoppingBag, ChevronDown } from "lucide-react";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsVisible(true);
  }, 100);
  return () => clearTimeout(timer);
}, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B2B5A]/95 via-[#1B2B5A]/85 to-[#1B2B5A]/70" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#B8923B]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#B8923B]/10 rounded-full blur-3xl" />
        
        {/* Content */}
        <div className="relative z-10 container-premium text-center text-white py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <span className="w-2 h-2 bg-[#B8923B] rounded-full animate-pulse" />
              <span className="text-sm font-medium tracking-wider uppercase">
                Leader Multisectoriel en Afrique
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Votre Partenaire
            <br />
            <span className="text-[#B8923B]">Stratégique</span> de Confiance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Finance & Investissement, Industrie & Béton, Commerce & Approvisionnement.
            <br className="hidden md:block" />
            Trois pôles d&apos;excellence pour accompagner votre croissance en Afrique.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact" className="btn-gold flex items-center gap-2">
              Demander un Devis
              <ArrowRight size={18} />
            </Link>
            <button className="btn-outline-gold flex items-center gap-2 border-white/30 text-white hover:bg-white hover:text-[#1B2B5A]">
              <Play size={18} />
              Découvrir en Vidéo
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-white/50">
              <span className="text-xs uppercase tracking-widest">Défiler</span>
              <ChevronDown size={24} className="animate-bounce" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3 PÔLES D'ACTIVITÉ */}
      <section className="py-20 bg-white">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Nos Pôles d&apos;Excellence</h2>
            <div className="gold-line-center mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une expertise diversifiée au service de vos ambitions. Découvrez nos trois domaines d&apos;intervention.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Finance Card */}
            <div className="group card-premium text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#1B2B5A]/5 flex items-center justify-center group-hover:bg-[#B8923B] transition-colors duration-500">
                <Landmark size={40} className="text-[#1B2B5A] group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-[#1B2B5A] mb-4">
                Finance & Investissement
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Courtage bancaire, assurance, levée de fonds et structuration de projets pour optimiser vos investissements.
              </p>
              <Link href="/finance" className="inline-flex items-center gap-2 text-[#B8923B] font-semibold hover:gap-4 transition-all">
                En savoir plus
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Industrie Card */}
            <div className="group card-premium text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#1B2B5A]/5 flex items-center justify-center group-hover:bg-[#B8923B] transition-colors duration-500">
                <Building2 size={40} className="text-[#1B2B5A] group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-[#1B2B5A] mb-4">
                Industrie & Béton
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Béton manufacturé, solutions BTP spécialisées et fournitures techniques pour vos projets de construction.
              </p>
              <Link href="/industrie" className="inline-flex items-center gap-2 text-[#B8923B] font-semibold hover:gap-4 transition-all">
                En savoir plus
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Commerce Card */}
            <div className="group card-premium text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#1B2B5A]/5 flex items-center justify-center group-hover:bg-[#B8923B] transition-colors duration-500">
                <ShoppingBag size={40} className="text-[#1B2B5A] group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-[#1B2B5A] mb-4">
                Commerce & Supply
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Commerce général, import-export et distribution logistique pour répondre à tous vos besoins.
              </p>
              <Link href="/commerce" className="inline-flex items-center gap-2 text-[#B8923B] font-semibold hover:gap-4 transition-all">
                En savoir plus
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="py-20 bg-[#1B2B5A]">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="font-playfair text-5xl md:text-6xl font-bold text-[#B8923B] mb-2">500+</div>
              <div className="text-white/70">Projets Réalisés</div>
            </div>
            <div>
              <div className="font-playfair text-5xl md:text-6xl font-bold text-[#B8923B] mb-2">15</div>
              <div className="text-white/70">Années d&apos;Expérience</div>
            </div>
            <div>
              <div className="font-playfair text-5xl md:text-6xl font-bold text-[#B8923B] mb-2">50+</div>
              <div className="text-white/70">Partenaires</div>
            </div>
            <div>
              <div className="font-playfair text-5xl md:text-6xl font-bold text-[#B8923B] mb-2">3</div>
              <div className="text-white/70">Pays Couverts</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* TÉMOIGNAGES */}
      <Testimonials />

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-premium text-center">
          <h2 className="heading-2 mb-4">Prêt à Concrétiser Vos Projets ?</h2>
          <div className="gold-line-center mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Notre équipe d&apos;experts est à votre disposition pour étudier vos besoins et vous proposer des solutions sur mesure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Contactez-nous
            </Link>
            <Link href="/espace-client" className="btn-outline">
              Espace Client
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}