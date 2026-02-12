import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions BTP",
  description: "Solutions complètes pour le BTP en Côte d'Ivoire. Fourniture de matériaux, conseil technique et accompagnement chantier.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
