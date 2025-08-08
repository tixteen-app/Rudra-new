import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rudra Castings | Precision Investment Casting Solutions",
  description: "Global leader in precision investment casting solutions since 2008. Serving automotive, defense, medical, and industrial sectors with superior quality components.",
  icons: {
    icon: [
      {
        url: "/Rudra-Logo.png",
        type: "image/png",
      },
      {
        url: "/Rudra-Logo.png",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
      }
    ],
  },
  openGraph: {
    title: "Rudra Castings",
    description: "Global leader in precision investment casting solutions since 2008",
    url: "https://www.rudracastings.com",
    siteName: "Rudra Castings",
    images: [
      {
        url: "/Rudra-Logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudra Castings",
    description: "Global leader in precision investment casting solutions since 2008",
    images: ["/Rudra-Logo.png"],
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
        <link
          rel="manifest"
          href="/site.webmanifest"
          crossOrigin="use-credentials"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}