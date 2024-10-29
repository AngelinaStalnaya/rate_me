import type { Metadata } from "next";
import { Montserrat, Caveat } from 'next/font/google';
import "./globals.css";
import clsx from "clsx";
import Header from './components/Header';

export const metadata: Metadata = {
  title: "Rate Me App for Business",
  description: "Created by Angelina Stalnaya",
};

export const montserrat = Montserrat({
  subsets: ['cyrillic'],
  display: 'swap',
})

export const caveat = Caveat({
  subsets: ['cyrillic'],
  display: 'swap',
})

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
        <Header/>
        <main className="flex items-center justify-center md:h-screen">{children}</main>
        <footer>FOOTER</footer>
      </body>
    </html>
  );
}
