import { useState } from 'react';

function Item({ item, onDeleteItem, onCompleteItem }) {
  return (
    <li>
      <input type="checkbox" value={item.completed} onChange={() => onCompleteItem(item.id)} />
      <span style={{ textDecoration: item.completed ? 'line-through' : '' }}>{item.title}</span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Checklist({ items, onDeleteItem, onCompleteItem, onClearItems }) {
  const [sortBy, setSortBy] = useState('input');

  function handleSortBy() {
    switch (sortBy) {
      case 'title':
        return items.slice().sort((a, b) => a.title.localeCompare(b.title));
      case 'status':
        return items.slice().sort((a, b) => Number(a.completed) - Number(b.completed));
      case 'input':
      default:
        return items;
    }
  }
  const sortedItems = handleSortBy();

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onCompleteItem={onCompleteItem} onClearItems={onClearItems} />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Baru Ditambahkan</option>
          <option value="title">Berdasarkan Judul</option>
          <option value="status">Berdasarkan Status</option>
        </select>
        <button onClick={onClearItems}>Hapus</button>
      </div>
    </div>
  );
}

export default Checklist;
