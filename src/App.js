import './App.css';
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import SustainabilityImpact from "./components/SustainabilityImpact";


function App() {

  const items = [
    {
      name: "Denim Jacket",
      condition: "Good",
      price: 2500
    },
    {
      name: "Cotton Dress",
      condition: "Like New",
      price: 1800
    }
  ];

  return (
    <div className="App">
      <Header />

      <h1>Welcome to Green Closet</h1>
      <p>Promoting sustainable consumption through second-hand clothing in Sri Lanka</p>

      <h2>Available Second-Hand Items</h2>

      <ItemList items={items} />

      <SustainabilityImpact itemCount={items.length} />

    </div>
  );
}

export default App;
