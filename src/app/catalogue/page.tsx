'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Types
interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  dimensions?: string;
  image: string;
  specifications?: string[];
}

// Données du catalogue
const categories = [
  { id: 'all', name: 'Tous les produits', icon: '📦' },
  { id: 'bordures', name: 'Bordures', icon: '🧱' },
  { id: 'caniveaux', name: 'Caniveaux', icon: '🌊' },
  { id: 'paves', name: 'Pavés', icon: '🔲' },
  { id: 'dalots', name: 'Dalots', icon: '🚰' },
  { id: 'buses', name: 'Buses', icon: '⭕' },
  { id: 'autres', name: 'Autres produits', icon: '🏗️' },
];

const products: Product[] = [
  // Bordures
  {
    id: 'bordure-t1',
    name: 'Bordure T1',
    category: 'bordures',
    description: 'Bordure de trottoir type T1, idéale pour la délimitation des voiries urbaines.',
    dimensions: '100 x 12 x 25 cm',
    image: '/catalogue/bordure-t1.jpg',
    specifications: ['Résistance élevée', 'Finition lisse', 'Conforme aux normes']
  },
  {
    id: 'bordure-t2',
    name: 'Bordure T2',
    category: 'bordures',
    description: 'Bordure de trottoir type T2, pour séparation chaussée/trottoir.',
    dimensions: '100 x 15 x 25 cm',
    image: '/catalogue/bordure-t2.jpg',
    specifications: ['Grande résistance', 'Usage intensif', 'Durabilité garantie']
  },
  {
    id: 'bordure-t3',
    name: 'Bordure T3',
    category: 'bordures',
    description: 'Bordure de trottoir type T3, modèle renforcé pour zones à fort trafic.',
    dimensions: '100 x 17 x 28 cm',
    image: '/catalogue/bordure-t3.jpg',
    specifications: ['Extra résistant', 'Zones industrielles', 'Haute durabilité']
  },
  {
    id: 'bordure-i1',
    name: 'Bordure I1',
    category: 'bordures',
    description: 'Bordure franchissable type I1 pour entrées de garage.',
    dimensions: '100 x 20 x 10 cm',
    image: '/catalogue/bordure-i1.jpg',
    specifications: ['Franchissable', 'Entrées véhicules', 'Profil bas']
  },
  {
    id: 'bordure-i2',
    name: 'Bordure I2',
    category: 'bordures',
    description: 'Bordure franchissable type I2 pour accès PMR.',
    dimensions: '100 x 22 x 12 cm',
    image: '/catalogue/bordure-i2.jpg',
    specifications: ['Accès PMR', 'Pente douce', 'Normes accessibilité']
  },
  {
    id: 'bordure-cs1',
    name: 'Bordure CS1',
    category: 'bordures',
    description: 'Bordure caniveau CS1 avec fil d\'eau intégré.',
    dimensions: '100 x 25 x 30 cm',
    image: '/catalogue/bordure-cs1.jpg',
    specifications: ['Fil d\'eau intégré', 'Drainage efficace', 'Double fonction']
  },
  
  // Caniveaux
  {
    id: 'caniveau-rectangulaire',
    name: 'Caniveau Rectangulaire',
    category: 'caniveaux',
    description: 'Caniveau en U pour évacuation des eaux pluviales.',
    dimensions: '100 x 30 x 30 cm',
    image: '/catalogue/caniveau-rectangulaire.jpg',
    specifications: ['Section rectangulaire', 'Haute capacité', 'Résistant']
  },
  {
    id: 'caniveau-trapezoidale',
    name: 'Caniveau Trapézoïdal',
    category: 'caniveaux',
    description: 'Caniveau trapézoïdal pour meilleur écoulement.',
    dimensions: '100 x 40 x 35 cm',
    image: '/catalogue/caniveau-trapezoidale.jpg',
    specifications: ['Forme optimisée', 'Écoulement rapide', 'Grande section']
  },
  {
    id: 'caniveau-cc1',
    name: 'Caniveau CC1',
    category: 'caniveaux',
    description: 'Caniveau couvert type CC1 avec grille.',
    dimensions: '100 x 25 x 25 cm',
    image: '/catalogue/caniveau-cc1.jpg',
    specifications: ['Avec grille', 'Sécurisé', 'Piéton compatible']
  },
  {
    id: 'caniveau-cc2',
    name: 'Caniveau CC2',
    category: 'caniveaux',
    description: 'Caniveau couvert type CC2 grande capacité.',
    dimensions: '100 x 35 x 35 cm',
    image: '/catalogue/caniveau-cc2.jpg',
    specifications: ['Grande capacité', 'Couvert sécurisé', 'Usage routier']
  },
  
  // Pavés
  {
    id: 'pave-autobloquant',
    name: 'Pavé Autobloquant',
    category: 'paves',
    description: 'Pavé autobloquant classique pour allées et parkings.',
    dimensions: '20 x 10 x 6 cm',
    image: '/catalogue/pave-autobloquant.jpg',
    specifications: ['Autobloquant', 'Facile à poser', 'Démontable']
  },
  {
    id: 'pave-i',
    name: 'Pavé en I',
    category: 'paves',
    description: 'Pavé en forme de I pour zones de stationnement.',
    dimensions: '20 x 16,5 x 8 cm',
    image: '/catalogue/pave-i.jpg',
    specifications: ['Forme I', 'Haute résistance', 'Trafic lourd']
  },
  {
    id: 'pave-s',
    name: 'Pavé en S',
    category: 'paves',
    description: 'Pavé en forme de S pour imbrication parfaite.',
    dimensions: '22 x 11 x 8 cm',
    image: '/catalogue/pave-s.jpg',
    specifications: ['Imbrication parfaite', 'Stabilité maximale', 'Esthétique']
  },
  {
    id: 'pave-hexagonal',
    name: 'Pavé Hexagonal',
    category: 'paves',
    description: 'Pavé hexagonal décoratif pour espaces verts.',
    dimensions: '24 x 24 x 6 cm',
    image: '/catalogue/pave-hexagonal.jpg',
    specifications: ['Design original', 'Espaces verts', 'Décoratif']
  },
  {
    id: 'pave-carre',
    name: 'Pavé Carré',
    category: 'paves',
    description: 'Pavé carré standard multi-usage.',
    dimensions: '20 x 20 x 6 cm',
    image: '/catalogue/pave-carre.jpg',
    specifications: ['Polyvalent', 'Pose simple', 'Économique']
  },
  
  // Dalots
  {
    id: 'dalot-ouvert',
    name: 'Dalot Ouvert',
    category: 'dalots',
    description: 'Dalot ouvert pour franchissement de fossés.',
    dimensions: '100 x 50 x 50 cm',
    image: '/catalogue/dalot-ouvert.jpg',
    specifications: ['Grande section', 'Franchissement routier', 'Robuste']
  },
  {
    id: 'dalot-ferme',
    name: 'Dalot Fermé',
    category: 'dalots',
    description: 'Dalot fermé pour passages souterrains.',
    dimensions: '100 x 60 x 60 cm',
    image: '/catalogue/dalot-ferme.jpg',
    specifications: ['Entièrement fermé', 'Passage couvert', 'Haute capacité']
  },
  {
    id: 'dalot-100x100',
    name: 'Dalot 100x100',
    category: 'dalots',
    description: 'Dalot grande section pour gros débits.',
    dimensions: '100 x 100 x 100 cm',
    image: '/catalogue/dalot-100x100.jpg',
    specifications: ['Très grande section', 'Gros débits', 'Ouvrages d\'art']
  },
  {
    id: 'dalot-80x80',
    name: 'Dalot 80x80',
    category: 'dalots',
    description: 'Dalot section moyenne pour routes secondaires.',
    dimensions: '100 x 80 x 80 cm',
    image: '/catalogue/dalot-80x80.jpg',
    specifications: ['Section moyenne', 'Routes secondaires', 'Polyvalent']
  },
  
  // Buses
  {
    id: 'buse-300',
    name: 'Buse Ø300',
    category: 'buses',
    description: 'Buse circulaire diamètre 300mm.',
    dimensions: 'Ø 300 mm x 100 cm',
    image: '/catalogue/buse-300.jpg',
    specifications: ['Petit diamètre', 'Évacuation légère', 'Économique']
  },
  {
    id: 'buse-500',
    name: 'Buse Ø500',
    category: 'buses',
    description: 'Buse circulaire diamètre 500mm.',
    dimensions: 'Ø 500 mm x 100 cm',
    image: '/catalogue/buse-500.jpg',
    specifications: ['Diamètre moyen', 'Usage courant', 'Polyvalent']
  },
  {
    id: 'buse-800',
    name: 'Buse Ø800',
    category: 'buses',
    description: 'Buse circulaire diamètre 800mm pour gros débits.',
    dimensions: 'Ø 800 mm x 100 cm',
    image: '/catalogue/buse-800.jpg',
    specifications: ['Grand diamètre', 'Fort débit', 'Infrastructure']
  },
  {
    id: 'buse-1000',
    name: 'Buse Ø1000',
    category: 'buses',
    description: 'Buse circulaire diamètre 1000mm.',
    dimensions: 'Ø 1000 mm x 100 cm',
    image: '/catalogue/buse-1000.jpg',
    specifications: ['Très grand diamètre', 'Collecteurs', 'Ouvrages majeurs']
  },
  
  // Autres produits
  {
    id: 'dalle-gazon',
    name: 'Dalle Gazon',
    category: 'autres',
    description: 'Dalle alvéolée pour parking enherbé.',
    dimensions: '60 x 40 x 10 cm',
    image: '/catalogue/dalle-gazon.jpg',
    specifications: ['Alvéolée', 'Végétalisable', 'Écologique']
  },
  {
    id: 'hourdis',
    name: 'Hourdis',
    category: 'autres',
    description: 'Hourdis en béton pour planchers.',
    dimensions: '60 x 20 x 16 cm',
    image: '/catalogue/hourdis.jpg',
    specifications: ['Planchers', 'Léger', 'Isolation']
  },
  {
    id: 'agglos-creux',
    name: 'Agglos Creux',
    category: 'autres',
    description: 'Parpaings creux pour construction.',
    dimensions: '40 x 20 x 20 cm',
    image: '/catalogue/agglos-creux.jpg',
    specifications: ['Construction', 'Économique', 'Polyvalent']
  },
  {
    id: 'agglos-plein',
    name: 'Agglos Plein',
    category: 'autres',
    description: 'Parpaings pleins haute résistance.',
    dimensions: '40 x 20 x 20 cm',
    image: '/catalogue/agglos-plein.jpg',
    specifications: ['Haute résistance', 'Murs porteurs', 'Durabilité']
  },
  {
    id: 'regard-beton',
    name: 'Regard Béton',
    category: 'autres',
    description: 'Regard de visite préfabriqué.',
    dimensions: '50 x 50 x 50 cm',
    image: '/catalogue/regard-beton.jpg',
    specifications: ['Préfabriqué', 'Accès réseaux', 'Standard']
  },
];

