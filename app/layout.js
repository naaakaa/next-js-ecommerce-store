import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: { default: 'Homepage | Bike Shop', template: '%s | Bike Shop' },
  description: 'Buy your bike here!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <div>
            <Link href="/">Home</Link>
            <Link href="/product-page">Products</Link>
            <Link href="/cart-page">Cart</Link>
          </div>

          {Math.floor(Math.random() * 10)}
        </nav>

        {children}
      </body>
    </html>
  );
}
