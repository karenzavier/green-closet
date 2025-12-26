import logo from './logo.svg';
import './App.css';
import Header from './Header';


function App() {
  return (
    
      <div className="App">
        <Header/>
  <h1>Welcome to Green Closet</h1>
  <p>Promoting sustainable consumption through second-hand clothing in Sri Lanka</p>
<h2>Available Second-Hand Items</h2>

  <div className="product-card">
    <h3>Denim Jacket</h3>
    <p>Condition: Good</p>
    <p>Price: LKR 2,500</p>
  </div>

  <div className="product-card">
    <h3>Cotton Dress</h3>
    <p>Condition: Like New</p>
    <p>Price: LKR 1,800</p>
  </div>


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