export default function CataloguePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrage des produits
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Compteur par catégorie
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return products.length;
    return products.filter(p => p.category === categoryId).length;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#1B2B5A] text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/hero-industrie.jpg')" }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Catalogue Produits
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Découvrez notre gamme complète de produits en béton manufacturé, 
            fabriqués selon les normes les plus strictes pour garantir qualité et durabilité.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-[#B8923B] px-4 py-2 rounded-full">+50 Produits</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Qualité Certifiée</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Livraison Côte d&apos;Ivoire</span>
          </div>
        </div>
      </section>

      {/* Barre de recherche et filtres */}
      <section className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Recherche */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8923B] focus:border-transparent"
              />
              <svg 
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Compteur résultats */}
            <p className="text-gray-600">
              <span className="font-semibold text-[#1B2B5A]">{filteredProducts.length}</span> produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Catégories */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-bold text-[#1B2B5A] mb-4">Catégories</h2>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                      selectedCategory === category.id
                        ? 'bg-[#B8923B] text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{category.icon}</span>
                      <span className="text-sm font-medium">{category.name}</span>
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      selectedCategory === category.id
                        ? 'bg-white/20'
                        : 'bg-gray-200'
                    }`}>
                      {getCategoryCount(category.id)}
                    </span>
                  </button>
                ))}
              </nav>

              {/* CTA Devis */}
              <div className="mt-6 p-4 bg-[#1B2B5A] rounded-lg text-white text-center">
                <p className="text-sm mb-3">Besoin d&apos;un devis personnalisé ?</p>
                <Link
                  href="/contact"
                  className="block w-full bg-[#B8923B] hover:bg-[#9A7B32] py-2 rounded-lg font-semibold transition-colors"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </aside>

          {/* Grille de produits */}
          <main className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucun produit trouvé</h3>
                <p className="text-gray-500">Essayez avec d&apos;autres termes de recherche</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id}
                    className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    {/* Image */}
                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#1B2B5A] text-white text-xs px-3 py-1 rounded-full capitalize">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-[#1B2B5A] mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Dimensions */}
                      {product.dimensions && (
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                          <span>{product.dimensions}</span>
                        </div>
                      )}

                      {/* Spécifications */}
                      {product.specifications && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.specifications.map((spec, index) => (
                            <span 
                              key={index}
                              className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Bouton */}
                      <Link
                        href={`/contact?produit=${encodeURIComponent(product.name)}`}
                        className="w-full block text-center bg-[#B8923B] hover:bg-[#9A7B32] text-white py-2 rounded-lg font-medium transition-colors"
                      >
                        Demander un devis
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Section informations */}
      <section className="bg-[#1B2B5A] text-white py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-[#B8923B] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Qualité Garantie</h3>
              <p className="text-gray-300">
                Tous nos produits sont fabriqués selon les normes en vigueur et contrôlés rigoureusement.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#B8923B] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Production Rapide</h3>
              <p className="text-gray-300">
                Capacité de production importante pour répondre à vos délais les plus serrés.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#B8923B] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Livraison Nationale</h3>
              <p className="text-gray-300">
                Livraison sur toute la Côte d&apos;Ivoire avec notre flotte de véhicules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1B2B5A] mb-4">
            Un projet ? Une commande ?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Notre équipe commerciale est à votre disposition pour vous accompagner 
            dans le choix des produits adaptés à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#B8923B] hover:bg-[#9A7B32] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contactez-nous
            </Link>
            <a
              href="tel:+2250707020145"
              className="inline-flex items-center justify-center gap-2 bg-[#1B2B5A] hover:bg-[#152245] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              07 07 02 01 45
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}