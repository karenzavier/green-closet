import ItemCard from "./ItemCard";

function ItemList({ items, onSelectItem }) {
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <ItemCard
          key={index} 
          name={item.name}
          category={item.category}
          condition={item.condition}
          price={item.price} 
           onClick={() => onSelectItem(item)}        
          
        />
      ))}
    </div>
  );
}

export default ItemList;