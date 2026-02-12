"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Landmark, CheckCircle, ArrowRight, Building, CreditCard, Home, Briefcase } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Crédit Entreprise",
    description: "Financement pour le développement de votre activité, acquisition d'équipements, fonds de roulement.",
  },
  {
    icon: Home,
    title: "Prêt Immobilier",
    description: "Acquisition de locaux professionnels, construction, investissement immobilier.",
  },
  {
    icon: CreditCard,
    title: "Ligne de Crédit",
    description: "Facilité de caisse et découvert autorisé pour gérer votre trésorerie.",
  },
  {
    icon: Briefcase,
    title: "Financement de Projet",
    description: "Montage financier sur mesure pour vos projets d'envergure.",
  },
];

const advantages = [
  "Accès à plus de 15 partenaires bancaires",
  "Négociation des meilleurs taux du marché",
  "Accompagnement personnalisé de A à Z",
  "Réponse de principe sous 48h",
  "Aucun frais de dossier initial",
  "Confidentialité garantie",
];

export default function CourtageBancairePage() {
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
              <Landmark size={18} className="text-[#B8923B]" />
              <span className="text-sm font-medium">Finance & Investissement</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="hero-title font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Courtage <span className="hero-gold">Bancaire</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-subtitle text-xl text-white/80"
            >
              Nous négocions pour vous les meilleures conditions de financement auprès de nos partenaires bancaires
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-4">Notre Expertise à Votre Service</h2>
              <div className="gold-line mb-8" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fort de notre réseau de partenaires bancaires et de notre connaissance approfondie 
                du marché financier ivoirien, nous vous accompagnons dans l&apos;obtention du financement 
                idéal pour votre projet.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre rôle : vous faire gagner du temps et de l&apos;argent en négociant pour vous 
                les meilleures conditions (taux, durée, garanties) auprès des établissements bancaires.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {advantages.map((advantage) => (
                  <div key={advantage} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#B8923B] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=500&fit=crop"
                alt="Courtage Bancaire"
                width={600}
                height={400}
                unoptimized
                className="w-full h-[400px] object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FA]">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Nos Solutions de Financement</h2>
            <div className="gold-line-center mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de solutions adaptées à chaque besoin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 text-center hover:shadow-xl transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#1B2B5A]/5 flex items-center justify-center">
                  <service.icon size={32} className="text-[#B8923B]" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-[#1B2B5A] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1B2B5A]">
        <div className="container-premium text-center text-white">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-4">
            Prêt à Financer Votre Projet ?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Utilisez notre simulateur pour estimer vos mensualités ou contactez-nous pour une étude personnalisée
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/finance/simulateur" className="btn-gold flex items-center gap-2">
              Simuler mon Financement
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-outline-gold border-white/30 text-white hover:bg-white hover:text-[#1B2B5A]">
              Demander un Devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}