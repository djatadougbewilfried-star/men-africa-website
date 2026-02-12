import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fournitures Techniques",
  description: "Fournitures techniques et matériaux de construction pour le BTP en Côte d'Ivoire. Import et distribution.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
