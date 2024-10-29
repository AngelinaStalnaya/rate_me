import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login | Rate Me",
    description: "Login to get access to the Companie`s statistics",
};

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex items-center justify-center md:h-screen">
            {children}
        </main>
    )
}
