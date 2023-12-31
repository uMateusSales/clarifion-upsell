import "./globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import Header from "./components/header/Header";
import BadgesContainer from "./components/badgesTop/BadgesContainer";
import Footer from "./components//footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clarifion Upsell",
  description: "By Mateus Lins Sales, ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <BadgesContainer />

        {children}
        <Footer />
      </body>
    </html>
  );
}
