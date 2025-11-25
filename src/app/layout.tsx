import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chat/ChatWidget";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "LAVIE COSMETICS EGYPT | Official La Vie Professional Distributor",
  description: "Official distributor of La Vie Professional Brazilian Haircare in Egypt. Authentic products, certified quality.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Caveat:wght@400..700&family=Comfortaa:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          body { font-family: 'Comfortaa', sans-serif; margin: 0; padding: 0; }
          h1, h2, h3, h4, h5, h6, .font-serif { font-family: 'Baskervville', serif; }
          .font-caveat { font-family: 'Caveat', cursive; }
          @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
          .animate-marquee { animation: marquee 20s linear infinite; }
        `}</style>
      </head>
      <body className="antialiased font-comfortaa">
        <Providers>
            <Header />
            {children}
            <WhatsAppBtn />
            <ChatWidget />
            <Footer />
            <Toaster />
        </Providers>
      </body>
    </html>
  );
}
