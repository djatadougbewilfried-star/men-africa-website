"use client";

import { motion } from "framer-motion";
import { Target, Eye, Award, Users, TrendingUp, Shield, Building2, Briefcase, Factory, ShoppingCart } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Shield,
    title: "Intégrité",
    description: "Nous agissons avec honnêteté et transparence dans toutes nos relations professionnelles.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque projet et chaque prestation de service.",
  },
  {
    icon: Users,
    title: "Partenariat",
    description: "Nous construisons des relations durables basées sur la confiance et le respect mutuel.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Nous adoptons les meilleures pratiques et technologies pour offrir des solutions modernes.",
  },
];

const chiffres = [
  { value: "5M", label: "Capital FCFA", suffix: "" },
  { value: "3", label: "Pôles d'activité", suffix: "" },
  { value: "100", label: "Projets réalisés", suffix: "+" },
  { value: "50", label: "Clients satisfaits", suffix: "+" },
];

const poles = [
  {
    icon: Briefcase,
    title: "Finance & Investissement",
    description: "Courtage bancaire, assurance, levée de fonds et structuration de projets.",
    href: "/finance",
  },
  {
    icon: Factory,
    title: "Industrie & Béton",
    description: "Production de béton manufacturé, BTP et fournitures techniques.",
    href: "/industrie",
  },
  {
    icon: ShoppingCart,
    title: "Commerce & Supply",
    description: "Commerce général, import/export et distribution.",
    href: "/commerce",
  },
];

export default function AProposPage() {
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
            className="hero-title font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            À Propos de <span className="hero-gold">Men Africa</span>
          </motion.h1>
          <p className="hero-subtitle text-xl text-white/80 max-w-2xl mx-auto">
            Votre partenaire stratégique multisectoriel en Côte d&apos;Ivoire
          </p>
        </div>
      </section>

      {/* PRÉSENTATION */}
      <section className="py-20">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2B5A] mb-6">
                Qui Sommes-Nous ?
              </h2>
              <div className="gold-line mb-6" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                <strong>MEN AFRICA COMPANY</strong> est une société de droit ivoirien (SARL U) 
                au capital de <strong>5 000 000 FCFA</strong>, dirigée par <strong>M. MENDO GABRIEL ARNOLD</strong>.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nous sommes un groupe multisectoriel opérant dans trois domaines stratégiques : 
                la <strong>Finance et l&apos;Investissement</strong>, l&apos;<strong>Industrie et le BTP</strong>, 
                ainsi que le <strong>Commerce et la Distribution</strong>.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Notre expertise couvre la production de béton manufacturé (poteaux électriques, agglos, 
                pavés, caniveaux, bordures), les travaux de BTP, le courtage bancaire et assurance, 
                ainsi que l&apos;import-export.
              </p>
              <div className="bg-[#F8F9FA] p-6 border-l-4 border-[#B8923B]">
                <p className="text-[#1B2B5A] font-semibold italic text-lg">
                  &quot;Faite briller votre lumière&quot;
                </p>
                <p className="text-gray-500 mt-2">— Notre devise</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#1B2B5A] to-[#2a3f7a] p-8 text-white">
                <h3 className="font-playfair text-2xl font-semibold mb-6">Informations Entreprise</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Building2 className="text-[#B8923B]" size={20} />
                    <div>
                      <p className="text-white/70 text-sm">Forme juridique</p>
                      <p className="font-medium">SARL U</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="text-[#B8923B]" size={20} />
                    <div>
                      <p className="text-white/70 text-sm">Gérant</p>
                      <p className="font-medium">MENDO GABRIEL ARNOLD</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="text-[#B8923B]" size={20} />
                    <div>
                      <p className="text-white/70 text-sm">Capital social</p>
                      <p className="font-medium">5 000 000 FCFA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="text-[#B8923B]" size={20} />
                    <div>
                      <p className="text-white/70 text-sm">RCCM</p>
                      <p className="font-medium">CI-ABJ-03-2024-B13-02779</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/20">
                  <h4 className="font-semibold mb-4">Nos Implantations</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-[#B8923B] font-medium">Siège Social</p>
                      <p className="text-white/70">Cocody, Riviera Palmeraie, non loin de Da Carmen</p>
                    </div>
                    <div>
                      <p className="text-[#B8923B] font-medium">Siège Technique</p>
                      <p className="text-white/70">Yopougon, Cité ADO, Zone Industrielle, Ebimpé</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-[#1B2B5A]/10 flex items-center justify-center mb-6">
                <Eye className="text-[#B8923B]" size={32} />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-[#1B2B5A] mb-4">
                Notre Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Devenir le partenaire de référence en Afrique de l&apos;Ouest pour les entreprises 
                et particuliers recherchant des solutions intégrées en finance, industrie et commerce. 
                Nous aspirons à contribuer au développement économique de la région par notre expertise 
                et notre engagement envers l&apos;excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-[#1B2B5A]/10 flex items-center justify-center mb-6">
                <Target className="text-[#B8923B]" size={32} />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-[#1B2B5A] mb-4">
                Notre Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Accompagner nos clients dans la réalisation de leurs projets en leur offrant 
                des solutions sur mesure, innovantes et de qualité. Nous nous engageons à créer 
                de la valeur pour nos partenaires tout en respectant les normes les plus élevées 
                d&apos;éthique et de professionnalisme.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NOS PÔLES D'ACTIVITÉ */}
      <section className="py-20">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2B5A] mb-4">
              Nos Pôles d&apos;Activité
            </h2>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trois domaines d&apos;expertise complémentaires au service de votre réussite
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
                <Link href={pole.href} className="block bg-white p-8 shadow-lg border border-gray-100 hover:border-[#B8923B] transition-colors group h-full">
                  <div className="w-16 h-16 bg-[#1B2B5A] flex items-center justify-center mb-6 group-hover:bg-[#B8923B] transition-colors">
                    <pole.icon className="text-white" size={32} />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-[#1B2B5A] mb-3">
                    {pole.title}
                  </h3>
                  <p className="text-gray-600">{pole.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="py-20 bg-[#1B2B5A]">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
              Chiffres Clés
            </h2>
            <div className="gold-line mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {chiffres.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#B8923B] mb-2">
                  {item.value}{item.suffix}
                </div>
                <p className="text-white/70">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NOS VALEURS */}
      <section className="py-20">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2B5A] mb-4">
              Nos Valeurs
            </h2>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-[#1B2B5A]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-[#B8923B]" size={32} />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-[#1B2B5A] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1B2B5A] to-[#2a3f7a]">
        <div className="container-premium text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à Collaborer ?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous accompagner.
          </p>
          <Link href="/contact" className="btn-gold">
            Nous Contacter
          </Link>
        </div>
      </section>
    </div>
  );
}