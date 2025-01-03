function Stat({ items }) {
  const totalItems = items.length;
  const completedItems = items.filter((item) => item.completed).length;
  const percentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  if (totalItems === 0) {
    return (
      <footer className="stats">
        <span>Gas Ceklis Kegiatanmu!</span>
      </footer>
    );
  }

  return (
    <footer className="stats">
      <span>{percentage === 100 ? `Mantap Wak!!!` : `Catatanya : ${totalItems} | Sudah Selesai : ${completedItems} (${percentage}%)`}</span>
    </footer>
  );
}

export default Stat;
