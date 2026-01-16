export default function ConfidentialitePage() {
  return (
    <>
      <section className="py-20 bg-[#1B2B5A]">
        <div className="container-premium text-center text-white">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Politique de <span className="text-[#B8923B]">Confidentialité</span>
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-premium max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8 text-lg">
              Men Africa Company s&apos;engage à protéger la vie privée des utilisateurs de son site. 
              Cette politique de confidentialité explique comment nous collectons, utilisons et 
              protégeons vos données personnelles.
            </p>

            <h2 className="font-playfair text-2xl font-semibold text-[#1B2B5A] mb-4">
              1. Données Collectées
            </h2>
            <p className="text-gray-600 mb-4">Nous collectons les données suivantes :</p>
            <ul className="text-gray-600 mb-8 space-y-2 list-disc list-inside">
              <li>Informations d&apos;identification (nom, prénom, email, téléphone)</li>
              <li>Informations professionnelles (entreprise, fonction)</li>
              <li>Données de navigation (adresse IP, cookies)</li>
              <li>Informations relatives à vos demandes de devis</li>
            </ul>

            <h2 className="font-playfair text-2xl font-semibold text-[#1B2B5A] mb-4">
              2. Utilisation des Données
            </h2>
            <p className="text-gray-600 mb-4">Vos données sont utilisées pour :</p>
            <ul className="text-gray-600 mb-8 space-y-2 list-disc list-inside">
              <li>Répondre à vos demandes de contact et de devis</li>
              <li>Vous fournir nos services</li>
              <li>Améliorer notre site et nos services</li>
              <li>Vous envoyer des communications commerciales (avec votre consentement)</li>
            </ul>

            <h2 className="font-playfair text-2xl font-semibold text-[#1B2B5A] mb-4">
              3. Protection des Données
            </h2>
            <p className="text-gray-600 mb-8">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles 
              pour protéger vos données contre tout accès non autorisé, modification, divulgation 
              ou destruction.
            </p>

            <h2 className="font-playfair text-2xl font-semibold text-[#1B2B5A] mb-4">
              4. Partage des Données
            </h2>
            <p className="text-gray-600 mb-8">
              Vos données personnelles ne sont jamais vendues à des tiers. Elles peuvent être 
              partagées avec nos partenaires (banques, assurances) uniquement dans le cadre de 
              vos demandes de services et avec votre consentement.
            </p>

            <h2 className="font-playfair text-2xl font-semibold text-[#1B2B5A] mb-4">
              5. Vos Droits
            </h2>
            <p className="text-gray-600 mb-4">Vous disposez des droits suivants :</p>
            <ul className="text-gray-600 mb-8 space-y-2 list-disc list-inside">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement</li>
              <li>Droit d&apos;opposition au traitement</li>
              <li>Droit à la portabilité</li>
            </ul>

            <h2 className="font-playfair text-2xl font-semibold text-[#1B2B5A] mb-4">
              6. Contact
            </h2>
            <p className="text-gray-600 mb-8">
              Pour toute question relative à cette politique ou pour exercer vos droits, 
              contactez-nous à : <a href="mailto:contact@menafrica.ci" className="text-[#B8923B]">contact@menafrica.ci</a>
            </p>

            <p className="text-gray-500 text-sm mt-12">
              Dernière mise à jour : Janvier 2025
            </p>
          </div>
        </div>
      </section>
    </>
  );
}