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
          <div id="links">
            <Link href="/">Home</Link>
            <Link href="/products-page" data-test-id="products-link">
              Our bikes
            </Link>
            <Link href="/cart-page">Your cart</Link>
          </div>
          <div className="logo">
            <Image src="/logo.jpg" alt="Logo" height="50" width="50" />
          </div>
          <div id="cart">
            Cart:
            {Math.floor(Math.random() * 10)}
            items
          </div>
        </nav>
        <div className="main">{children}</div>
      </body>
    </html>
  );
}
