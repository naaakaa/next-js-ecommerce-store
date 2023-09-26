import './globals.scss';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: { default: 'Homepage | Bike Shop', template: '%s | Bike Shop' },
  description: 'Buy your bike here!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <div>
            <Link href="/">Home</Link>
            <Link href="/product-page">The bike</Link>
            <Link href="/cart-page">Cart</Link>
            <Image src="/logo.jpg" alt="Logo" height="50" width="50" />
            {Math.floor(Math.random() * 10)}
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
