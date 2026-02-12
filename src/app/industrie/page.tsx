'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Factory, 
  Ruler, 
  Shield, 
  Truck, 
  CheckCircle,
  ChevronRight,
  Phone,
  Building2,
  Zap,
  Droplets,
  Grid3X3,
  Fence,
  CircleDot,
  Box,
  Cylinder,
  Hexagon,
  Triangle,
  Square
} from 'lucide-react'

const categories = [
  { id: 'all', name: 'Tous les produits', icon: Grid3X3 },
  { id: 'bordures', name: 'Bordures', icon: Fence },
  { id: 'caniveaux', name: 'Caniveaux', icon: Droplets },
  { id: 'poteaux', name: 'Poteaux', icon: Zap },
  { id: 'autres', name: 'Autres produits', icon: Box },
]

const products = [
  // BORDURES
  {
    id: 1,
    name: 'Bordure ARRASÉE',
    category: 'bordures',
    image: '/catalogue/bordures-arrasee-a1.jpg',
    dimensions: ['6x20x60', '8x20x100', '12x20x100'],
    description: 'Bordure pour parc de stationnement, allées et terrains de sport.',
    usage: 'Stationnement, Allées, Terrains de sport'
  },
  {
    id: 2,
    name: 'Bordure A1',
    category: 'bordures',
    image: '/catalogue/bordures-arrasee-a1.jpg',
    dimensions: ['20x25x50'],
    description: 'Bordures d\'accotement franchissables de type A1.',
    usage: 'Accotements routiers'
  },
  {
    id: 3,
    name: 'Bordure A2',
    category: 'bordures',
    image: '/catalogue/bordures-a2.jpg',
    dimensions: ['18x25x100', '20x25x100'],
    description: 'Bordures d\'accotement franchissables de type A2.',
    usage: 'Accotements routiers'
  },
  {
    id: 4,
    name: 'Bordure T1 / T2',
    category: 'bordures',
    image: '/catalogue/bordures-t1-t2.jpg',
    dimensions: ['T1: 15x25x100', 'T2: 20x28x100', 'T5: 30x35x100'],
    description: 'Bordures de trottoir surélevé, disponibles en plusieurs tailles.',
    usage: 'Trottoirs surélevés'
  },
  {
    id: 5,
    name: 'Bordure CS (Caniveau)',
    category: 'bordures',
    image: '/catalogue/bordures-cs.jpg',
    dimensions: ['CS1: 20x12x50', 'CS2: 25x13.5x50', 'CS3: 25x16.5x50'],
    description: 'Caniveaux à simple pente, utilisés avec bordures type A ou T. CS1 et CS2 sont les plus fréquemment utilisés.',
    usage: 'Évacuation des eaux'
  },
  {
    id: 6,
    name: 'Bordure P (Trottoir)',
    category: 'bordures',
    image: '/catalogue/bordures-p.jpg',
    dimensions: ['P1: 12x25x100', 'P2: 15x25x100', 'P3: 20x25x100'],
    description: 'Bordures de trottoir standard.',
    usage: 'Trottoirs urbains'
  },
  {
    id: 7,
    name: 'Bordure CC',
    category: 'bordures',
    image: '/catalogue/bordures-cc.jpg',
    dimensions: ['CC1: 25x17x100', 'CC2: 25x20x100'],
    description: 'Caniveaux à simple pente de grande capacité.',
    usage: 'Évacuation des eaux pluviales'
  },
  // CANIVEAUX
  {
    id: 8,
    name: 'Caniveau Rectangulaire',
    category: 'caniveaux',
    image: '/catalogue/caniveau-rectangulaire.jpg',
    dimensions: ['40x40x200', '50x50x200', '60x60x200', '80x80x100', '100x100x200'],
    description: 'Caniveaux rectangulaires préfabriqués pour l\'évacuation des eaux.',
    usage: 'Drainage urbain et routier'
  },
  {
    id: 9,
    name: 'Caniveau Trapézoïdal',
    category: 'caniveaux',
    image: '/catalogue/caniveau-trapez.jpg',
    dimensions: ['Sur mesure'],
    description: 'Caniveaux de forme trapézoïdale, fabriqués selon les spécifications du projet.',
    usage: 'Drainage grande capacité'
  },
  {
    id: 10,
    name: 'Dalot',
    category: 'caniveaux',
    image: '/catalogue/dalot.jpg',
    dimensions: ['Dimensions sur demande'],
    description: 'Ouvrages hydrauliques pour le passage des eaux sous les voies.',
    usage: 'Traversées routières'
  },
  {
    id: 11,
    name: 'Buse',
    category: 'caniveaux',
    image: '/catalogue/buse.jpg',
    dimensions: ['Différents diamètres disponibles'],
    description: 'Conduites en béton pour l\'évacuation des eaux.',
    usage: 'Canalisation souterraine'
  },
  // POTEAUX
  {
    id: 12,
    name: 'Poteau Électrique',
    category: 'poteaux',
    image: '/catalogue/poteau-electrique.jpg',
    dimensions: ['9m à 14m de hauteur', 'Charges: 200 à 1600 daN'],
    description: 'Poteaux en béton armé pour lignes électriques. Disponibles en plusieurs hauteurs et capacités de charge.',
    usage: 'Réseaux électriques BT/MT'
  },
  // AUTRES PRODUITS
  {
    id: 13,
    name: 'Agglos',
    category: 'autres',
    image: '/catalogue/agglos.jpg',
    dimensions: ['Dimensions standard'],
    description: 'Blocs de béton creux pour la construction de murs et cloisons.',
    usage: 'Construction de bâtiments'
  },
  {
    id: 14,
    name: 'Claustra',
    category: 'autres',
    image: '/catalogue/claustra.jpg',
    dimensions: ['Dimensions variées'],
    description: 'Éléments décoratifs ajourés en béton pour clôtures et façades.',
    usage: 'Décoration, Clôtures'
  },
  {
    id: 15,
    name: 'Pavés',
    category: 'autres',
    image: '/catalogue/paves.jpg',
    dimensions: ['Différentes formes et tailles'],
    description: 'Pavés autobloquants en béton pour revêtement de sol extérieur.',
    usage: 'Cours, Allées, Parkings'
  },
  {
    id: 16,
    name: 'Séparateur de Chaussée',
    category: 'autres',
    image: '/catalogue/separateur-chaussee.jpg',
    dimensions: ['Dimensions réglementaires'],
    description: 'Éléments de sécurité routière pour séparer les voies de circulation.',
    usage: 'Sécurité routière'
  },
  {
    id: 17,
    name: 'Tétrapode',
    category: 'autres',
    image: '/catalogue/tetrapode.jpg',
    dimensions: ['Plusieurs tonnages disponibles'],
    description: 'Blocs en béton pour la protection des côtes et ouvrages maritimes.',
    usage: 'Protection côtière'
  },
]

