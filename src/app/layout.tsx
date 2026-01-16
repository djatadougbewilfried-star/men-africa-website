import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Men Africa Company | Finance, Industrie & Commerce en Côte d'Ivoire",
  description: "Votre partenaire stratégique multisectoriel en Afrique. Courtage bancaire, assurance, béton manufacturé, import-export. Basé à Abidjan, Côte d'Ivoire.",
  keywords: "courtage bancaire, assurance, béton, BTP, import export, Côte d'Ivoire, Abidjan, finance, investissement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}