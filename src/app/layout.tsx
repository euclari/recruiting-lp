
import type { Metadata } from "next";
import { Inter, Nunito, Playfair_Display } from "next/font/google";
import "@/index.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/components/contexts/LanguageContext";
import QueryProvider from "@/components/providers/QueryProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nunito',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Clarice — Academic Social Network for Readers",
  description: "An academic social network in progress, made for passionate readers.",
  authors: [{ name: "Clarice Project" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Clarice — Academic Social Network for Readers",
    description: "An academic social network in progress, made for passionate readers.",
    type: "website",
    images: ["/logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/undraw_reading-time_gcvc.svg" />
      </head>
      <body className={`${inter.variable} ${nunito.variable} ${playfairDisplay.variable} font-sans`}>
        <QueryProvider>
          <LanguageProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              {children}
            </TooltipProvider>
          </LanguageProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
