"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Mail, User, Globe } from "lucide-react";

const navigation = [
  { name: "Accueil", href: "/" },
  {
    name: "Finance & Investissement",
    href: "/finance",
    submenu: [
      { name: "Courtage Bancaire", href: "/finance/courtage-bancaire" },
      { name: "Courtage Assurance", href: "/finance/courtage-assurance" },
      { name: "Levée de Fonds", href: "/finance/levee-de-fonds" },
      { name: "Structuration de Projet", href: "/finance/structuration-projet" },
      { name: "Simulateur", href: "/finance/simulateur" },
    ],
  },
  {
    name: "Industrie & Béton",
    href: "/industrie",
    submenu: [
      { name: "Béton Manufacturé", href: "/industrie/beton-manufacture" },
      { name: "Solutions BTP", href: "/industrie/solutions-btp" },
      { name: "Fournitures Techniques", href: "/industrie/fournitures" },
      { name: "Configurateur Béton", href: "/industrie/configurateur" },
    ],
  },
  {
    name: "Commerce & Supply",
    href: "/commerce",
    submenu: [
      { name: "Commerce Général", href: "/commerce/general" },
      { name: "Import / Export", href: "/commerce/import-export" },
      { name: "Distribution", href: "/commerce/distribution" },
    ],
  },
  { name: "À Propos", href: "/a-propos" },
  { name: "Réalisations", href: "/realisations" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar */}
      <div className="bg-[#1B2B5A] text-white py-2 hidden md:block">
        <div className="container-premium flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+22527243364004" className="flex items-center gap-2 hover:text-[#B8923B] transition-colors">
              <Phone size={14} />
              (+225) 27 24 33 64 04
            </a>
            <a href="mailto:contact@menafrica.ci" className="flex items-center gap-2 hover:text-[#B8923B] transition-colors">
              <Mail size={14} />
              contact@menafrica.ci
            </a>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/espace-client" className="flex items-center gap-2 hover:text-[#B8923B] transition-colors">
              <User size={14} />
              Espace Client
            </Link>
            <div className="flex items-center gap-2">
              <Globe size={14} />
              <span>FR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white transition-all duration-300 ${isScrolled ? "shadow-lg py-2" : "py-4"}`}>
        <div className="container-premium flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/logo.jpg" 
              alt="Men Africa Company" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-gray-700 hover:text-[#B8923B] font-medium transition-colors py-2"
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />}
                </Link>

                {/* Submenu */}
                {item.submenu && activeSubmenu === item.name && (
                  <div className="absolute top-full left-0 bg-white shadow-xl border border-gray-100 min-w-[250px] py-2 animate-fade-in">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-6 py-3 text-gray-600 hover:bg-[#F8F9FA] hover:text-[#B8923B] transition-colors"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-gold">
              Demander un Devis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 animate-fade-in">
            <div className="container-premium py-4">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-gray-100 last:border-0">
                  <Link
                    href={item.href}
                    className="block py-3 text-gray-700 font-medium"
                    onClick={() => !item.submenu && setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 pb-3">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block py-2 text-gray-500 hover:text-[#B8923B]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link href="/contact" className="btn-gold w-full text-center block">
                  Demander un Devis
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}