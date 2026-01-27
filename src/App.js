import './App.css';
import { useState } from "react";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import SustainabilityImpact from "./components/SustainabilityImpact";
import { getItems } from "./services/itemservice";


function App() {

 
  const [filterCondition, setFilterCondition] = useState("All");

 const items = getItems();

const filteredItems =
  filterCondition === "All"
    ? items
    : items.filter(item => item.condition === filterCondition);

   
  return (
    <div className="App">
      <Header />

      <h1>Welcome to Green Closet</h1>
      <p>Promoting sustainable consumption through second-hand clothing in Sri Lanka</p>

      <h2>Available Second-Hand Items</h2>

      <label>
        Filter by condition: {" "}
        <select 
        value={filterCondition}
        onChange={(e)=> setFilterCondition(e.target.value)}
        >
           <option value="All">All</option>
           <option value="Good">Good</option>
           <option value="Like New">Like New</option>

        </select>
      </label>

<ItemList items={filteredItems} />

      <SustainabilityImpact itemCount={items.length} />

    </div>
  );
}

export default App;
