import type { Metadata } from "next";
import { Inter, Karla, Montserrat } from "next/font/google";
import "./globals.css";

// Import components
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ChatWindowWrapper from "@/app/components/ChatWindowWrapper";

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
  metadataBase: new URL('https://nagabalm.com'),
  title: {
    default: "Naga Balm | Traditional Cambodian Healing Balm",
    template: "%s | Naga Balm"
  },
  description: "Experience the power of traditional Cambodian healing with Naga Balm. Natural pain relief and muscle recovery solutions crafted from ancient remedies.",
  keywords: ["Cambodian balm", "natural healing", "muscle pain relief", "traditional medicine", "sports recovery", "Naga Balm"],
  authors: [{ name: "Naga Balm" }],
  creator: "Naga Balm",
  publisher: "Naga Balm",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Naga Balm | Traditional Cambodian Healing Balm',
    description: 'Experience the power of traditional Cambodian healing with Naga Balm. Natural pain relief and muscle recovery solutions crafted from ancient remedies.',
    url: 'https://nagabalm.com',
    siteName: 'Naga Balm',
    images: [
      {
        url: '/images/png/Naga Balm_Primary_Wordmark_Primary.png',
        width: 1200,
        height: 630,
        alt: 'Naga Balm - Traditional Cambodian Healing',
        type: 'image/png',
      }
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'Cambodia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    viewportFit: 'cover',
  },
  category: 'Health & Wellness',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${montserrat.variable} ${karla.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover" />
      </head>
      <body data-suppress-hydration-warning="true">
        <Navbar />
        {children}
        <ChatWindowWrapper />
        <Footer />
      </body>
    </html>
  );
}
