export function Item({ item, onDeleteItems, onToggleItems }) {
  return (
    <li>
      <span
        style={
          item.purchased
            ? { textDecoration: "line-through", color: "#6a9c89" }
            : {}
        }
      >
        {item.quantity} {item.description}
      </span>
      <input
        type="checkbox"
        checked={item.purchased}
        onClick={() => onToggleItems(item.id)}
      />

      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
