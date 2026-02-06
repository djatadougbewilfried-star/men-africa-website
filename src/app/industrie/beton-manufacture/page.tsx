"use client";

import { motion } from "framer-motion";
import { Factory, CheckCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const produits = [
  {
    id: 1,
    name: "Poteaux Électriques",
    image: "/catalogue/poteau-electrique.jpg",
    description: "Poteaux en béton armé pour réseaux électriques et télécommunications.",
    specs: ["Hauteur: 9m à 12m", "Haute résistance", "Conforme aux normes"],
  },
  {
    id: 2,
    name: "Agglos / Parpaings",
    image: "/catalogue/agglos.jpg",
    description: "Blocs de béton creux pour construction de murs et cloisons.",
    specs: ["Dimensions standards", "Résistance optimale", "Production locale"],
  },
  {
    id: 3,
    name: "Pavés",
    image: "/catalogue/paves.jpg",
    description: "Pavés autobloquants pour aménagement de cours, parkings et allées.",
    specs: ["Plusieurs coloris", "Antidérapant", "Haute durabilité"],
  },
  {
    id: 4,
    name: "Claustra",
    image: "/catalogue/claustra.jpg",
    description: "Éléments décoratifs ajourés pour clôtures et séparations esthétiques.",
    specs: ["Design moderne", "Ventilation naturelle", "Facile à poser"],
  },
  {
    id: 5,
    name: "Caniveau Rectangulaire",
    image: "/catalogue/caniveau-rectangulaire.jpg",
    description: "Caniveaux pour évacuation des eaux pluviales et usées.",
    specs: ["Section rectangulaire", "Haute capacité", "Résistant"],
  },
  {
    id: 6,
    name: "Caniveau Trapézoïdal",
    image: "/catalogue/caniveau-trapez.jpg",
    description: "Caniveaux à section trapézoïdale pour drainage efficace.",
    specs: ["Écoulement optimisé", "Grande capacité", "Installation facile"],
  },
  {
    id: 7,
    name: "Dalot",
    image: "/catalogue/dalot.jpg",
    description: "Ouvrages hydrauliques pour passage d'eau sous les routes.",
    specs: ["Plusieurs dimensions", "Béton armé", "Longue durée de vie"],
  },
  {
    id: 8,
    name: "Buse",
    image: "/catalogue/buse.jpg",
    description: "Conduites en béton pour canalisation et assainissement.",
    specs: ["Diamètres variés", "Joints étanches", "Résistance mécanique"],
  },
  {
    id: 9,
    name: "Tétrapode",
    image: "/catalogue/tetrapode.jpg",
    description: "Blocs de protection côtière contre l'érosion marine.",
    specs: ["Protection efficace", "Béton haute densité", "Résistant aux vagues"],
  },
  {
    id: 10,
    name: "Séparateur de Chaussée",
    image: "/catalogue/separateur-chaussee.jpg",
    description: "Éléments de sécurité routière pour séparation des voies.",
    specs: ["Sécurité renforcée", "Haute visibilité", "Installation rapide"],
  },
];

const bordures = [
  { name: "Bordure A2", image: "/catalogue/bordures-a2.jpg" },
  { name: "Bordure Arrasée A1", image: "/catalogue/bordures-arrasee-a1.jpg" },
  { name: "Bordure CC", image: "/catalogue/bordures-cc.jpg" },
  { name: "Bordure CS", image: "/catalogue/bordures-cs.jpg" },
  { name: "Bordure P", image: "/catalogue/bordures-p.jpg" },
  { name: "Bordure T1-T2", image: "/catalogue/bordures-t1-t2.jpg" },
];

const avantages = [
  "Production 100% locale en Côte d'Ivoire",
  "Contrôle qualité rigoureux",
  "Livraison sur tout le territoire",
  "Prix compétitifs",
  "Équipe technique expérimentée",
  "Respect des délais",
];

export default function BetonManufacturePage() {
  return (
    <div>
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
            className="inline-flex items-center gap-2 bg-[#B8923B]/20 px-4 py-2 mb-6"
          >
            <Factory size={20} className="text-[#B8923B]" />
            <span className="text-[#B8923B] font-medium">Industrie & BTP</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Béton <span className="text-[#B8923B]">Manufacturé</span>
          </motion.h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Production de qualité supérieure pour tous vos projets de construction et d&apos;aménagement
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2B5A] mb-6">
              Une Gamme Complète de Produits en Béton
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Notre unité de production basée à <strong>Yopougon, Zone Industrielle d&apos;Ebimpé</strong>, 
              est équipée de moules professionnels pour fabriquer une large gamme de produits en béton 
              manufacturé répondant aux normes les plus exigeantes.
            </p>
          </div>
        </div>
      </section>

      {/* CATALOGUE PRODUITS */}
      <section className="py-20">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2B5A] mb-4">
              Notre Catalogue
            </h2>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des produits de qualité pour répondre à tous vos besoins en construction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produits.map((produit, index) => (
              <motion.div
                key={produit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={produit.image}
                    alt={produit.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-playfair text-xl font-semibold text-white">
                    {produit.name}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{produit.description}</p>
                  <ul className="space-y-2">
                    {produit.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle size={14} className="text-[#B8923B]" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BORDURES - SECTION SPÉCIALE */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2B5A] mb-4">
              Bordures de Voirie
            </h2>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de bordures pour tous types d&apos;aménagements urbains
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {bordures.map((bordure, index) => (
              <motion.div
                key={bordure.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white shadow-md overflow-hidden group"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={bordure.image}
                    alt={bordure.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 text-center">
                  <h4 className="font-medium text-[#1B2B5A] text-sm">{bordure.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="py-20">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2B5A] mb-6">
                Pourquoi Choisir Men Africa ?
              </h2>
              <div className="gold-line mb-8" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {avantages.map((avantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-[#F8F9FA]"
                  >
                    <CheckCircle className="text-[#B8923B] shrink-0" size={20} />
                    <span className="text-[#1B2B5A] font-medium">{avantage}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1B2B5A] to-[#2a3f7a] p-8 text-white"
            >
              <h3 className="font-playfair text-2xl font-semibold mb-6">
                Demandez un Devis Gratuit
              </h3>
              <p className="text-white/80 mb-6">
                Notre équipe technique est à votre disposition pour étudier vos besoins 
                et vous proposer les meilleures solutions.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="text-[#B8923B]" size={20} />
                  <div>
                    <p className="text-white/70 text-sm">Appelez-nous</p>
                    <p className="font-medium">(+225) 07 57 74 05 96</p>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="btn-gold inline-flex items-center gap-2 w-full justify-center">
                Demander un Devis
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1B2B5A] to-[#2a3f7a]">
        <div className="container-premium text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Besoin de Béton Manufacturé ?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé. 
            Livraison sur toute la Côte d&apos;Ivoire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Nous Contacter
            </Link>
            <Link href="/industrie/configurateur" className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-[#1B2B5A] transition-colors font-medium">
              Configurateur Béton
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}