export default function ServiceImpression({ children }) {
  return (
    <div>
      {children}{" "}
      <select value={20}>
        <option value={0}>(0%) It was awfull !!!</option>
        <option value={5}>(5%) It was normal </option>
        <option value={10}>(10%) It was good !</option>
        <option value={15}>(15%) It was wery good !!</option>
        <option value={20}>(20%) It was fantastic !!!</option>
      </select>
    </div>
  );
}
