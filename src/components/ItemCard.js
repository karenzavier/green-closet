function ItemCard({ item, onSelectItem }) {
  return (
    <div className="product-card" onClick={() => onSelectItem(item)} style={{cursor: 'pointer'}}>
      <h3>{item.name}</h3>
      <p>Category: {item.category}</p>
      <p>Condition: {item.condition}</p>
      <p>Price: LKR {item.price}</p>
    </div>
  );
}

export default ItemCard;
 