import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Levée de Fonds",
  description: "Accompagnement en levée de fonds pour entreprises africaines. Structuration financière et mise en relation investisseurs.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
