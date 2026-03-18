function ItemDetails({ item }) {

  if (!item) {
    return <p>Select an item to see details</p>;
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>Category: {item.category}</p>
      <p>Condition: {item.condition}</p>
      <p>Price: LKR {item.price}</p>

      <h3>Sustainability Impact 🌿</h3>
      <p>🌍 CO₂ Saved: {item.co2} kg</p>
      <p>💧 Water Saved: {item.water} L</p>
      <p>♻ Waste Reduced: {item.waste} kg</p>
    </div>
  );
}

export default ItemDetails;