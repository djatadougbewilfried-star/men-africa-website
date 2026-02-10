import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administration | Men Africa Company",
  description: "Panneau d'administration Men Africa Company",
  robots: "noindex, nofollow", // Ne pas indexer la page admin
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout">
      {children}
    </div>
  );
}