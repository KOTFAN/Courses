export default function BillSize({ bill, setBill }) {
  return (
    <div>
      How much was the bill?{" "}
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        min={0}
      />
    </div>
  );
}
