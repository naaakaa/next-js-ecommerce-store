import './globals.scss';
import Image from 'next/image';
import Link from 'next/link';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';

export const metadata = {
  title: { default: 'Homepage | Bike Shop', template: '%s | Bike Shop' },
  description: 'Buy your bike here!',
};

export default function RootLayout({ children }) {
  let itemsInCart = 0;
  const myCookie = getCookie('Cart');
  const myCart = myCookie ? parseJson(myCookie) : [];
  console.log(myCart);
  myCart.forEach((item) => {
    itemsInCart += item.quantity;
  });
  console.log(itemsInCart);

  return (
    <html lang="en">
      <body>
        <nav>
          <div id="links">
            <Link href="/"> Home </Link>
            <Link href="/products-page" data-test-id="products-link">
              Our bikes
            </Link>
            <Link href="/cart-page"> Your cart </Link>
          </div>
          <div className="logo">
            <Image src="/logo.jpg" alt="Logo" height="50" width="50" />
          </div>
          <div id="cart">
            Cart:
            {itemsInCart}
            items
          </div>
        </nav>
        <div className="main">{children}</div>
      </body>
    </html>
  );
}
