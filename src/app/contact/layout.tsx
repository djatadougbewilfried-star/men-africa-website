import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Men Africa Company à Abidjan. Demande de devis, rendez-vous et informations sur nos services.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
