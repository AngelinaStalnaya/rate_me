import {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: {
      template: '%s | RateMe',
      default: 'RateMe',
    },
    description: 'Service for Business rating'
};


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="ru">
        <body>
          <header>HEADER</header>
          <main>{children}</main>
          <footer>FOOTER</footer>
        </body>
      </html>
    )
  }

  // i18 для перевода страницы 

// import 'app/ui/global.css';
// import {inter} from './ui/fonts';

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} antialiased`}>{children}</body>
//     </html>
//   );
// }

