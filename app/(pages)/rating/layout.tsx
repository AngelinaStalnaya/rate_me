import { Metadata } from 'next';
import Link from "next/link";


export const metadata: Metadata = {
    title: 'Rating',
};


export default function ratingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <Link href='/'>Home page</Link>
            {children}
        </section>
    )
}