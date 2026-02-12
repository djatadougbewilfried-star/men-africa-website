import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Réalisations",
  description: "Découvrez les projets réalisés par Men Africa Company : chantiers BTP, béton manufacturé, infrastructures en Côte d'Ivoire.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
