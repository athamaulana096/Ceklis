function Item({ item, onDeleteItem, onCompleteItem }) {
  return (
    <li>
      <input type="checkbox" value={item.completed} onChange={() => onCompleteItem(item.id)} />
      <span style={{ textDecoration: item.completed ? 'line-through' : '' }}>{item.title}</span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Checklist({ items, onDeleteItem, onCompleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onCompleteItem={onCompleteItem} />
        ))}
      </ul>
    </div>
  );
}

export default Checklist;
