import ItemCard from "./ItemCard";

function ItemList({ items, onSelectItem }) {
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <ItemCard
          key={index}
          item={item}            // pass the whole item object
          onSelectItem={onSelectItem}  // handle click
        />
      ))}
    </div>
  );
}

export default ItemList;