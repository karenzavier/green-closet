function SustainabilityImpact({ itemCount }) {

  const waterSavedPerItem = 2500; // liters
  const totalWaterSaved = itemCount * waterSavedPerItem;

  return (
    <div className="sustainability">
      <h2>Your Impact 🌱</h2>
      <p>By choosing second-hand clothing, you helped save:</p>
      <ul>
        <li>💧 {totalWaterSaved} liters of water</li>
        <li>🌍 Reduced textile waste</li>
        <li>♻️ Lower carbon emissions</li>
      </ul>
    </div>
  );
}

export default SustainabilityImpact;