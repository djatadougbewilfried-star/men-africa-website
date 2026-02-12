import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Configurateur Béton",
  description: "Configurez vos produits en béton manufacturé sur mesure. Estimez vos besoins en bordures, caniveaux, pavés.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
