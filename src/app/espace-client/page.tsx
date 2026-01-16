"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Lock, Mail, Eye, EyeOff, ArrowRight, Building2, FileText, MessageSquare, Settings } from "lucide-react";
import Link from "next/link";

export default function EspaceClientPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    company: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'authentification à implémenter avec Supabase
    alert("Fonctionnalité en cours de développement. Contactez-nous pour accéder à votre espace client.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const features = [
    {
      icon: FileText,
      title: "Suivi des Devis",
      description: "Consultez et suivez l'état de vos demandes de devis en temps réel",
    },
    {
      icon: Building2,
      title: "Gestion de Projets",
      description: "Suivez l'avancement de vos projets et accédez aux documents",
    },
    {
      icon: MessageSquare,
      title: "Messagerie Sécurisée",
      description: "Échangez directement avec votre conseiller dédié",
    },
    {
      icon: Settings,
      title: "Documents",
      description: "Accédez à tous vos contrats et factures en un clic",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative py-20 bg-[#1B2B5A]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#B8923B] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#B8923B] rounded-full blur-3xl" />
        </div>
        <div className="container-premium relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-4xl md:text-5xl font-bold mb-4"
          >
            Espace <span className="text-[#B8923B]">Client</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Accédez à votre tableau de bord personnalisé et gérez vos projets en toute simplicité
          </motion.p>
        </div>
      </section>

      {/* LOGIN FORM */}
      <section className="py-16">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-12 shadow-xl border border-gray-100"
            >
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 text-center font-medium transition-all ${
                    isLogin
                      ? "bg-[#1B2B5A] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Connexion
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3 text-center font-medium transition-all ${
                    !isLogin
                      ? "bg-[#1B2B5A] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Inscription
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet
                      </label>
                      <div className="relative">
                        <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:border-[#B8923B] focus:outline-none"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Entreprise
                      </label>
                      <div className="relative">
                        <Building2 size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:border-[#B8923B] focus:outline-none"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse email
                  </label>
                  <div className="relative">
                    <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:border-[#B8923B] focus:outline-none"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-12 py-3 border border-gray-300 focus:border-[#B8923B] focus:outline-none"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {isLogin && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="accent-[#B8923B]" />
                      <span className="text-gray-600">Se souvenir de moi</span>
                    </label>
                    <a href="#" className="text-[#B8923B] hover:underline">
                      Mot de passe oublié ?
                    </a>
                  </div>
                )}

                <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                  {isLogin ? "Se Connecter" : "Créer mon Compte"}
                  <ArrowRight size={18} />
                </button>
              </form>

              <p className="text-center text-gray-500 text-sm mt-6">
                {isLogin ? "Pas encore de compte ?" : "Déjà inscrit ?"}{" "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-[#B8923B] font-medium hover:underline"
                >
                  {isLogin ? "S'inscrire" : "Se connecter"}
                </button>
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="font-playfair text-3xl font-semibold text-[#1B2B5A] mb-4">
                Votre Espace Dédié
              </h2>
              <div className="gold-line mb-8" />
              <p className="text-gray-600 mb-8 leading-relaxed">
                Accédez à un espace personnalisé pour suivre vos projets, gérer vos documents 
                et communiquer directement avec notre équipe.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-[#1B2B5A]/5 flex items-center justify-center shrink-0">
                      <feature.icon size={24} className="text-[#B8923B]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1B2B5A] mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-[#F8F9FA] border-l-4 border-[#B8923B]">
                <p className="text-gray-700">
                  <strong>Besoin d&apos;aide ?</strong> Contactez-nous au{" "}
                  <a href="tel:+2250700000000" className="text-[#B8923B] font-medium">
                    +225 07 00 00 00 00
                  </a>{" "}
                  pour obtenir vos identifiants de connexion.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}