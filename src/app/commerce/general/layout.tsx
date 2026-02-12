import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commerce Général",
  description: "Commerce général et négoce en Côte d'Ivoire. Approvisionnement et fourniture de biens et services.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
