import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rating | Rate Me",
    description: "Rating page of a Company",
};

export default function RatingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>{children}</main>
    );
}
