import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "RICHE — натуральная косметика для умного ухода",
  description: "RICHE — натуральная косметика для умного ухода",
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable}`}>
        <Header />
        <div className="pt-[50px] h-screen px-3">
          {children}
        </div>
      </body>
    </html>
  );
}
