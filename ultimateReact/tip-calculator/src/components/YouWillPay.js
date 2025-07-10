export default function YouWillPay({ bill, tip }) {
  return (
    <h2 style={{ fontWeight: 900 }}>
      You will pay ${bill + tip} (${bill} + ${tip} tip)
    </h2>
  );
}
