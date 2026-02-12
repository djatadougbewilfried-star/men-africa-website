import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Finance & Investissement", template: "%s | Men Africa Company" },
  description: "Solutions financières sur mesure : courtage bancaire, assurance, levée de fonds et structuration de projets en Côte d'Ivoire.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
