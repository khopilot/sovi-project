import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ChatWindow from "@/app/components/ChatWindow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naga Balm",
  description: "Traditional Cambodian healing balm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <ChatWindow />
        <Footer />
      </body>
    </html>
  );
}
