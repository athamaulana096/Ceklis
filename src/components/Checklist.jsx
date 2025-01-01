function Item({ item, onDeleteItem }) {
  return (
    <li>
      <input type="checkbox" />
      <span style={{ textDecoration: item.completed ? 'line-through' : '' }}>{item.title}</span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Checklist({ items, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
}

export default Checklist;
