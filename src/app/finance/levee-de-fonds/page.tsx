"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { TrendingUp, CheckCircle, ArrowRight, Users, Target, FileText, Handshake } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Diagnostic Initial",
    description: "Analyse de votre projet, de vos besoins financiers et de votre positionnement marché.",
  },
  {
    number: "02",
    title: "Structuration",
    description: "Élaboration du business plan, valorisation et définition de la stratégie de levée.",
  },
  {
    number: "03",
    title: "Ciblage Investisseurs",
    description: "Identification et approche des investisseurs pertinents pour votre projet.",
  },
  {
    number: "04",
    title: "Négociation & Closing",
    description: "Accompagnement dans les négociations jusqu'à la signature des accords.",
  },
];

const investors = [
  { type: "Capital Développement", description: "Pour accélérer votre croissance" },
  { type: "Capital Amorçage", description: "Pour lancer votre startup" },
  { type: "Dette Privée", description: "Financement non dilutif" },
  { type: "Business Angels", description: "Investisseurs individuels experts" },
  { type: "Fonds d'Investissement", description: "Investisseurs institutionnels" },
  { type: "Family Offices", description: "Gestion de patrimoine familial" },
];

export default function LeveeDeFondsPage() {
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
              <TrendingUp size={18} className="text-[#B8923B]" />
              <span className="text-sm font-medium">Finance & Investissement</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="hero-title font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Levée de <span className="hero-gold">Fonds</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-subtitle text-xl text-white/80"
            >
              Accompagnement complet pour financer votre croissance et concrétiser vos ambitions
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-4">Financez Votre Ambition</h2>
              <div className="gold-line mb-8" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                Vous avez un projet de croissance, de développement à l&apos;international ou de 
                lancement d&apos;une nouvelle activité ? Nous vous accompagnons dans la recherche 
                et la structuration de votre financement.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre équipe dispose d&apos;un réseau étendu d&apos;investisseurs : fonds de private equity, 
                business angels, family offices et institutionnels, prêts à financer les projets 
                à fort potentiel en Afrique.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="font-playfair text-4xl font-bold text-[#B8923B]">50+</div>
                  <div className="text-gray-600 text-sm">Levées accompagnées</div>
                </div>
                <div>
                  <div className="font-playfair text-4xl font-bold text-[#B8923B]">25Mds</div>
                  <div className="text-gray-600 text-sm">FCFA levés</div>
                </div>
                <div>
                  <div className="font-playfair text-4xl font-bold text-[#B8923B]">85%</div>
                  <div className="text-gray-600 text-sm">Taux de succès</div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=500&fit=crop"
                alt="Levée de Fonds"
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
            <h2 className="heading-2 mb-4">Notre Méthodologie</h2>
            <div className="gold-line-center mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un processus éprouvé pour maximiser vos chances de succès
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-6xl font-playfair font-bold text-[#B8923B]/20 mb-4">
                  {step.number}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-[#1B2B5A] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Types d&apos;Investisseurs</h2>
            <div className="gold-line-center mb-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investors.map((investor, index) => (
              <motion.div
                key={investor.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 border border-gray-100 hover:shadow-lg hover:border-[#B8923B]/30 transition-all"
              >
                <h3 className="font-semibold text-[#1B2B5A] mb-1">{investor.type}</h3>
                <p className="text-gray-600 text-sm">{investor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1B2B5A]">
        <div className="container-premium text-center text-white">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-4">
            Prêt à Lever des Fonds ?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Présentez-nous votre projet pour une première évaluation gratuite
          </p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
            Soumettre mon Projet
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}