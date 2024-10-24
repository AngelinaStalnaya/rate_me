import { Metadata } from 'next';
import Link from "next/link";


export const metadata: Metadata = {
  title: {
    template: '%s | Profile',
    default: 'Profile'
  },
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Link href='/'>Home page</Link>

      <h3>Сведения о компании</h3>
      {children}
    </section>
  )
}