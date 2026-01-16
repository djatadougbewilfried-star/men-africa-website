"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, CheckCircle, ArrowRight } from "lucide-react";

const products = [
  {
    name: "Pavés Autobloquants",
    description: "Pavés de haute qualité pour allées, parkings et espaces publics.",
    variants: ["Classique 6cm", "Classique 8cm", "Premium 8cm", "Drainant"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
  },
  {
    name: "Bordures & Caniveaux",
    description: "Bordures et caniveaux pour délimitation et évacuation des eaux.",
    variants: ["Bordure T2", "Bordure T3", "Caniveau CC1", "Caniveau CC2"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
  },
  {
    name: "Hourdis & Poutrelles",
    description: "Éléments préfabriqués pour planchers et dalles.",
    variants: ["Hourdis 16x20x53", "Hourdis 20x20x53", "Poutrelles BP", "Entrevous"],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
  },
  {
    name: "Agglos & Parpaings",
    description: "Blocs de béton pour construction de murs et cloisons.",
    variants: ["Agglos 10", "Agglos 15", "Agglos 20", "Agglos pleins"],
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
  },
];

const advantages = [
  "Production locale de qualité",
  "Normes internationales respectées",
  "Livraison rapide sur Abidjan",
  "Prix compétitifs",
  "Service technique dédié",
  "Garantie qualité",
];

export default function BetonManufacturePage() {
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
              <Building2 size={18} className="text-[#B8923B]" />
              <span className="text-sm font-medium">Industrie & Béton</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Béton <span className="text-[#B8923B]">Manufacturé</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80"
            >
              Produits en béton de haute qualité pour tous vos projets de construction
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="heading-2 mb-4">Qualité & Durabilité</h2>
              <div className="gold-line mb-8" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                Notre unité de production moderne fabrique une gamme complète de produits 
                en béton manufacturé, répondant aux normes les plus exigeantes du secteur BTP.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Des pavés autobloquants aux hourdis, en passant par les agglos et bordures, 
                nous proposons des solutions adaptées à tous les besoins de construction.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {advantages.map((advantage) => (
                  <div key={advantage} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#B8923B] shrink-0" />
                    <span className="text-gray-700 text-sm">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=500&fit=crop"
                alt="Béton Manufacturé"
                className="w-full h-[400px] object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Nos Produits</h2>
            <div className="gold-line-center mb-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-[#1B2B5A] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant) => (
                      <span
                        key={variant}
                        className="px-3 py-1 bg-[#F8F9FA] text-gray-600 text-xs"
                      >
                        {variant}
                      </span>
                    ))}
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
            Configurez Votre Commande
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Utilisez notre configurateur pour composer votre commande et obtenir un devis instantané
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/industrie/configurateur" className="btn-gold flex items-center gap-2">
              Accéder au Configurateur
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