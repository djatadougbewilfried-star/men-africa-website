"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Wrench, CheckCircle, ArrowRight, Package, Hammer, Cog } from "lucide-react";

const categories = [
  {
    icon: Package,
    title: "Ciment & Agrégats",
    products: ["Ciment CEM II 32.5", "Ciment CEM I 42.5", "Sable fin", "Sable grossier", "Gravier 5/15", "Gravier 15/25"],
  },
  {
    icon: Cog,
    title: "Aciers & Fers",
    products: ["Fer à béton Ø6 à Ø32", "Treillis soudé", "Fil de ligature", "Fers plats", "Cornières", "Tubes acier"],
  },
  {
    icon: Hammer,
    title: "Outillage Pro",
    products: ["Bétonnières", "Vibreurs", "Échafaudages", "Étais", "Coffrages", "Outillage manuel"],
  },
  {
    icon: Wrench,
    title: "Équipements Chantier",
    products: ["Groupes électrogènes", "Compresseurs", "Pompes", "Brouettes", "EPI", "Signalisation"],
  },
];

const brands = [
  "CIMAF", "DANGOTE", "LAFARGE", "SIKA", "MAPEI", "HILTI", "BOSCH", "DEWALT"
];

export default function FournituresPage() {
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
              <Wrench size={18} className="text-[#B8923B]" />
              <span className="text-sm font-medium">Industrie & Béton</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Fournitures <span className="text-[#B8923B]">Techniques</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80"
            >
              Large gamme de matériaux et équipements pour professionnels du BTP
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="heading-2 mb-4">Tout Pour Votre Chantier</h2>
              <div className="gold-line mb-8" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                Men Africa Company vous propose une gamme complète de fournitures techniques 
                pour tous vos projets de construction. Des matériaux de base aux équipements 
                spécialisés, nous avons tout ce qu&apos;il vous faut.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nous travaillons avec les meilleures marques du marché pour vous garantir 
                des produits de qualité à des prix compétitifs.
              </p>
              <div className="flex flex-wrap gap-3">
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="px-4 py-2 bg-[#F8F9FA] text-gray-700 text-sm font-medium border border-gray-200"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=500&fit=crop"
                alt="Fournitures BTP"
                className="w-full h-[400px] object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Nos Catégories</h2>
            <div className="gold-line-center mb-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#1B2B5A] flex items-center justify-center shrink-0">
                    <category.icon size={32} className="text-[#B8923B]" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-[#1B2B5A] mb-4">
                      {category.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {category.products.map((product) => (
                        <div key={product} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle size={14} className="text-[#B8923B]" />
                          {product}
                        </div>
                      ))}
                    </div>
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
            Besoin de Fournitures ?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Contactez-nous pour un devis personnalisé. Livraison rapide sur Abidjan et environs.
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