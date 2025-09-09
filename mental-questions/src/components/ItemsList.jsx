import { useCallback, useMemo, useState } from "react";

const generateItems = () => {
  return Array.from({ length: 100 }, (_, i) => `Items  ${i + 1}`);
};

const ItemsList = () => {
  const [filter, setFilter] = useState("");
  const items = useMemo(() => generateItems(), []);

  const filterItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  const handleChanges = useCallback((e) => {
    setFilter(e.target.value);
  }, []);

  return (
    <>
      <div>
        <h1 className="text-2xl font-italic mb-4  text-center">Item List </h1>
        <input
          placeholder="Filter Items .."
          type="text"
          onChange={handleChanges}
          value={filter}
        />
        <ul>
          {filterItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ItemsList;
