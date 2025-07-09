import ClearList from "./ClearList";

export default function SortingActions({
  sortBy,
  handleSorting,
  handleClearList,
}) {
  return (
    <div className="actions">
      <select
        value={sortBy}
        onChange={(e) => {
          handleSorting(e.target.value);
        }}
      >
        <option value={"input"}>Sort by input</option>
        <option value={"description"}>Sort by description</option>
        <option value={"packed"}>Sort by packed status</option>
        <option value={"quantity"}>Sort by quantity</option>
      </select>
      <ClearList handleClearList={handleClearList} />
    </div>
  );
}
