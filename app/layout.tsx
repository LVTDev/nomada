import type { Metadata } from "next";
import { Geist, Geist_Mono, Work_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nomada Film Festival",
  description:
    "una plataforma cultural que busca fortalecer la circulación de películas, acercar nuevas voces a distintas audiencias y generar espacios de encuentro para el cine durante todo el año.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="  bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
