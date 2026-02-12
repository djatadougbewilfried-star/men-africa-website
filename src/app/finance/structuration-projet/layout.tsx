import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Structuration de Projet",
  description: "Structuration et montage de projets d'investissement en Afrique. Études de faisabilité et business plans.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
