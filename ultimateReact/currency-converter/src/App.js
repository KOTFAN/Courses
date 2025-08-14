import { useEffect, useState } from "react";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [amount, setAmount] = useState(0);
  const [firstCurrency, setFirstCurrency] = useState("USD");
  const [secondCurrency, setSecondCurrency] = useState("USD");
  const [convertedValue, setConvertedValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function showSwappedValue() {
      setIsLoading(true);
      try {
        if (firstCurrency === secondCurrency) {
          setConvertedValue(amount);
          return;
        } else {
          const data = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${firstCurrency}&to=${secondCurrency}`
          );
          const result = await data.json();
          setConvertedValue(result.rates[secondCurrency]);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    showSwappedValue();
  }, [amount, firstCurrency, secondCurrency]);
  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={firstCurrency}
        onChange={(e) => setFirstCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={secondCurrency}
        onChange={(e) => setSecondCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {convertedValue} {secondCurrency}
      </p>
    </div>
  );
}
