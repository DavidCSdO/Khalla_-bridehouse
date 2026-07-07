import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kallah — Vestidos de Noiva",
  description:
    "Kallah Bride House. Vestidos de noiva e acessórios com identidade própria. Coleções pensadas para quem valoriza o silêncio dos bons tecidos.",
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
