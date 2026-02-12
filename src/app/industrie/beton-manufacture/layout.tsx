import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Béton Manufacturé",
  description: "Production de béton manufacturé en Côte d'Ivoire : bordures, caniveaux, pavés, dalots, buses et tétrapodes. Qualité certifiée.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
