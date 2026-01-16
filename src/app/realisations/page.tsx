"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";

const categories = ["Tous", "Finance", "Industrie", "Commerce"];

const projects = [
  {
    id: 1,
    title: "Financement Centre Commercial Playce",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=600&h=400&fit=crop",
    description: "Structuration du financement pour un centre commercial de 25 000 m²",
    value: "15 Milliards FCFA",
  },
  {
    id: 2,
    title: "Construction Résidence Les Jardins",
    category: "Industrie",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    description: "Fourniture de 50 000 m² de pavés et béton manufacturé",
    value: "850 Millions FCFA",
  },
  {
    id: 3,
    title: "Import Équipements Industriels",
    category: "Commerce",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    description: "Import de machines industrielles depuis l'Europe",
    value: "2.5 Milliards FCFA",
  },
  {
    id: 4,
    title: "Levée de Fonds Startup Tech",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    description: "Accompagnement levée de fonds Série A",
    value: "3 Milliards FCFA",
  },
  {
    id: 5,
    title: "Aménagement Zone Industrielle",
    category: "Industrie",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    description: "VRD et pavage de 15 hectares de zone industrielle",
    value: "1.2 Milliards FCFA",
  },
  {
    id: 6,
    title: "Distribution Matériel Agricole",
    category: "Commerce",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop",
    description: "Fourniture de tracteurs et équipements agricoles",
    value: "4 Milliards FCFA",
  },
];

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects =
    activeCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
            Nos <span className="text-[#B8923B]">Réalisations</span>
          </motion.h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Découvrez nos projets phares et success stories
          </p>
        </div>
      </section>

      {/* FILTER & PROJECTS */}
      <section className="py-20">
        <div className="container-premium">
          {/* Filter */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Filter size={20} className="text-gray-400" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 font-medium transition-all ${
                  activeCategory === category
                    ? "bg-[#1B2B5A] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#B8923B] text-white text-xs font-medium">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-lg font-semibold text-[#1B2B5A] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#B8923B] font-semibold">{project.value}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}