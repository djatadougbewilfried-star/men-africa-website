import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section avec image de fond */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="/hero-accueil.jpg"
            alt="Chantier BTP - Men Africa Company"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay sombre pour lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B2B5A]/80 via-[#1B2B5A]/60 to-[#1B2B5A]/90" />
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            MEN AFRICA COMPANY
          </h1>
          <div className="w-32 h-1 bg-[#B8923B] mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-[#B8923B] font-semibold mb-4">
            BTP • BÉTON MANUFACTURÉ • IMPORT-EXPORT
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Votre partenaire de confiance pour tous vos projets de construction en Côte d&apos;Ivoire
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/catalogue"
              className="px-8 py-4 bg-[#B8923B] text-white font-semibold rounded-lg hover:bg-[#9A7B32] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Découvrir nos produits
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1B2B5A] transition-all duration-300"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B5A] mb-4">
              Nos Domaines d&apos;Expertise
            </h2>
            <div className="w-24 h-1 bg-[#B8923B] mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-[#1B2B5A] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#B8923B] transition-colors">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2B5A] mb-4">BTP & Construction</h3>
              <p className="text-gray-600">
                Travaux de génie civil, VRD, terrassement et aménagement urbain avec des équipements de pointe.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-[#1B2B5A] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#B8923B] transition-colors">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2B5A] mb-4">Béton Manufacturé</h3>
              <p className="text-gray-600">
                Production de bordures, pavés, caniveaux, dalots, buses et éléments préfabriqués de qualité.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-[#1B2B5A] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#B8923B] transition-colors">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2B5A] mb-4">Import-Export</h3>
              <p className="text-gray-600">
                Commerce international de matériaux de construction et équipements pour l&apos;Afrique de l&apos;Ouest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Catalogue Aperçu */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B5A] mb-4">
              Notre Catalogue
            </h2>
            <div className="w-24 h-1 bg-[#B8923B] mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme complète de produits en béton manufacturé, 
              fabriqués selon les normes les plus strictes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Bordures", image: "/catalogue/bordure-t1.jpg" },
              { name: "Caniveaux", image: "/catalogue/caniveau-rectangulaire.jpg" },
              { name: "Pavés", image: "/catalogue/pave-i.jpg" },
              { name: "Dalots", image: "/catalogue/dalot-ouvert.jpg" },
            ].map((item) => (
              <Link
                key={item.name}
                href="/catalogue"
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center bg-[#1B2B5A] group-hover:bg-[#B8923B] transition-colors">
                  <h3 className="font-semibold text-white">{item.name}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/catalogue"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1B2B5A] text-white font-semibold rounded-lg hover:bg-[#B8923B] transition-colors"
            >
              Voir tout le catalogue
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Chiffres clés */}
      <section className="py-16 bg-[#1B2B5A]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "Années d'expérience" },
              { number: "500+", label: "Projets réalisés" },
              { number: "50+", label: "Produits catalogue" },
              { number: "100%", label: "Satisfaction client" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold text-[#B8923B] mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B5A] mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#B8923B] text-white font-semibold rounded-lg hover:bg-[#9A7B32] transition-colors"
            >
              Demander un devis
            </Link>
            <a
              href="tel:+2250707020145"
              className="px-8 py-4 bg-[#1B2B5A] text-white font-semibold rounded-lg hover:bg-[#2A3F7A] transition-colors flex items-center justify-center gap-2"
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