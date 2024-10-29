import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Signin | Rate Me",
    description: "Signin to get access to the Companie`s statistics",
};

export default function SigninLayout({
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
