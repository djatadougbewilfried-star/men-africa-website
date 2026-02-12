"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Landmark, Shield, TrendingUp, FileText, Calculator, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Landmark,
    title: "Courtage Bancaire",
    description: "Négociation des meilleures conditions de financement auprès de nos partenaires bancaires.",
    features: ["Crédits entreprises", "Prêts immobiliers", "Lignes de crédit", "Financement de projets"],
  },
  {
    icon: Shield,
    title: "Courtage Assurance",
    description: "Solutions d'assurance sur mesure pour protéger vos actifs et votre activité.",
    features: ["Assurance entreprise", "RC Professionnelle", "Assurance chantier", "Flotte automobile"],
  },
  {
    icon: TrendingUp,
    title: "Levée de Fonds",
    description: "Accompagnement dans la structuration et la réalisation de vos opérations de financement.",
    features: ["Capital développement", "Dette privée", "Investisseurs institutionnels", "Business Angels"],
  },
  {
    icon: FileText,
    title: "Structuration de Projet",
    description: "Montage financier et juridique de vos projets d'investissement.",
    features: ["Business plan", "Modélisation financière", "Due diligence", "Négociation"],
  },
];

export default function FinancePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-24 bg-[#1B2B5A]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#B8923B] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#B8923B] rounded-full blur-3xl" />
        </div>
        <div className="container-premium relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <Landmark size={18} className="text-[#B8923B]" />
            <span className="text-sm font-medium">Pôle Finance</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero-title font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Finance & <span className="hero-gold">Investissement</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-subtitle text-xl text-white/80 max-w-2xl mx-auto"
          >
            Des solutions financières sur mesure pour accompagner votre croissance
          </motion.p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Nos Services Financiers</h2>
            <div className="gold-line-center mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de services pour répondre à tous vos besoins de financement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 border border-gray-100 hover:shadow-xl hover:border-[#B8923B]/20 transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#1B2B5A] flex items-center justify-center shrink-0">
                    <service.icon size={32} className="text-[#B8923B]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-xl font-semibold text-[#1B2B5A] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
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

      {/* SIMULATEUR CTA */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container-premium">
          <div className="bg-[#1B2B5A] p-12 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8923B]/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <Calculator size={48} className="mx-auto mb-6 text-[#B8923B]" />
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                Simulateur de Financement
              </h2>
              <p className="text-white/80 max-w-xl mx-auto mb-8">
                Estimez votre capacité d&apos;emprunt et découvrez les solutions adaptées à votre projet
              </p>
              <Link href="/finance/simulateur" className="btn-gold inline-flex items-center gap-2">
                Accéder au Simulateur
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-premium text-center">
          <h2 className="heading-2 mb-4">Besoin d&apos;un Conseil Personnalisé ?</h2>
          <div className="gold-line-center mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Nos experts financiers sont à votre disposition pour étudier votre projet
          </p>
          <Link href="/contact" className="btn-primary">
            Prendre Rendez-vous
          </Link>
        </div>
      </section>
    </>
  );
}