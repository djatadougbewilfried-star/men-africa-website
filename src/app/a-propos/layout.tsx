import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos",
  description: "Découvrez Men Africa Company, votre partenaire stratégique multisectoriel en Côte d'Ivoire. Finance, industrie et commerce au service de l'Afrique.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
