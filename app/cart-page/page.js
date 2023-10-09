import Link from 'next/link';

export default function CartPage() {
  return (
    <div>
      <h1>Welcome to your cart</h1>
      <button data-test-id="cart-product-remove-<product id>">Remove</button>
      <br />
      <br />
      <Link href="../../checkout-page" data-test-id="cart-checkout">
        Checkout
      </Link>
    </div>
  );
}
