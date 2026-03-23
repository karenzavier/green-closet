import './App.css';
import { useState } from "react";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import SustainabilityImpact from "./components/SustainabilityImpact";
import { getItems } from "./services/itemservice";
import ItemDetails from "./components/ItemDetails";

function App() {

  const [filterCondition, setFilterCondition] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("none");
  const [selectedItem,setSelectedItem] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("All");


  const items = getItems();

  // FILTER + SEARCH
  const filteredItems = items.filter(item => {

  const matchesCondition =
    filterCondition === "All" || item.condition === filterCondition;

  const matchesCategory =
    categoryFilter === "All" || item.category === categoryFilter;

  const matchesSearch =
    item.name.toLowerCase().includes(searchTerm.toLowerCase());

  return matchesCondition && matchesCategory && matchesSearch;

});

  // SORT
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOrder === "low-high") return a.price - b.price;
    if (sortOrder === "high-low") return b.price - a.price;
    return 0;
  });

  return (
    <div className="App">

      <Header />

      <h1>Welcome to Green Closet</h1>
      <p>Promoting sustainable consumption through second-hand clothing in Sri Lanka</p>

      <h2>Available Second-Hand Items</h2>

      {/* FILTER */}
      <label>
        Filter by condition:{" "}
        <select
          value={filterCondition}
          onChange={(e) => setFilterCondition(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Good">Good</option>
          <option value="Like New">Like New</option>
        </select>
      </label>

      <label>
        Filter by category:{" "}
        <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Jackets">Jackets</option>
          <option value="Dresses">Dresses</option>
          <option value="Shirts">Shirts</option>

        </select>
      </label>

      <br /><br />

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <br />
      <br />

      {/* SORT */}
      <label>
        Sort by price:{" "}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="none">Default</option>
          <option value="low-high">Low to High</option>
          <option value="high-low">High to Low</option>
        </select>
      </label>

      <br /><br />

      {/* ITEM LIST */}
      <ItemList items= {sortedItems} onSelectedItem={setSelectedItem}/>
      <ItemDetails item={selectedItem}/>

      {/* SUSTAINABILITY IMPACT */}
      <SustainabilityImpact itemCount={items.length} />

    </div>
  );
}

export default App; 