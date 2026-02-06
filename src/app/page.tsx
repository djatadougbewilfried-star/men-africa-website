"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Briefcase, 
  Factory, 
  ShoppingCart, 
  Phone,
  Award,
  Users,
  TrendingUp
} from "lucide-react";

const poles = [
  {
    icon: Briefcase,
    title: "Finance & Investissement",
    description: "Courtage bancaire, assurance, levée de fonds et structuration de projets pour accélérer votre croissance.",
    href: "/finance",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: Factory,
    title: "Industrie & Béton",
    description: "Production de béton manufacturé de qualité : poteaux, agglos, pavés, caniveaux et bien plus.",
    href: "/industrie",
    color: "from-amber-600 to-amber-800",
  },
  {
    icon: ShoppingCart,
    title: "Commerce & Supply",
    description: "Import-export, commerce général et distribution pour répondre à tous vos besoins.",
    href: "/commerce",
    color: "from-emerald-600 to-emerald-800",
  },
];

const cataloguePreview = [
  { name: "Poteaux Électriques", image: "/catalogue/poteau-electrique.jpg" },
  { name: "Agglos", image: "/catalogue/agglos.jpg" },
  { name: "Pavés", image: "/catalogue/paves.jpg" },
  { name: "Caniveaux", image: "/catalogue/caniveau-rectangulaire.jpg" },
  { name: "Claustra", image: "/catalogue/claustra.jpg" },
  { name: "Bordures", image: "/catalogue/bordures-a2.jpg" },
];

const stats = [
  { value: "5M", label: "Capital FCFA" },
  { value: "100+", label: "Projets réalisés" },
  { value: "50+", label: "Clients satisfaits" },
  { value: "3", label: "Pôles d'activité" },
];

const clients = [
  "AS BT",
  "ALEF Construction", 
  "SNTP",
  "EKDS",
  "Groupe CICBAD Holding",
];

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-[#1B2B5A] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#B8923B]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#B8923B]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-premium relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#B8923B]/20 px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-[#B8923B] rounded-full animate-pulse" />
                <span className="text-[#B8923B] font-medium text-sm">Votre partenaire multisectoriel</span>
              </div>
              
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Men Africa<br />
                <span className="text-[#B8923B]">Company</span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
                Finance, Industrie et Commerce au service de votre réussite en Côte d&apos;Ivoire et en Afrique.
              </p>
              
              <p className="text-[#B8923B] font-semibold italic text-lg mb-8">
                &quot;Faite briller votre lumière&quot;
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-gold">
                  Demander un Devis
                </Link>
                <Link href="/a-propos" className="px-8 py-3 border-2 border-white/30 text-white hover:bg-white/10 transition-colors font-medium text-center">
                  Découvrir Men Africa
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative h-48 overflow-hidden shadow-xl">
                      <Image
                        src="/catalogue/poteau-electrique.jpg"
                        alt="Poteaux électriques"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-32 overflow-hidden shadow-xl">
                      <Image
                        src="/catalogue/paves.jpg"
                        alt="Pavés"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="relative h-32 overflow-hidden shadow-xl">
                      <Image
                        src="/catalogue/agglos.jpg"
                        alt="Agglos"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden shadow-xl">
                      <Image
                        src="/realisations/site-production-1.jpg"
                        alt="Site de production"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 bg-white border-b">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#B8923B] mb-1">
                  {stat.value}
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PÔLES D'ACTIVITÉ */}
      <section className="py-20">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2B5A] mb-4">
              Nos Pôles d&apos;Activité
            </h2>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trois domaines d&apos;expertise complémentaires pour accompagner tous vos projets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {poles.map((pole, index) => (
              <motion.div
                key={pole.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={pole.href} className="block bg-white p-8 shadow-lg border border-gray-100 hover:border-[#B8923B] transition-all group h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pole.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <pole.icon className="text-white" size={32} />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-[#1B2B5A] mb-3">
                    {pole.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{pole.description}</p>
                  <span className="inline-flex items-center gap-2 text-[#B8923B] font-medium group-hover:gap-3 transition-all">
                    En savoir plus
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOGUE APERÇU */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2B5A] mb-4">
              Notre Catalogue Béton
            </h2>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme complète de produits en béton manufacturé
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {cataloguePreview.map((produit, index) => (
              <motion.div
                key={produit.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white shadow-md overflow-hidden group"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={produit.image}
                    alt={produit.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 text-center">
                  <h4 className="font-medium text-[#1B2B5A] text-sm">{produit.name}</h4>
                </div>
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

      {/* POURQUOI NOUS CHOISIR */}
      <section className="py-20">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2B5A] mb-6">
                Pourquoi Choisir Men Africa ?
              </h2>
              <div className="gold-line mb-8" />
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1B2B5A]/10 flex items-center justify-center shrink-0">
                    <Award className="text-[#B8923B]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B2B5A] mb-1">Qualité Garantie</h3>
                    <p className="text-gray-600">Produits conformes aux normes, contrôle qualité rigoureux à chaque étape.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1B2B5A]/10 flex items-center justify-center shrink-0">
                    <Users className="text-[#B8923B]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B2B5A] mb-1">Équipe Expérimentée</h3>
                    <p className="text-gray-600">Des professionnels qualifiés à votre service pour tous vos projets.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1B2B5A]/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="text-[#B8923B]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B2B5A] mb-1">Solutions Complètes</h3>
                    <p className="text-gray-600">De la conception à la livraison, un accompagnement personnalisé.</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] lg:h-[500px]"
            >
              <Image
                src="/realisations/site-production-2.jpg"
                alt="Site de production Men Africa"
                fill
                className="object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#B8923B] p-6 text-white">
                <p className="text-3xl font-bold">100+</p>
                <p className="text-sm">Projets réalisés</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-16 bg-[#1B2B5A]">
        <div className="container-premium">
          <div className="text-center mb-10">
            <h3 className="font-playfair text-2xl font-semibold text-white mb-2">
              Ils Nous Font Confiance
            </h3>
            <div className="gold-line mx-auto" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-6 py-3 bg-white/10 text-white font-medium"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#B8923B] to-[#d4a84b]">
        <div className="container-premium text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Contactez-nous dès maintenant pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-[#1B2B5A] text-white hover:bg-[#0f1a38] transition-colors font-medium">
              Demander un Devis
            </Link>
            <a href="tel:+22507577405696" className="px-8 py-4 bg-white text-[#1B2B5A] hover:bg-gray-100 transition-colors font-medium inline-flex items-center justify-center gap-2">
              <Phone size={18} />
              Appeler Maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}