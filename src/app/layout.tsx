import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Villaroma — Waldmedizin & Waldbaden | Maria M. Kettenring",
  description:
    "Entdecken Sie die Heilkraft der Natur mit Maria M. Kettenring. Aromatherapie, Waldmedizin, Waldbaden und ätherische Öle — über 40 Jahre Erfahrung.",
  keywords: [
    "Villaroma",
    "Maria M. Kettenring",
    "Waldmedizin",
    "Waldbaden",
    "Aromatherapie",
    "Ätherische Öle",
    "Shinrin-Yoku",
    "Naturheilkunde",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
