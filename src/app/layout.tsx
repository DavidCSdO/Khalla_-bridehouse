import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kallah — Artigos para Noivas",
  description:
    "Kallah Bridehouse: elegância que atravessa gerações. Vestidos de noiva, acessórios e coleções exclusivas para o dia mais especial da sua vida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
