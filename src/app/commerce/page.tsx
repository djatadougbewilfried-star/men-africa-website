"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Ship, Truck, Package, ArrowRight, CheckCircle, Globe } from "lucide-react";

const services = [
  {
    icon: ShoppingBag,
    title: "Commerce Général",
    description: "Fourniture de biens et équipements pour entreprises et particuliers.",
    features: ["Équipements industriels", "Fournitures de bureau", "Matériel informatique", "Consommables"],
  },
  {
    icon: Ship,
    title: "Import / Export",
    description: "Services complets d'importation et d'exportation vers l'international.",
    features: ["Sourcing international", "Dédouanement", "Fret maritime & aérien", "Certification"],
  },
  {
    icon: Truck,
    title: "Distribution & Logistique",
    description: "Solutions logistiques intégrées pour la gestion de votre supply chain.",
    features: ["Entreposage", "Transport national", "Gestion de stocks", "Livraison last-mile"],
  },
];

const partners = [
  "Europe", "Asie", "Amérique", "Moyen-Orient"
];

const stats = [
  { value: "200+", label: "Références Produits" },
  { value: "15", label: "Pays Partenaires" },
  { value: "48h", label: "Délai de Livraison" },
  { value: "99%", label: "Satisfaction Client" },
];

export default function CommercePage() {
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
            <ShoppingBag size={18} className="text-[#B8923B]" />
            <span className="text-sm font-medium">Pôle Commerce</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero-title font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Commerce & <span className="hero-gold">Supply Chain</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-subtitle text-xl text-white/80 max-w-2xl mx-auto"
          >
            Votre partenaire pour l&apos;approvisionnement et la distribution en Afrique
          </motion.p>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 bg-white border-b">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="font-playfair text-4xl font-bold text-[#B8923B] mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Nos Services Commerciaux</h2>
            <div className="gold-line-center mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour optimiser votre chaîne d&apos;approvisionnement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 border border-gray-100 hover:shadow-xl hover:border-[#B8923B]/20 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-[#1B2B5A] flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-[#B8923B]" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-[#1B2B5A] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={16} className="text-[#B8923B]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONE DE COUVERTURE */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-4">Réseau International</h2>
              <div className="gold-line mb-8" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                Grâce à notre réseau de partenaires établi sur plusieurs continents, 
                nous vous garantissons un accès privilégié aux meilleurs fournisseurs mondiaux.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre expertise en commerce international nous permet de vous accompagner 
                dans toutes vos opérations d&apos;import-export, du sourcing à la livraison finale.
              </p>
              <div className="flex flex-wrap gap-3">
                {partners.map((partner) => (
                  <div
                    key={partner}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200"
                  >
                    <Globe size={16} className="text-[#B8923B]" />
                    <span className="text-sm font-medium text-[#1B2B5A]">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=500&fit=crop"
                alt="Global Network"
                width={600}
                height={400}
                unoptimized
                className="w-full h-96 object-cover shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#B8923B] text-white p-6">
                <Package size={32} className="mb-2" />
                <div className="font-playfair text-2xl font-bold">15+</div>
                <div className="text-sm text-white/80">Pays Couverts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-premium text-center">
          <h2 className="heading-2 mb-4">Besoin d&apos;un Devis ?</h2>
          <div className="gold-line-center mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contactez-nous pour discuter de vos besoins en approvisionnement
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Demander un Devis
            </Link>
            <Link href="/contact" className="btn-outline">
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}