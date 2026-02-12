import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courtage Assurance",
  description: "Solutions d'assurance sur mesure pour entreprises et particuliers en Côte d'Ivoire. Courtage et conseil en assurance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
