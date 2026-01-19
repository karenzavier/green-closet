import './App.css';
import Header from "./components/Header";
import ItemCard from "./components/temp";

function App() {
  return (
    <div className="App">
      <Header />

      <h1>Welcome to Green Closet</h1>
      <p>Promoting sustainable consumption through second-hand clothing in Sri Lanka</p>

      <h2>Available Second-Hand Items</h2>

      <ItemCard 
        name="Denim Jacket"
        category="Outerwear"
        condition="Good"
        price="2500"
      />

      <ItemCard 
        name="Cotton Dress"
        category="Casual Wear"
        condition="Like New"
        price="1800"
      />

      <h2>Your Impact 🌱</h2>

      <div className="sustainability">
        <p>By choosing second-hand clothing, you helped save:</p>
        <ul>
          <li>💧 2,500 liters of water</li>
          <li>🌍 Reduced textile waste</li>
          <li>♻️ Lower carbon emissions</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