const stats = [
  { value: '17+', label: 'Types de produits' },
  { value: '50+', label: 'Références disponibles' },
  { value: '100%', label: 'Béton de qualité' },
  { value: '24/48h', label: 'Délai de livraison' },
]

const advantages = [
  {
    icon: Shield,
    title: 'Qualité Certifiée',
    description: 'Produits conformes aux normes en vigueur, fabriqués avec des matériaux de première qualité.'
  },
  {
    icon: Factory,
    title: 'Production Locale',
    description: 'Site de production à Yopougon Ebimpé, garantissant disponibilité et réactivité.'
  },
  {
    icon: Truck,
    title: 'Livraison Rapide',
    description: 'Livraison sur chantier dans tout Abidjan et en Côte d\'Ivoire.'
  },
  {
    icon: Ruler,
    title: 'Sur Mesure',
    description: 'Fabrication de produits aux dimensions spécifiques selon vos besoins.'
  },
]

export default function IndustriePage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B2B5A] to-[#2a3f7a]" />
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/realisations/site-production-2.jpg"
            alt="Site de production"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-[#B8923B]/20 border border-[#B8923B] rounded-full text-[#B8923B] text-sm font-medium mb-6">
              Pôle Industrie & Béton Manufacturé
            </span>
            <h1 className="hero-title font-playfair text-4xl md:text-6xl font-bold mb-6">
              Produits Béton de <span className="hero-gold">Qualité Supérieure</span>
            </h1>
            <p className="hero-subtitle text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              MEN AFRICA COMPANY, votre partenaire de confiance pour tous vos besoins en béton manufacturé. 
              Production locale à Yopougon, livraison dans toute la Côte d&apos;Ivoire.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#B8923B] text-white rounded-lg font-semibold hover:bg-[#9a7a31] transition-colors"
              >
                Demander un Devis
              </Link>
              <a
                href="tel:+2250757740596"
                className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Appeler Maintenant
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1B2B5A] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#B8923B]">{stat.value}</div>
                <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Site de Production */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#B8923B] font-medium">Notre Infrastructure</span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2B5A] mt-2 mb-6">
                Site de Production Moderne
              </h2>
              <p className="text-gray-600 mb-6">
                Notre site de production situé à <strong>Yopougon, Cité ADO, Zone Industrielle d&apos;Ebimpé</strong> est 
                équipé de moules performants pour la fabrication de tous types de produits en béton manufacturé.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Moules d\'agglos de haute précision',
                  'Moules de poteaux électriques',
                  'Moules de caniveaux (toutes dimensions)',
                  'Moules de claustras décoratifs',
                  'Équipements de contrôle qualité'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#B8923B] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4 p-4 bg-[#1B2B5A]/5 rounded-lg">
                <Building2 className="w-10 h-10 text-[#B8923B]" />
                <div>
                  <p className="font-semibold text-[#1B2B5A]">Siège Technique</p>
                  <p className="text-gray-600 text-sm">Yopougon, Cité ADO, Zone Industrielle, Ebimpé</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/realisations/site-production-1.jpg"
                  alt="Site de production"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden mt-8">
                <Image
                  src="/realisations/site-production-2.jpg"
                  alt="Production béton"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Catalogue Produits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#B8923B] font-medium">Notre Gamme</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2B5A] mt-2 mb-4">
              Catalogue Produits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme complète de produits en béton manufacturé, 
              fabriqués selon les normes de qualité les plus strictes.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#1B2B5A] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.name}
                </button>
              )
            })}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-[#1B2B5A] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Dimensions</p>
                    <div className="flex flex-wrap gap-2">
                      {product.dimensions.map((dim, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {dim}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-xs text-[#B8923B] font-medium">{product.usage}</span>
                    <Link
                      href="/contact"
                      className="flex items-center gap-1 text-[#1B2B5A] font-medium text-sm hover:text-[#B8923B] transition-colors"
                    >
                      Devis <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-[#1B2B5A]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
              Pourquoi Nous Choisir ?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              MEN AFRICA COMPANY s&apos;engage à vous fournir des produits de qualité supérieure 
              avec un service irréprochable.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, index) => {
              const Icon = adv.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#B8923B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#B8923B]" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{adv.title}</h3>
                  <p className="text-gray-400 text-sm">{adv.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#B8923B] to-[#d4a94a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Besoin d&apos;un Devis Personnalisé ?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contactez notre équipe commerciale pour obtenir un devis adapté à votre projet.
            Livraison possible dans toute la Côte d&apos;Ivoire.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-[#1B2B5A] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Demander un Devis Gratuit
            </Link>
            <a
              href="https://wa.me/2250757740596"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20b858] transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
