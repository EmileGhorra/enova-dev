import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Inter, Orbitron } from "next/font/google";
import Cursor from "@/components/Cursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://e-nova.dev"),
  title: {
    default: "E-Nova | Web & App Development Studio",
    template: "%s | E-Nova",
  },
  description:
    "E-Nova builds fast, modern websites and mobile apps for businesses that need design, performance, and conversion-focused development.",
  keywords: [
    "web development Lebanon",
    "app development Lebanon",
    "Next.js agency",
    "React development studio",
    "freelance web developer Lebanon",
    "mobile app development",
    "UI UX design Lebanon",
    "SEO-ready websites",
    "E-Nova",
  ],
  authors: [{ name: "E-Nova" }],
  creator: "E-Nova",
  publisher: "E-Nova",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://e-nova.dev",
    siteName: "E-Nova",
    title: "E-Nova | Web & App Development Studio",
    description:
      "We build fast, modern web and mobile apps for ambitious businesses in Lebanon and beyond.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "E-Nova logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Nova | Web & App Development Studio",
    description:
      "Conversion-focused web and app development studio based in Lebanon, working worldwide.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  category: "technology",
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable} font-sans`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
