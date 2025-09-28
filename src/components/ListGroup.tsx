function ListGroup() {
  let items = ["Hyderabad", "Vijayawada", "Guntur", "Eluru", "Ongole"];

  items = [];

  const getMessage = () => {
    return items.length === 0 && <p>No Items Found</p>;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
