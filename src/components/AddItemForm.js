import { useState } from "react";

export function AddItemForm({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      description,
      quantity,
      purchased: false,
      id: Date.now(),
    };
    console.log(newItem);
    onAddItems(newItem);
    setDescription("");
    setQuantity("");
  }

  return (
    <form className="add-list" onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="How many?"
        className="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="what do you I need?"
        className="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="add-btn">Add item</button>
    </form>
  );
}
