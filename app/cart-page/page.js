import Link from 'next/link';

export default function CartPage() {
  return (
    <div>
      <h1>Welcome to your cart</h1>
      <button>Remove</button>
      <Link href="../../thankyou-page">Checkout</Link>
    </div>
  );
}
