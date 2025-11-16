import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Nova Dev | Web & App Development Studio",
  description: "Modern landing page for E-Nova Dev, a web and app development studio.",
  metadataBase: new URL("https://e-nova.dev")
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
