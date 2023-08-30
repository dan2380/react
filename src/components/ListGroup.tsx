import { useState } from "react";

interface Props {
  items: string[];
  name: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, name, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{name}</h1>
      {items.length === 0 && <p>No Items Found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item} //assume every key is unique
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
