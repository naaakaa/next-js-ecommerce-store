export const metadata = {
  title: 'Checkout page',
  description: 'Bike Shop',
};

export default function CheckOutPage() {
  return (
    <div>
      <h1>Ready for checkout...</h1>
      <p>Enter names in the fields, then click "Submit" to submit the form:</p>

      <form id="frm1" action="/action_page.php">
        First name:{' '}
        <input name="fname" data-test-id="checkout-first-name" required />
        <br />
        Last name:{' '}
        <input name="lname" data-test-id="checkout-last-name" required />
        <br />
        Email:{' '}
        <input
          type="email"
          name="lname"
          data-test-id="checkout-email"
          required
        />
        <br />
        <hr />
        <br />
        Address:{' '}
        <input
          name="address"
          placeholder="Street and Number"
          data-test-id="checkout-address"
          required
        />
        <br />
        City: <input name="city" data-test-id="checkout-city" required />
        <br />
        Postal code:{' '}
        <input
          type="tel"
          name="pcode"
          minLength="4"
          maxLength="5"
          data-test-id="checkout-postal-code"
          required
        />
        <br />
        Country:{' '}
        <input name="country" data-test-id="checkout-country" required />
        <br />
        <hr />
        <br />
        Credit card number:{' '}
        <input
          type="tel"
          name="cardnr"
          pattern="\d*"
          placeholder="1234 5678 1234 5678"
          minLength="19"
          maxLength="19"
          data-test-id="checkout-credit-card"
          required
        />
        <br />
        Expiration date:{' '}
        <input
          type="tel"
          name="expdate"
          pattern="\d*"
          minLength="5"
          maxLength="5"
          placeholder="MM/YY"
          data-test-id="checkout-expiration-date"
          required
        />
        <br />
        Security code:{' '}
        <input
          type="tel"
          name="seccode"
          pattern="\d*"
          minLength="3"
          maxLength="4"
          placeholder="CVC"
          data-test-id="checkout-security-code"
          required
        />
        <br />
        <br />
        <input type="submit" onclick="myFunction()" value="Confirm order" />
      </form>
    </div>
  );
}
