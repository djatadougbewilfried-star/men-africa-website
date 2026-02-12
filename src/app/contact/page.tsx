"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2, Building2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const { error: supabaseError } = await supabase
        .from("contacts")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            service: formData.service,
            message: formData.message,
          },
        ]);

      if (supabaseError) throw supabaseError;

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* HERO CONTACT */}
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
            Contactez-<span className="hero-gold">Nous</span>
          </motion.h1>
          <p className="hero-subtitle text-xl text-white/80 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-20">
        <div className="container-premium">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-playfair text-2xl font-semibold text-[#1B2B5A] mb-6">
                Nos Coordonnées
              </h2>
              <div className="gold-line mb-8" />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1B2B5A]/5 flex items-center justify-center shrink-0">
                    <Phone className="text-[#B8923B]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B2B5A] mb-1">Téléphone</h3>
                    <p className="text-gray-600">(+225) 27 24 33 64 04</p>
                    <p className="text-gray-600">(+225) 07 57 74 05 96</p>
                    <p className="text-gray-600">(+225) 07 02 02 01 45</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1B2B5A]/5 flex items-center justify-center shrink-0">
                    <Mail className="text-[#B8923B]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B2B5A] mb-1">Email</h3>
                    <p className="text-gray-600">MENAFRICA@company-sites.net</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1B2B5A]/5 flex items-center justify-center shrink-0">
                    <MapPin className="text-[#B8923B]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B2B5A] mb-1">Siège Social</h3>
                    <p className="text-gray-600">
                      Cocody, Riviera Palmeraie<br />
                      21 BP 1831 Abidjan 21<br />
                      Côte d&apos;Ivoire
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1B2B5A]/5 flex items-center justify-center shrink-0">
                    <Building2 className="text-[#B8923B]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B2B5A] mb-1">Siège Technique</h3>
                    <p className="text-gray-600">
                      Yopougon, Cité ADO<br />
                      Zone Industrielle, Ebimpé<br />
                      Côte d&apos;Ivoire
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1B2B5A]/5 flex items-center justify-center shrink-0">
                    <Clock className="text-[#B8923B]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B2B5A] mb-1">Horaires</h3>
                    <p className="text-gray-600">Lun - Ven: 8h00 - 18h00</p>
                    <p className="text-gray-600">Sam: 9h00 - 13h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 shadow-lg border border-gray-100">
                <h2 className="font-playfair text-2xl font-semibold text-[#1B2B5A] mb-2">
                  Envoyez-nous un Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                    <h3 className="font-playfair text-2xl font-semibold text-[#1B2B5A] mb-2">
                      Message Envoyé !
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-[#B8923B] font-medium hover:underline"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded">
                        {error}
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 focus:border-[#B8923B] focus:outline-none transition-colors"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 focus:border-[#B8923B] focus:outline-none transition-colors"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 focus:border-[#B8923B] focus:outline-none transition-colors"
                          placeholder="+225 00 00 00 00 00"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Entreprise
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 focus:border-[#B8923B] focus:outline-none transition-colors"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service concerné *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:border-[#B8923B] focus:outline-none transition-colors bg-white"
                      >
                        <option value="">Sélectionnez un service</option>
                        <option value="finance">Finance et Investissement</option>
                        <option value="industrie">Industrie et Béton</option>
                        <option value="commerce">Commerce et Supply</option>
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-[#B8923B] focus:outline-none transition-colors resize-none"
                        placeholder="Décrivez votre projet ou votre demande..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Envoyer le Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}