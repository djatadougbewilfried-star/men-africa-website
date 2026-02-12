import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simulateur Financier",
  description: "Simulez vos projets de financement. Calculez vos mensualités et estimez vos besoins de trésorerie.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
