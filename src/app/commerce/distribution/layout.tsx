import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Distribution",
  description: "Distribution et logistique en Côte d'Ivoire. Réseau de distribution pour matériaux et produits industriels.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
