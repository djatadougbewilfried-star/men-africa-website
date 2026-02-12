"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amadou Koné",
    role: "Directeur Général",
    company: "SIMAT Construction",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Men Africa Company a transformé notre approche du financement de projets. Leur expertise en courtage bancaire nous a permis d'obtenir des conditions exceptionnelles pour notre expansion.",
  },
  {
    id: 2,
    name: "Fatou Diallo",
    role: "PDG",
    company: "Import Plus CI",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face",
    content: "La qualité du béton manufacturé et le service client irréprochable font de Men Africa un partenaire de confiance. Nous collaborons depuis 5 ans avec une satisfaction totale.",
  },
  {
    id: 3,
    name: "Jean-Marc Kouassi",
    role: "Directeur des Opérations",
    company: "Logistique Express",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Leur service d'import-export est remarquable. Réactivité, professionnalisme et tarifs compétitifs. Men Africa Company est devenu notre partenaire logistique principal.",
  },
  {
    id: 4,
    name: "Marie Touré",
    role: "Responsable Financier",
    company: "Groupe Hévéa",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    content: "L'accompagnement pour notre levée de fonds a été exceptionnel. Une équipe à l'écoute qui comprend vraiment les enjeux des entreprises africaines.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="container-premium">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Ce Que Disent Nos Clients</h2>
          <div className="gold-line-center mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            La confiance de nos partenaires est notre plus grande fierté. Découvrez leurs témoignages.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#B8923B] flex items-center justify-center">
            <Quote size={32} className="text-white" />
          </div>

          {/* Testimonial Card */}
          <div className="bg-white p-8 md:p-12 pt-16 shadow-lg">
            <div className="text-center">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </p>

              <div className="flex flex-col items-center">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={150}
                  height={150}
                  unoptimized
                  className="w-20 h-20 rounded-full object-cover border-4 border-[#B8923B] mb-4"
                />
                <h4 className="font-playfair text-xl font-semibold text-[#1B2B5A]">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-[#B8923B] font-medium">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 border-2 border-[#1B2B5A] flex items-center justify-center text-[#1B2B5A] hover:bg-[#1B2B5A] hover:text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[#B8923B] w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 border-2 border-[#1B2B5A] flex items-center justify-center text-[#1B2B5A] hover:bg-[#1B2B5A] hover:text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}