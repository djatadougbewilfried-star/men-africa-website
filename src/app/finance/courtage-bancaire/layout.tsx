import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courtage Bancaire",
  description: "Services de courtage bancaire en Côte d'Ivoire. Accompagnement personnalisé pour vos financements et crédits professionnels.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
