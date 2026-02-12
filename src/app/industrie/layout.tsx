import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrie & Béton",
  description: "Production de béton manufacturé en Côte d'Ivoire. Bordures, caniveaux, pavés, dalots, buses et tétrapodes de qualité.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
