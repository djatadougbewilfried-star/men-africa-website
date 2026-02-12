import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Men Africa Company | Finance, Industrie & Commerce en Côte d'Ivoire",
    template: "%s | Men Africa Company",
  },
  description: "Votre partenaire stratégique multisectoriel en Afrique. Courtage bancaire, assurance, béton manufacturé, import-export. Basé à Abidjan, Côte d'Ivoire.",
  keywords: "courtage bancaire, assurance, béton, BTP, import export, Côte d'Ivoire, Abidjan, finance, investissement",
  openGraph: {
    type: "website",
    locale: "fr_CI",
    siteName: "Men Africa Company",
    title: "Men Africa Company | Finance, Industrie & Commerce en Côte d'Ivoire",
    description: "Votre partenaire stratégique multisectoriel en Afrique. Courtage bancaire, assurance, béton manufacturé, import-export.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}