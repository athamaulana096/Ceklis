import { useState } from 'react';

function Form({ onAddItem }) {
  const [title, setTitle] = useState('');
  function handleSubmit(e) {
    e.preventDefault();

    if (!title) return;

    const newItem = {
      id: Date.now(),
      title,
      completed: false,
    };

    onAddItem(newItem);
    setTitle('');
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Catat Disini</h3>
      <input type="text" id="" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button>Tambah</button>
    </form>
  );
}

export default Form;
