"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Truck, CheckCircle, ArrowRight, Warehouse, MapPin, Clock, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Warehouse,
    title: "Entreposage",
    description: "Solutions de stockage sécurisées et adaptées à vos besoins.",
    features: ["Entrepôts sécurisés", "Gestion des stocks", "Inventaire temps réel", "Conditionnement"],
  },
  {
    icon: Truck,
    title: "Transport National",
    description: "Livraison sur tout le territoire ivoirien et pays limitrophes.",
    features: ["Livraison express", "Transport standard", "Groupage", "Affrètement"],
  },
  {
    icon: MapPin,
    title: "Last Mile",
    description: "Livraison du dernier kilomètre pour vos clients finaux.",
    features: ["Livraison B2B", "Livraison B2C", "Points relais", "Suivi en temps réel"],
  },
  {
    icon: BarChart3,
    title: "Gestion Supply Chain",
    description: "Optimisation complète de votre chaîne logistique.",
    features: ["Audit logistique", "Optimisation flux", "KPIs & reporting", "Conseil stratégique"],
  },
];

const stats = [
  { value: "48h", label: "Délai moyen Abidjan" },
  { value: "99%", label: "Taux de livraison" },
  { value: "5000m²", label: "Surface stockage" },
  { value: "24/7", label: "Suivi disponible" },
];

export default function DistributionPage() {
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
              <Truck size={18} className="text-[#B8923B]" />
              <span className="text-sm font-medium">Commerce & Supply</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="hero-title font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Distribution & <span className="hero-gold">Logistique</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-subtitle text-xl text-white/80"
            >
              Solutions logistiques intégrées pour optimiser votre supply chain
            </motion.p>
          </div>
        </div>
      </section>

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

      <section className="py-20">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Nos Solutions Logistiques</h2>
            <div className="gold-line-center mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une offre complète pour gérer efficacement vos flux de marchandises
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-4">Zone de Couverture</h2>
              <div className="gold-line mb-8" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                Notre réseau de distribution couvre l&apos;ensemble du territoire ivoirien 
                ainsi que les pays de la sous-région ouest-africaine.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white">
                  <Clock size={24} className="text-[#B8923B]" />
                  <div>
                    <h4 className="font-semibold text-[#1B2B5A]">Abidjan & environs</h4>
                    <p className="text-gray-600 text-sm">Livraison sous 24-48h</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white">
                  <Clock size={24} className="text-[#B8923B]" />
                  <div>
                    <h4 className="font-semibold text-[#1B2B5A]">Intérieur du pays</h4>
                    <p className="text-gray-600 text-sm">Livraison sous 3-5 jours</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white">
                  <Clock size={24} className="text-[#B8923B]" />
                  <div>
                    <h4 className="font-semibold text-[#1B2B5A]">Sous-région CEDEAO</h4>
                    <p className="text-gray-600 text-sm">Livraison sous 5-7 jours</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=500&fit=crop"
                alt="Logistique"
                width={600}
                height={400}
                unoptimized
                className="w-full h-[400px] object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1B2B5A]">
        <div className="container-premium text-center text-white">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-4">
            Optimisez Votre Logistique
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Contactez-nous pour un audit gratuit de votre chaîne logistique
          </p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
            Demander un Audit
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}