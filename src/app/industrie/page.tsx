"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, Boxes, Wrench, Calculator, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Boxes,
    title: "Béton Manufacturé",
    description: "Production de béton de haute qualité pour tous vos projets de construction.",
    features: ["Pavés autobloquants", "Bordures & caniveaux", "Hourdis & agglos", "Béton décoratif"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
  },
  {
    icon: Building2,
    title: "Solutions BTP",
    description: "Accompagnement complet pour vos projets de bâtiment et travaux publics.",
    features: ["Gros œuvre", "Second œuvre", "VRD", "Aménagements extérieurs"],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
  },
  {
    icon: Wrench,
    title: "Fournitures Techniques",
    description: "Large gamme de matériaux et équipements pour professionnels du BTP.",
    features: ["Ciment & agrégats", "Aciers & fers", "Outillage pro", "Équipements chantier"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
  },
];

const products = [
  { name: "Pavés Classiques", price: "À partir de 8 500 FCFA/m²" },
  { name: "Pavés Premium", price: "À partir de 12 000 FCFA/m²" },
  { name: "Bordures T2", price: "À partir de 3 500 FCFA/ml" },
  { name: "Hourdis 16x20x53", price: "À partir de 1 200 FCFA/u" },
  { name: "Agglos 15", price: "À partir de 450 FCFA/u" },
  { name: "Agglos 20", price: "À partir de 550 FCFA/u" },
];

export default function IndustriePage() {
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
            <Building2 size={18} className="text-[#B8923B]" />
            <span className="text-sm font-medium">Pôle Industrie</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Industrie & <span className="text-[#B8923B]">Béton</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Des solutions de construction robustes et durables pour tous vos projets
          </motion.p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Nos Solutions Industrielles</h2>
            <div className="gold-line-center mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une expertise complète dans le domaine du BTP et des matériaux de construction
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-[#1B2B5A] flex items-center justify-center">
                      <service.icon size={28} className="text-[#B8923B]" />
                    </div>
                    <h3 className="font-playfair text-2xl font-semibold text-[#1B2B5A]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle size={18} className="text-[#B8923B]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#B8923B] font-semibold hover:gap-4 transition-all"
                  >
                    Demander un devis
                    <ArrowRight size={18} />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOGUE PRODUITS */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Catalogue Produits</h2>
            <div className="gold-line-center mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme de produits en béton manufacturé
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 border border-gray-100 hover:shadow-lg hover:border-[#B8923B]/30 transition-all"
              >
                <h3 className="font-semibold text-[#1B2B5A] mb-2">{product.name}</h3>
                <p className="text-[#B8923B] font-medium">{product.price}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/contact" className="btn-outline">
              Télécharger le Catalogue Complet
            </Link>
          </div>
        </div>
      </section>

      {/* CONFIGURATEUR CTA */}
      <section className="py-20">
        <div className="container-premium">
          <div className="bg-[#1B2B5A] p-12 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8923B]/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <Calculator size={48} className="mx-auto mb-6 text-[#B8923B]" />
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                Configurateur Béton
              </h2>
              <p className="text-white/80 max-w-xl mx-auto mb-8">
                Configurez votre commande et obtenez un devis instantané pour vos projets
              </p>
              <Link href="/industrie/configurateur" className="btn-gold inline-flex items-center gap-2">
                Accéder au Configurateur
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}