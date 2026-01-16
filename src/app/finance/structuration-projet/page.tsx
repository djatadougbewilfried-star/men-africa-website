"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, CheckCircle, ArrowRight, BarChart3, FileCheck, Scale, PresentationIcon } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Business Plan",
    description: "Élaboration de business plans solides et convaincants pour vos investisseurs.",
    features: ["Analyse de marché", "Projections financières", "Stratégie commerciale", "Plan opérationnel"],
  },
  {
    icon: PresentationIcon,
    title: "Modélisation Financière",
    description: "Construction de modèles financiers détaillés pour piloter votre activité.",
    features: ["Prévisionnel sur 5 ans", "Scénarios multiples", "Indicateurs clés", "Tableaux de bord"],
  },
  {
    icon: FileCheck,
    title: "Due Diligence",
    description: "Accompagnement dans les processus d'audit et de vérification.",
    features: ["Due diligence financière", "Due diligence juridique", "Due diligence opérationnelle", "Rapport de synthèse"],
  },
  {
    icon: Scale,
    title: "Négociation",
    description: "Support dans les négociations avec investisseurs et partenaires financiers.",
    features: ["Term sheet", "Pacte d'actionnaires", "Garanties", "Conditions suspensives"],
  },
];

export default function StructurationProjetPage() {
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
              <FileText size={18} className="text-[#B8923B]" />
              <span className="text-sm font-medium">Finance & Investissement</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Structuration de <span className="text-[#B8923B]">Projet</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80"
            >
              Montage financier et juridique de vos projets d&apos;investissement
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-4">Un Accompagnement Sur Mesure</h2>
            <div className="gold-line-center mb-6" />
            <p className="text-gray-600 leading-relaxed">
              De l&apos;idée au financement, nous structurons votre projet pour maximiser 
              son attractivité auprès des investisseurs et partenaires financiers. 
              Notre expertise couvre l&apos;ensemble des aspects financiers, juridiques et stratégiques.
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
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-[#1B2B5A] mb-2">
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

      <section className="py-20 bg-[#1B2B5A]">
        <div className="container-premium text-center text-white">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-4">
            Besoin d&apos;Accompagnement ?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Discutons de votre projet et définissons ensemble la meilleure stratégie
          </p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
            Prendre Rendez-vous
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}