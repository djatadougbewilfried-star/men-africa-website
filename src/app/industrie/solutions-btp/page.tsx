"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Building2, CheckCircle, ArrowRight, Hammer, HardHat, Ruler, Truck } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Gros Œuvre",
    description: "Construction de structures en béton armé, fondations, dalles et murs porteurs.",
    features: ["Fondations", "Structures béton", "Dalles & planchers", "Élévations"],
  },
  {
    icon: Hammer,
    title: "Second Œuvre",
    description: "Travaux de finition et d'aménagement intérieur de vos bâtiments.",
    features: ["Cloisons", "Revêtements", "Menuiseries", "Plomberie & électricité"],
  },
  {
    icon: Ruler,
    title: "VRD",
    description: "Voirie et Réseaux Divers pour l'aménagement de vos espaces extérieurs.",
    features: ["Voirie", "Assainissement", "Réseaux secs", "Éclairage public"],
  },
  {
    icon: HardHat,
    title: "Aménagements Extérieurs",
    description: "Création d'espaces extérieurs fonctionnels et esthétiques.",
    features: ["Parkings", "Allées piétonnes", "Espaces verts", "Clôtures"],
  },
];

const projects = [
  { name: "Résidences", count: "150+" },
  { name: "Bureaux", count: "45+" },
  { name: "Commerces", count: "80+" },
  { name: "Industriels", count: "35+" },
];

export default function SolutionsBTPPage() {
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
              className="hero-title font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Solutions <span className="hero-gold">BTP</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-subtitle text-xl text-white/80"
            >
              Accompagnement complet pour vos projets de bâtiment et travaux publics
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="font-playfair text-4xl font-bold text-[#B8923B] mb-1">
                  {project.count}
                </div>
                <div className="text-gray-600">{project.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Nos Domaines d&apos;Intervention</h2>
            <div className="gold-line-center mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une expertise complète pour tous vos projets de construction
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
              <h2 className="heading-2 mb-4">Pourquoi Nous Choisir ?</h2>
              <div className="gold-line mb-8" />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#B8923B] flex items-center justify-center shrink-0 text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-[#1B2B5A] mb-1">Expertise Locale</h3>
                    <p className="text-gray-600 text-sm">Plus de 15 ans d&apos;expérience sur le marché ivoirien</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#B8923B] flex items-center justify-center shrink-0 text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-[#1B2B5A] mb-1">Qualité Garantie</h3>
                    <p className="text-gray-600 text-sm">Matériaux certifiés et main d&apos;œuvre qualifiée</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#B8923B] flex items-center justify-center shrink-0 text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-[#1B2B5A] mb-1">Respect des Délais</h3>
                    <p className="text-gray-600 text-sm">Planification rigoureuse et suivi de chantier</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=500&fit=crop"
                alt="Chantier BTP"
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
            Un Projet de Construction ?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Contactez-nous pour une étude gratuite et un devis personnalisé
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