"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, PiggyBank, Calendar, ArrowRight, Info, CheckCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function SimulateurPage() {
  const [formData, setFormData] = useState({
    montant: 10000000,
    duree: 24,
    taux: 8.5,
    type: "amortissable",
  });

  // Calcul du crédit
  const calculateLoan = () => {
    const { montant, duree, taux, type } = formData;
    const tauxMensuel = taux / 100 / 12;

    let mensualite = 0;
    let totalInterets = 0;
    let coutTotal = 0;

    if (type === "amortissable") {
      mensualite = (montant * tauxMensuel * Math.pow(1 + tauxMensuel, duree)) / (Math.pow(1 + tauxMensuel, duree) - 1);
      coutTotal = mensualite * duree;
      totalInterets = coutTotal - montant;
    } else {
      mensualite = montant * tauxMensuel;
      totalInterets = mensualite * duree;
      coutTotal = montant + totalInterets;
    }

    return {
      mensualite: Math.round(mensualite),
      totalInterets: Math.round(totalInterets),
      coutTotal: Math.round(coutTotal),
    };
  };

  const results = calculateLoan();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "type" ? value : Number(value),
    }));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("fr-FR").format(value) + " FCFA";
  };

  return (
    <>
      {/* HERO */}
      <section className="relative py-20 bg-[#1B2B5A]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#B8923B] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#B8923B] rounded-full blur-3xl" />
        </div>
        <div className="container-premium relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <Calculator size={18} className="text-[#B8923B]" />
            <span className="text-sm font-medium">Outil Interactif</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold mb-4"
          >
            Simulateur de <span className="text-[#B8923B]">Financement</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Estimez vos mensualités et le coût total de votre financement en quelques clics
          </motion.p>
        </div>
      </section>

      {/* SIMULATEUR */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-10 shadow-lg"
            >
              <h2 className="font-playfair text-2xl font-semibold text-[#1B2B5A] mb-6">
                Paramètres du Financement
              </h2>

              <div className="space-y-8">
                {/* Montant */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-medium text-gray-700">Montant du prêt</label>
                    <span className="text-[#B8923B] font-semibold">{formatCurrency(formData.montant)}</span>
                  </div>
                  <input
                    type="range"
                    name="montant"
                    min="1000000"
                    max="500000000"
                    step="1000000"
                    value={formData.montant}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#B8923B]"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 Million</span>
                    <span>500 Millions</span>
                  </div>
                </div>

                {/* Durée */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-medium text-gray-700">Durée du prêt</label>
                    <span className="text-[#B8923B] font-semibold">{formData.duree} mois</span>
                  </div>
                  <input
                    type="range"
                    name="duree"
                    min="6"
                    max="84"
                    step="6"
                    value={formData.duree}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#B8923B]"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>6 mois</span>
                    <span>84 mois (7 ans)</span>
                  </div>
                </div>

                {/* Taux */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-medium text-gray-700">Taux d&apos;intérêt annuel</label>
                    <span className="text-[#B8923B] font-semibold">{formData.taux}%</span>
                  </div>
                  <input
                    type="range"
                    name="taux"
                    min="5"
                    max="18"
                    step="0.5"
                    value={formData.taux}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#B8923B]"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5%</span>
                    <span>18%</span>
                  </div>
                </div>

                {/* Type de crédit */}
                <div>
                  <label className="font-medium text-gray-700 block mb-3">Type de crédit</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label
                      className={`flex items-center justify-center p-4 border-2 cursor-pointer transition-all ${
                        formData.type === "amortissable"
                          ? "border-[#B8923B] bg-[#B8923B]/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="type"
                        value="amortissable"
                        checked={formData.type === "amortissable"}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <TrendingUp size={24} className={formData.type === "amortissable" ? "text-[#B8923B] mx-auto mb-2" : "text-gray-400 mx-auto mb-2"} />
                        <span className={formData.type === "amortissable" ? "text-[#1B2B5A] font-medium" : "text-gray-600"}>
                          Amortissable
                        </span>
                      </div>
                    </label>
                    <label
                      className={`flex items-center justify-center p-4 border-2 cursor-pointer transition-all ${
                        formData.type === "infine"
                          ? "border-[#B8923B] bg-[#B8923B]/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="type"
                        value="infine"
                        checked={formData.type === "infine"}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <PiggyBank size={24} className={formData.type === "infine" ? "text-[#B8923B] mx-auto mb-2" : "text-gray-400 mx-auto mb-2"} />
                        <span className={formData.type === "infine" ? "text-[#1B2B5A] font-medium" : "text-gray-600"}>
                          In Fine
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Résultats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Résumé */}
              <div className="bg-[#1B2B5A] p-8 md:p-10 text-white">
                <h2 className="font-playfair text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Calculator size={24} className="text-[#B8923B]" />
                  Résultat de votre simulation
                </h2>

                <div className="space-y-6">
                  <div className="p-6 bg-white/10 rounded">
                    <div className="text-white/70 text-sm mb-1">Mensualité estimée</div>
                    <div className="font-playfair text-4xl font-bold text-[#B8923B]">
                      {formatCurrency(results.mensualite)}
                    </div>
                    <div className="text-white/50 text-sm mt-1">par mois pendant {formData.duree} mois</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded">
                      <div className="text-white/70 text-sm mb-1">Coût total du crédit</div>
                      <div className="font-semibold text-xl">{formatCurrency(results.coutTotal)}</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded">
                      <div className="text-white/70 text-sm mb-1">Total des intérêts</div>
                      <div className="font-semibold text-xl text-[#B8923B]">{formatCurrency(results.totalInterets)}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-white p-6 border border-gray-100 flex gap-4">
                <Info size={24} className="text-[#B8923B] shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#1B2B5A] mb-1">Simulation indicative</h4>
                  <p className="text-gray-600 text-sm">
                    Cette simulation est donnée à titre indicatif. Les conditions réelles dépendent 
                    de votre profil et de nos partenaires bancaires.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-white p-8 border border-gray-100">
                <h3 className="font-playfair text-xl font-semibold text-[#1B2B5A] mb-4">
                  Intéressé par ce financement ?
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle size={18} className="text-[#B8923B]" />
                    Étude gratuite et sans engagement
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle size={18} className="text-[#B8923B]" />
                    Réponse sous 48h
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle size={18} className="text-[#B8923B]" />
                    Accompagnement personnalisé
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="btn-primary flex-1 flex items-center justify-center gap-2">
                    Demander une étude
                    <ArrowRight size={18} />
                  </Link>
                  <a href="tel:+2250700000000" className="btn-outline flex-1 flex items-center justify-center gap-2">
                    <Phone size={18} />
                    Nous appeler
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="py-16">
        <div className="container-premium">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Pourquoi Choisir Men Africa ?</h2>
            <div className="gold-line-center" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1B2B5A]/5 flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={32} className="text-[#B8923B]" />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-[#1B2B5A] mb-2">
                Meilleurs Taux
              </h3>
              <p className="text-gray-600 text-sm">
                Négociation des meilleures conditions auprès de nos 15+ partenaires bancaires
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1B2B5A]/5 flex items-center justify-center mx-auto mb-4">
                <Calendar size={32} className="text-[#B8923B]" />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-[#1B2B5A] mb-2">
                Rapidité
              </h3>
              <p className="text-gray-600 text-sm">
                Déblocage des fonds en 72h après accord de principe
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1B2B5A]/5 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-[#B8923B]" />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-[#1B2B5A] mb-2">
                Accompagnement
              </h3>
              <p className="text-gray-600 text-sm">
                Un conseiller dédié vous accompagne de A à Z dans votre projet
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}