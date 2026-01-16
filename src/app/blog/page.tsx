"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, User, ArrowRight, Search } from "lucide-react";

const categories = ["Tous", "Finance", "Industrie", "Commerce", "Actualités"];

const articles = [
  {
    id: 1,
    title: "Comment obtenir le meilleur taux pour votre crédit entreprise en 2025",
    excerpt: "Découvrez nos conseils d'experts pour négocier les meilleures conditions de financement auprès des banques ivoiriennes.",
    category: "Finance",
    author: "Amadou Koné",
    date: "15 Janvier 2025",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Les tendances du BTP en Côte d'Ivoire : opportunités et défis",
    excerpt: "Analyse du marché de la construction et des matériaux de bâtiment dans un contexte de forte croissance urbaine.",
    category: "Industrie",
    author: "Fatou Diallo",
    date: "12 Janvier 2025",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "Import-Export : nouvelles réglementations douanières 2025",
    excerpt: "Tout ce que vous devez savoir sur les changements réglementaires affectant le commerce international en Afrique de l'Ouest.",
    category: "Commerce",
    author: "Jean-Marc Kouassi",
    date: "10 Janvier 2025",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "Men Africa Company renforce son partenariat avec les banques locales",
    excerpt: "Signature de nouveaux accords de partenariat pour offrir des solutions de financement encore plus avantageuses.",
    category: "Actualités",
    author: "Direction Générale",
    date: "8 Janvier 2025",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    readTime: "3 min",
  },
  {
    id: 5,
    title: "Guide complet : Choisir le bon type de pavés pour votre projet",
    excerpt: "Pavés autobloquants, pavés drainants, pavés décoratifs... Comment faire le bon choix selon vos besoins.",
    category: "Industrie",
    author: "Service Technique",
    date: "5 Janvier 2025",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    readTime: "8 min",
  },
  {
    id: 6,
    title: "Levée de fonds : les 5 erreurs à éviter pour les PME africaines",
    excerpt: "Retour d'expérience sur les pièges courants et les bonnes pratiques pour réussir sa levée de fonds.",
    category: "Finance",
    author: "Amadou Koné",
    date: "2 Janvier 2025",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    readTime: "6 min",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === "Tous" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
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
            Blog & <span className="text-[#B8923B]">Actualités</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Conseils d&apos;experts, analyses sectorielles et actualités de Men Africa Company
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-premium">
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:border-[#B8923B] focus:outline-none"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 font-medium transition-all ${
                    activeCategory === category
                      ? "bg-[#1B2B5A] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Aucun article trouvé pour cette recherche.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-[#B8923B] text-white text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={14} />
                        {article.author}
                      </span>
                    </div>
                    <h2 className="font-playfair text-xl font-semibold text-[#1B2B5A] mb-3 line-clamp-2 group-hover:text-[#B8923B] transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{article.readTime} de lecture</span>
                      <Link
                        href={`/blog/${article.id}`}
                        className="inline-flex items-center gap-2 text-[#B8923B] font-medium text-sm hover:gap-3 transition-all"
                      >
                        Lire la suite
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <button className="btn-outline">
              Charger plus d&apos;articles
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1B2B5A]">
        <div className="container-premium text-center text-white">
          <h2 className="font-playfair text-3xl font-semibold mb-4">
            Restez Informé
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et actualités
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#B8923B]"
            />
            <button type="submit" className="btn-gold whitespace-nowrap">
              S&apos;inscrire
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}