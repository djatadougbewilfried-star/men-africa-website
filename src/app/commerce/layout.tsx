import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Commerce & Supply Chain", template: "%s | Men Africa Company" },
  description: "Commerce général, import-export et distribution en Afrique de l'Ouest. Supply chain et logistique.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
