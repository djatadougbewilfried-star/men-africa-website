import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Actualités",
  description: "Actualités, conseils et analyses du secteur financier, industriel et commercial en Côte d'Ivoire par Men Africa Company.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
