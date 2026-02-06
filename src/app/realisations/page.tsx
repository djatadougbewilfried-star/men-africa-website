"use client";

import { motion } from "framer-motion";
import { Building, Factory, Landmark, ArrowRight, CheckCircle, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const realisations = [
  {
    id: 1,
    title: "Fourniture et Pose de Poteaux Bétons",
    client: "AS BT",
    category: "Industrie",
    description: "Fourniture et installation de poteaux électriques en béton manufacturé pour le réseau électrique.",
    services: ["Production de poteaux bétons", "Transport", "Pose et installation"],
    icon: Factory,
    status: "Réalisé",
  },
  {
    id: 2,
    title: "Fourniture et Pose de Poteaux Bétons",
    client: "ALEF Construction",
    category: "Industrie",
    description: "Projet de fourniture et installation de poteaux en béton pour infrastructure électrique.",
    services: ["Fabrication de poteaux", "Livraison sur site", "Installation complète"],
    icon: Factory,
    status: "Réalisé",
  },
  {
    id: 3,
    title: "Fourniture d'Agglos",
    client: "SNTP",
    category: "BTP",
    description: "Fourniture d'agglos (parpaings) pour projet de construction.",
    services: ["Production d'agglos", "Contrôle qualité", "Livraison"],
    icon: Building,
    status: "Réalisé",
  },
  {
    id: 4,
    title: "Travaux VRD",
    client: "EKDS",
    location: "N'Douci",
    category: "BTP",
    description: "Travaux de Voirie et Réseaux Divers (VRD) comprenant la construction d'infrastructures routières.",
    services: ["Terrassement", "Voirie", "Réseaux divers", "Assainissement"],
    icon: Landmark,
    status: "En cours",
  },
  {
    id: 5,
    title: "Conception et Réalisation de Plans Architecturaux",
    client: "Groupe CICBAD Holding",
    category: "Architecture",
    description: "Conception et réalisation de plans architecturaux pour projets immobiliers.",
    services: ["Études préliminaires", "Plans architecturaux", "Suivi de réalisation"],
    icon: Building,
    status: "Réalisé",
  },
];

const equipements = [
  "Moule d'agglos",
  "Moule de poteaux",
  "Moule de caniveaux",
  "Moule de claustra",
];

const produits = [
  { name: "Poteaux électriques", description: "Différentes dimensions disponibles" },
  { name: "Agglos / Parpaings", description: "Haute résistance pour construction" },
  { name: "Claustrales", description: "Éléments décoratifs en béton" },
  { name: "Pavés", description: "Pour aménagement extérieur" },
  { name: "Caniveaux", description: "Évacuation des eaux" },
  { name: "Bordures", description: "Délimitation de voies" },
  { name: "Séparateurs de chaussée", description: "Sécurité routière" },
  { name: "Tétrapodes", description: "Protection côtière" },
  { name: "Dalots", description: "Ouvrages hydrauliques" },
  { name: "Buses", description: "Canalisation" },
];

export default function RealisationsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative py-24 bg-[#1B2B5A]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#B8923B] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#B8923B] rounded-full blur-3xl" />
        </div>
        <div className="container-premium relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Nos <span className="text-[#B8923B]">Réalisations</span>
          </motion.h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Découvrez nos projets réalisés et en cours avec nos partenaires
          </p>
        </div>
      </section>

      {/* SITE DE PRODUCTION */}
      <section className="py-20">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2B5A] mb-4">
              Notre Site de Production
            </h2>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre unité de production de béton manufacturé à Yopougon
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 md:h-[400px] overflow-hidden shadow-xl"
            >
              <Image
                src="/realisations/site-production-1.jpg"
                alt="Site de production Men Africa - Vue 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-playfair text-xl font-semibold">
                  Zone de Production
                </h3>
                <p className="text-white/70 text-sm flex items-center gap-2 mt-1">
                  <MapPin size={14} />
                  Yopougon, Zone Industrielle d&apos;Ebimpé
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 md:h-[400px] overflow-hidden shadow-xl"
            >
              <Image
                src="/realisations/site-production-2.jpg"
                alt="Site de production Men Africa - Vue 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-playfair text-xl font-semibold">
                  Équipements & Moules
                </h3>
                <p className="text-white/70 text-sm flex items-center gap-2 mt-1">
                  <Factory size={14} />
                  Production de béton manufacturé
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2B5A] mb-4">
              Projets Réalisés
            </h2>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une sélection de nos collaborations avec des entreprises de référence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realisations.map((projet, index) => (
              <motion.div
                key={projet.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white shadow-lg border border-gray-100 overflow-hidden group hover:border-[#B8923B] transition-colors"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-[#1B2B5A] flex items-center justify-center group-hover:bg-[#B8923B] transition-colors">
                      <projet.icon className="text-white" size={28} />
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium ${
                      projet.status === "En cours" 
                        ? "bg-orange-100 text-orange-600" 
                        : "bg-green-100 text-green-600"
                    }`}>
                      {projet.status}
                    </span>
                  </div>
                  
                  <h3 className="font-playfair text-xl font-semibold text-[#1B2B5A] mb-2">
                    {projet.title}
                  </h3>
                  
                  <p className="text-[#B8923B] font-medium mb-3">
                    Client : {projet.client}
                    {projet.location && <span className="text-gray-500"> • {projet.location}</span>}
                  </p>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {projet.description}
                  </p>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm font-medium text-[#1B2B5A] mb-2">Services fournis :</p>
                    <ul className="space-y-1">
                      {projet.services.map((service, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle size={14} className="text-[#B8923B]" />
                          {service}
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

      {/* PRODUITS BÉTON */}
      <section className="py-20">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2B5A] mb-4">
              Nos Produits en Béton Manufacturé
            </h2>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de produits en béton de haute qualité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {produits.map((produit, index) => (
              <motion.div
                key={produit.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <h3 className="font-semibold text-[#1B2B5A] mb-2">{produit.name}</h3>
                <p className="text-gray-500 text-sm">{produit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/industrie/beton-manufacture" className="btn-gold inline-flex items-center gap-2">
              Voir le Catalogue Complet
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ÉQUIPEMENTS */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2B5A] mb-6">
                Nos Équipements
              </h2>
              <div className="gold-line mb-6" />
              <p className="text-gray-600 mb-8">
                Notre siège technique à Yopougon est équipé de moules professionnels pour la production 
                de béton manufacturé de haute qualité.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {equipements.map((equipement, index) => (
                  <motion.div
                    key={equipement}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-white shadow-sm"
                  >
                    <CheckCircle className="text-[#B8923B]" size={20} />
                    <span className="text-[#1B2B5A] font-medium">{equipement}</span>
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
                Siège Technique
              </h3>
              <div className="space-y-4">
                <p className="text-white/80">
                  <strong className="text-[#B8923B]">Localisation :</strong><br />
                  Yopougon, Cité ADO<br />
                  Zone Industrielle, Ebimpé
                </p>
                <p className="text-white/80">
                  <strong className="text-[#B8923B]">Capacités :</strong><br />
                  Production de tous types de béton manufacturé selon les normes en vigueur.
                </p>
                <p className="text-white/80">
                  <strong className="text-[#B8923B]">Livraison :</strong><br />
                  Transport et livraison sur toute la Côte d&apos;Ivoire.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1B2B5A] to-[#2a3f7a]">
        <div className="container-premium text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Un Projet en Vue ?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
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