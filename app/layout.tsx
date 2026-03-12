import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Cursor from "@/components/Cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Nova | Web & App Development Studio",
  description: "We build fast, modern web and mobile apps. Based in Lebanon, working worldwide.",
  metadataBase: new URL("https://e-nova.dev"),
  openGraph: {
    title: "E-Nova",
    description: "Digital products that convert.",
    url: "https://e-nova.dev",
  },
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
