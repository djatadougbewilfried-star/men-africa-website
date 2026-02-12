"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, CheckCircle, ArrowRight, Monitor, Printer, Package, Coffee } from "lucide-react";

const categories = [
  {
    icon: Monitor,
    title: "Matériel Informatique",
    description: "Équipements IT pour entreprises",
    products: ["Ordinateurs", "Serveurs", "Imprimantes", "Réseaux"],
  },
  {
    icon: Printer,
    title: "Fournitures de Bureau",
    description: "Tout pour équiper vos espaces de travail",
    products: ["Papeterie", "Mobilier", "Archivage", "Consommables"],
  },
  {
    icon: Package,
    title: "Équipements Industriels",
    description: "Machines et outillages professionnels",
    products: ["Machines-outils", "Outillage", "EPI", "Manutention"],
  },
  {
    icon: Coffee,
    title: "Équipements Collectivités",
    description: "Solutions pour entreprises et administrations",
    products: ["Mobilier collectif", "Électroménager", "Restauration", "Entretien"],
  },
];

export default function CommerceGeneralPage() {
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
              <ShoppingBag size={18} className="text-[#B8923B]" />
              <span className="text-sm font-medium">Commerce & Supply</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="hero-title font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Commerce <span className="hero-gold">Général</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-subtitle text-xl text-white/80"
            >
              Fourniture de biens et équipements pour entreprises et collectivités
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-4">Votre Partenaire Approvisionnement</h2>
            <div className="gold-line-center mb-6" />
            <p className="text-gray-600 leading-relaxed">
              Men Africa Company vous accompagne dans l&apos;approvisionnement de tous vos besoins 
              en équipements et fournitures. Nous négocions pour vous les meilleures conditions 
              auprès de nos fournisseurs partenaires.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 border border-gray-100 hover:shadow-xl hover:border-[#B8923B]/20 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#1B2B5A] flex items-center justify-center shrink-0">
                    <category.icon size={32} className="text-[#B8923B]" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-[#1B2B5A] mb-1">
                      {category.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">{category.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.products.map((product) => (
                        <span
                          key={product}
                          className="px-3 py-1 bg-[#F8F9FA] text-gray-600 text-xs"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
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
              <h2 className="heading-2 mb-4">Nos Avantages</h2>
              <div className="gold-line mb-8" />
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#B8923B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#1B2B5A]">Prix Négociés</h4>
                    <p className="text-gray-600 text-sm">Bénéficiez de nos accords-cadres avec les fournisseurs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#B8923B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#1B2B5A]">Qualité Garantie</h4>
                    <p className="text-gray-600 text-sm">Produits certifiés et garantis constructeur</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#B8923B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#1B2B5A]">Service Complet</h4>
                    <p className="text-gray-600 text-sm">Livraison, installation et SAV inclus</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#B8923B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#1B2B5A]">Facilités de Paiement</h4>
                    <p className="text-gray-600 text-sm">Options de financement adaptées à vos besoins</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=500&fit=crop"
                alt="Commerce Général"
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
            Besoin d&apos;Équipements ?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Envoyez-nous votre liste de besoins pour recevoir un devis personnalisé
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