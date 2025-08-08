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
  description: "Global leader in precision investment casting solutions since 2008",
  icons: {
    icon: "/Rudra-Logo.png", // Directly using your logo
    shortcut: "/Rudra-Logo.png",
    apple: "/Rudra-Logo.png",
  },
  openGraph: {
    title: "Rudra Castings",
    description: "Global leader in precision investment casting solutions since 2008",
    images: "/Rudra-Logo.png",
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
        {/* Explicit favicon links */}
        <link rel="icon" href="/Rudra-Logo.png" type="image/png" />
        <link rel="shortcut icon" href="/Rudra-Logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Rudra-Logo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}