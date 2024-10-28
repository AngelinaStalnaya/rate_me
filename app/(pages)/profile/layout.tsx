import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile| Rate Me",
  description: "Companie`s personal data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>{children}</main>
  )
}
