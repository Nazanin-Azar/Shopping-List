import { useState } from "react";
import { Item } from "./Item";

export function ShoppingList({ items, onDeleteItems, onToggleItems }) {
  const [filter, setFilter] = useState("all");
  let sortedItems;
  if (filter === "all") sortedItems = items;
  if (filter === "purchased")
    sortedItems = items.filter((item) => item.purchased);
  if (filter === "none-purchased")
    sortedItems = items.filter((item) => !item.purchased);
  return (
    <div className="shopping-container">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="purchased">Purchased</option>
          <option value="none-purchased">None-Purchased</option>
        </select>
      </div>
    </div>
  );
}
