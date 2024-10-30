import type { Metadata } from "next";
import { montserrat } from './fonts/fonts';
import "./globals.css";
import clsx from "clsx";
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "Rate Me App for Business",
  description: "Created by Angelina Stalnaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full bg-white">
      <body
        className={clsx('h-full', montserrat.className)}
      >
        <Header />
        <main className="flex items-center justify-center md:h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
