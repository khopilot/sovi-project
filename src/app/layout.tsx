import type { Metadata } from "next";
import { Inter, Karla, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ChatWindow from "@/app/components/ChatWindow";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});
const karla = Karla({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-karla',
});

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
    <html lang="en" className={`${inter.className} ${montserrat.variable} ${karla.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover" />
      </head>
      <body>
        <Navbar />
        {children}
        <ChatWindow />
        <Footer />
      </body>
    </html>
  );
}
