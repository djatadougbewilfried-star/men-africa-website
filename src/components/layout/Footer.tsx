"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Twitter, Instagram, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const { error: supabaseError } = await supabase
        .from("newsletter")
        .insert([{ email }]);

      if (supabaseError) {
        if (supabaseError.code === "23505") {
          setError("Cet email est déjà inscrit.");
        } else {
          throw supabaseError;
        }
      } else {
        setIsSubscribed(true);
        setEmail("");
      }
    } catch (err) {
      setError("Une erreur est survenue.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#1B2B5A] text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="container-premium py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-playfair text-2xl font-semibold mb-2">Restez Informé</h3>
              <p className="text-white/70">Recevez nos dernières actualités et opportunités</p>
            </div>
            {isSubscribed ? (
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle size={20} />
                <span>Merci pour votre inscription !</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <div>
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#B8923B] w-full md:w-80"
                  />
                  {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <>
                      S&apos;inscrire
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-premium py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img 
                src="/logo.jpg" 
                alt="Men Africa Company" 
                className="h-16 w-auto bg-white p-2"
              />
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              Votre partenaire stratégique multisectoriel en Afrique. Finance, Industrie et Commerce au service de votre réussite.
            </p>
            <p className="text-[#B8923B] font-semibold italic mb-6">
              &quot;Faites Briller Votre Lumière&quot;
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-[#B8923B] shrink-0 mt-0.5" />
                <div>
                  <p>(+225) 27 24 33 64 04</p>
                  <p>(+225) 07 57 74 05 96</p>
                  <p>(+225) 07 02 02 01 45</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#B8923B] shrink-0" />
                <span>contact@menafrica.ci</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#B8923B] shrink-0 mt-0.5" />
                <span>Cocody, Riviera Palmeraie<br />21 BP 1831 Abidjan 21</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-[#B8923B] shrink-0" />
                <span>Lun - Ven: 8h00 - 18h00</span>
              </div>
            </div>
          </div>

          {/* Finance */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6">Finance & Investissement</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link href="/finance/courtage-bancaire" className="hover:text-[#B8923B] transition-colors">Courtage Bancaire</Link></li>
              <li><Link href="/finance/courtage-assurance" className="hover:text-[#B8923B] transition-colors">Courtage Assurance</Link></li>
              <li><Link href="/finance/levee-de-fonds" className="hover:text-[#B8923B] transition-colors">Levée de Fonds</Link></li>
              <li><Link href="/finance/structuration-projet" className="hover:text-[#B8923B] transition-colors">Structuration de Projet</Link></li>
              <li><Link href="/finance/simulateur" className="hover:text-[#B8923B] transition-colors">Simulateur</Link></li>
            </ul>
          </div>

          {/* Industrie */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6">Industrie & Béton</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link href="/industrie/beton-manufacture" className="hover:text-[#B8923B] transition-colors">Béton Manufacturé</Link></li>
              <li><Link href="/industrie/solutions-btp" className="hover:text-[#B8923B] transition-colors">Solutions BTP</Link></li>
              <li><Link href="/industrie/fournitures" className="hover:text-[#B8923B] transition-colors">Fournitures Techniques</Link></li>
              <li><Link href="/industrie/configurateur" className="hover:text-[#B8923B] transition-colors">Configurateur Béton</Link></li>
            </ul>
          </div>

          {/* Commerce & Entreprise */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6">Commerce & Supply</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link href="/commerce/general" className="hover:text-[#B8923B] transition-colors">Commerce Général</Link></li>
              <li><Link href="/commerce/import-export" className="hover:text-[#B8923B] transition-colors">Import / Export</Link></li>
              <li><Link href="/commerce/distribution" className="hover:text-[#B8923B] transition-colors">Distribution</Link></li>
            </ul>
            
            <h4 className="font-playfair text-lg font-semibold mb-6 mt-8">L&apos;Entreprise</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link href="/a-propos" className="hover:text-[#B8923B] transition-colors">À Propos</Link></li>
              <li><Link href="/realisations" className="hover:text-[#B8923B] transition-colors">Nos Réalisations</Link></li>
              <li><Link href="/blog" className="hover:text-[#B8923B] transition-colors">Blog & Actualités</Link></li>
              <li><Link href="/contact" className="hover:text-[#B8923B] transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal Info */}
      <div className="border-t border-white/10 py-4">
        <div className="container-premium">
          <div className="text-center text-white/50 text-xs space-y-1">
            <p>RCCM : CI-ABJ-03-2024-B13-02779 | N° CC : 2401009 J | Régime : TEE</p>
            <p>Banque : BNI - Compte N° 000113950008</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-premium py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Men Africa Company. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/mentions-legales" className="text-white/50 hover:text-white text-sm transition-colors">
                Mentions Légales
              </Link>
              <Link href="/confidentialite" className="text-white/50 hover:text-white text-sm transition-colors">
                Confidentialité
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[#B8923B] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[#B8923B] transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[#B8923B] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[#B8923B] transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}