import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'RateMe',
};

// shared ui for all pages(like header/footer)

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          {/* Layout UI */}
          <main>{children}</main>
        </body>
      </html>
    )
  }