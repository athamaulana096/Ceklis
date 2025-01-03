import React, { useState } from 'react';

import Logo from './components/Logo';
import Form from './components/Form';
import Checklist from './components/Checklist';
import Stats from './components/Stat';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleCompleteItem(id) {
    setItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm('Apakah Anda yakin ingin menghapus semua item?');
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <Checklist items={items} onDeleteItem={handleDeleteItem} onCompleteItem={handleCompleteItem} onClearItems={handleClearItems} />
      <Stats items={items} />
    </div>
  );
}

export default App;
