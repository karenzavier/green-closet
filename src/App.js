import './App.css';
import { useState } from "react";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import SustainabilityImpact from "./components/SustainabilityImpact";
import { getItems } from "./services/itemservice";


function App() {

 
  const [filterCondition, setFilterCondition] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");


 const items = getItems();

const filteredItems = items.filter(item => {
  const matchesCondition =
    filterCondition === "All" || item.condition === filterCondition;

  const matchesSearch =
    item.name.toLowerCase().includes(searchTerm.toLowerCase());

  return matchesCondition && matchesSearch;
});

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

<input
type="text"
placeholder="search items..."
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
/>

<ItemList items={filteredItems} />


      <SustainabilityImpact itemCount={items.length} />

    </div>
  );
}

export default App;
