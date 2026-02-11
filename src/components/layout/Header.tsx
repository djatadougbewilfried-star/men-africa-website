'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cacher le header sur la page admin
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const navigation = [
    { name: 'Accueil', href: '/' },
    {
      name: 'Finance & Investissement',
      href: '/finance',
      submenu: [
        { name: 'Nos Services', href: '/finance/services' },
        { name: 'Investissements', href: '/finance/investissements' },
      ]
    },
    {
      name: 'Industrie & Béton',
      href: '/industrie',
      submenu: [
        { name: 'Béton Manufacturé', href: '/industrie/beton' },
        { name: 'Catalogue Produits', href: '/catalogue' },
      ]
    },
    {
      name: 'Commerce & Supply',
      href: '/commerce',
      submenu: [
        { name: 'Import-Export', href: '/commerce/import-export' },
        { name: 'Nos Partenaires', href: '/commerce/partenaires' },
      ]
    },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#1B2B5A] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+22527243364 04" className="flex items-center gap-2 hover:text-[#B8923B]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (+225) 27 24 33 64 04
            </a>
            <a href="mailto:MENAFRICA@company-sites.net" className="flex items-center gap-2 hover:text-[#B8923B]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              MENAFRICA@company-sites.net
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/espace-client" className="flex items-center gap-2 hover:text-[#B8923B]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Espace Client
            </Link>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              FR
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image
                src="/logo.jpg"
                alt="Men Africa Company"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-[#1B2B5A] text-lg">Accueil</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 py-2 text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-[#B8923B]'
                      : 'text-gray-700 hover:text-[#B8923B]'
                  }`}
                >
                  {item.name}
                  {item.submenu && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white shadow-lg rounded-lg py-2 min-w-[200px] border">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#B8923B]/10 hover:text-[#B8923B]"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden lg:block px-6 py-3 bg-[#B8923B] text-white font-semibold rounded-lg hover:bg-[#9A7B32] transition-colors"
          >
            DEMANDER UN DEVIS
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-3 text-gray-700 hover:text-[#B8923B] font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-2 text-sm text-gray-600 hover:text-[#B8923B]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block mt-4 px-6 py-3 bg-[#B8923B] text-white font-semibold rounded-lg text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              DEMANDER UN DEVIS
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}