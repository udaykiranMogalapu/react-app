import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Hyderabad", "Vijayawada", "Guntur", "Eluru", "Ongole"];

  //   items = [];

  // Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  const getMessage = () => {
    return items.length === 0 && <p>No Items Found</p>;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
