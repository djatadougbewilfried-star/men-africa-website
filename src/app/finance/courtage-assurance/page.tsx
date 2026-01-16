"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, CheckCircle, ArrowRight, Building2, Car, Heart, Umbrella } from "lucide-react";

const assurances = [
  {
    icon: Building2,
    title: "Assurance Entreprise",
    description: "Protection complète de vos locaux, équipements et marchandises contre tous les risques.",
    features: ["Multirisque professionnelle", "Perte d'exploitation", "Vol et vandalisme"],
  },
  {
    icon: Shield,
    title: "RC Professionnelle",
    description: "Couvrez votre responsabilité civile en cas de dommages causés à des tiers.",
    features: ["RC exploitation", "RC produits", "RC après livraison"],
  },
  {
    icon: Umbrella,
    title: "Assurance Chantier",
    description: "Sécurisez vos projets de construction du début à la fin des travaux.",
    features: ["Tous risques chantier", "Dommages ouvrage", "RC décennale"],
  },
  {
    icon: Car,
    title: "Flotte Automobile",
    description: "Solutions adaptées pour la gestion de votre parc de véhicules professionnels.",
    features: ["Tous risques", "Responsabilité civile", "Assistance 24/7"],
  },
];

const partners = [
  "NSIA Assurances",
  "Allianz Côte d'Ivoire",
  "AXA Assurances",
  "SUNU Assurances",
  "Saham Assurance",
  "Atlantique Assurances",
];

export default function CourtageAssurancePage() {
  return (
    <div>
      <section className="relative py-24 bg-[#1B2B5A]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#B8923B] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#B8923B] rounded-full blur-3xl" />
        </div>
        <div className="container-premium relative z-10 text-white">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <Shield size={18} className="text-[#B8923B]" />
              <span className="text-sm font-medium">Finance & Investissement</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Courtage <span className="text-[#B8923B]">Assurance</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80"
            >
              Des solutions d&apos;assurance sur mesure pour protéger votre entreprise et vos actifs
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-4">Protégez Votre Activité</h2>
              <div className="gold-line mb-8" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                En tant que courtier indépendant, nous analysons vos besoins et comparons les offres 
                de nos partenaires assureurs pour vous proposer les garanties les plus adaptées 
                au meilleur tarif.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre expertise couvre l&apos;ensemble des risques professionnels : responsabilité civile, 
                dommages aux biens, protection des personnes et assurance crédit.
              </p>
              
              <h3 className="font-semibold text-[#1B2B5A] mb-4">Nos Partenaires Assureurs</h3>
              <div className="flex flex-wrap gap-3">
                {partners.map((partner) => (
                  <span
                    key={partner}
                    className="px-4 py-2 bg-[#F8F9FA] text-gray-700 text-sm border border-gray-200"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=500&fit=crop"
                alt="Courtage Assurance"
                className="w-full h-[400px] object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FA]">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Nos Solutions d&apos;Assurance</h2>
            <div className="gold-line-center mb-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {assurances.map((assurance, index) => (
              <motion.div
                key={assurance.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#1B2B5A] flex items-center justify-center shrink-0">
                    <assurance.icon size={32} className="text-[#B8923B]" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-[#1B2B5A] mb-2">
                      {assurance.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{assurance.description}</p>
                    <ul className="space-y-2">
                      {assurance.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle size={16} className="text-[#B8923B]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1B2B5A]">
        <div className="container-premium text-center text-white">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-4">
            Obtenez Votre Devis Assurance
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Étude gratuite et sans engagement. Réponse sous 24h.
          </p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
            Demander un Devis
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}