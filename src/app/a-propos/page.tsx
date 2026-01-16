"use client";

import { motion } from "framer-motion";
import { Target, Eye, Award, Users, CheckCircle } from "lucide-react";

const values = [
  { icon: Award, title: "Excellence", description: "Nous visons l'excellence dans chaque projet et chaque interaction." },
  { icon: Users, title: "Partenariat", description: "Nous construisons des relations durables basées sur la confiance." },
  { icon: Target, title: "Innovation", description: "Nous adoptons les meilleures pratiques et technologies." },
  { icon: CheckCircle, title: "Intégrité", description: "Nous agissons avec transparence et honnêteté." },
];

const team = [
  {
    name: "Ibrahim Koné",
    role: "Président Directeur Général",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Aminata Diallo",
    role: "Directrice Finance & Investissement",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Kouamé Assi",
    role: "Directeur Industrie & Béton",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Fatou Bamba",
    role: "Directrice Commerce & Supply",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
];

export default function AboutPage() {
  return (
    <>
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
            À Propos de <span className="text-[#B8923B]">Men Africa</span>
          </motion.h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Découvrez notre histoire, notre vision et les valeurs qui nous guident
          </p>
        </div>
      </section>

      {/* HISTOIRE */}
      <section className="py-20">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-4">Notre Histoire</h2>
              <div className="gold-line mb-8" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fondée en 2009, Men Africa Company est née de la vision d&apos;entrepreneurs ivoiriens 
                déterminés à créer un groupe multisectoriel capable d&apos;accompagner le développement 
                économique de l&apos;Afrique de l&apos;Ouest.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Au fil des années, nous avons développé une expertise reconnue dans trois domaines 
                stratégiques : la finance et l&apos;investissement, l&apos;industrie du béton et le BTP, 
                ainsi que le commerce et l&apos;approvisionnement.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Aujourd&apos;hui, avec plus de 500 projets réalisés et une présence dans 3 pays, 
                Men Africa Company est devenu un acteur incontournable du paysage économique ouest-africain.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=700&fit=crop"
                alt="Men Africa Building"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#B8923B] text-white p-8">
                <div className="font-playfair text-5xl font-bold">15+</div>
                <div className="text-white/80">Années d&apos;Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 shadow-lg">
              <div className="w-16 h-16 bg-[#1B2B5A] flex items-center justify-center mb-6">
                <Eye size={32} className="text-[#B8923B]" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-[#1B2B5A] mb-4">
                Notre Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Être le partenaire stratégique de référence pour les entreprises et investisseurs 
                souhaitant se développer en Afrique, en offrant des solutions intégrées et innovantes 
                dans nos domaines d&apos;expertise.
              </p>
            </div>
            <div className="bg-white p-10 shadow-lg">
              <div className="w-16 h-16 bg-[#1B2B5A] flex items-center justify-center mb-6">
                <Target size={32} className="text-[#B8923B]" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-[#1B2B5A] mb-4">
                Notre Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Accompagner nos clients dans leur croissance en leur fournissant des services 
                de qualité premium, un conseil expert et des solutions sur mesure adaptées 
                aux réalités du marché africain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-20">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Nos Valeurs</h2>
            <div className="gold-line-center mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions et décisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-[#1B2B5A]/5 flex items-center justify-center">
                  <value.icon size={40} className="text-[#B8923B]" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-[#1B2B5A] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section className="py-20 bg-[#1B2B5A]">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-white mb-4">
              Notre Équipe Dirigeante
            </h2>
            <div className="gold-line-center mb-6" />
            <p className="text-white/70 max-w-2xl mx-auto">
              Des experts passionnés au service de votre réussite
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-[#B8923B]/0 group-hover:bg-[#B8923B]/20 transition-all duration-500" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-[#B8923B]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}