"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Ship, CheckCircle, ArrowRight, Globe, FileCheck, Truck, Package } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sourcing International",
    description: "Identification et qualification des meilleurs fournisseurs mondiaux.",
    features: ["Recherche fournisseurs", "Audit qualité", "Négociation prix", "Échantillonnage"],
  },
  {
    icon: FileCheck,
    title: "Dédouanement",
    description: "Gestion complète des formalités douanières import et export.",
    features: ["Déclarations douane", "Régimes économiques", "Certifications", "Contentieux"],
  },
  {
    icon: Ship,
    title: "Fret Maritime & Aérien",
    description: "Organisation du transport international de vos marchandises.",
    features: ["Fret maritime", "Fret aérien", "Groupage", "Conteneurs complets"],
  },
  {
    icon: Package,
    title: "Logistique Intégrée",
    description: "Prise en charge de bout en bout de votre supply chain.",
    features: ["Entreposage", "Manutention", "Distribution", "Traçabilité"],
  },
];

const destinations = [
  { region: "Europe", countries: "France, Belgique, Allemagne, Italie" },
  { region: "Asie", countries: "Chine, Inde, Turquie, EAU" },
  { region: "Amérique", countries: "USA, Brésil, Canada" },
  { region: "Afrique", countries: "CEDEAO, CEMAC, Afrique du Sud" },
];

export default function ImportExportPage() {
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
              <Ship size={18} className="text-[#B8923B]" />
              <span className="text-sm font-medium">Commerce & Supply</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="hero-title font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Import / <span className="hero-gold">Export</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-subtitle text-xl text-white/80"
            >
              Services complets d&apos;importation et d&apos;exportation vers l&apos;international
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Nos Services Import-Export</h2>
            <div className="gold-line-center mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une expertise complète pour faciliter vos échanges commerciaux internationaux
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
                className="bg-white p-8 border border-gray-100 hover:shadow-xl transition-all"
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
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle size={14} className="text-[#B8923B]" />
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

      <section className="py-20 bg-[#F8F9FA]">
        <div className="container-premium">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Nos Destinations</h2>
            <div className="gold-line-center mb-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 text-center"
              >
                <Globe size={32} className="text-[#B8923B] mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold text-[#1B2B5A] mb-2">
                  {dest.region}
                </h3>
                <p className="text-gray-600 text-sm">{dest.countries}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1B2B5A]">
        <div className="container-premium text-center text-white">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-4">
            Un Projet d&apos;Import ou d&apos;Export ?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Contactez notre équipe pour une étude personnalisée de votre projet
          </p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
            Nous Contacter
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}