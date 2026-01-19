function ItemCard(props) {
  return (
    <div className="product-card">
      <h3>{props.name}</h3>
      <p>Category: {props.category}</p>
      <p>Condition: {props.condition}</p>
      <p>Price: LKR {props.price}</p>
    </div>
  );
}

export default ItemCard;

 