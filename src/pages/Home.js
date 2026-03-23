import { useState } from "react";
import ItemList from "../components/ItemList";
import { getItems } from "../services/itemservice";

function Home() {

    const [searchTerm, setSearchTerm] = useState("");
    const items = getItems();

    const filteredItems = items.filter(item=> 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())

    );
    return (
        <div>
            <h1>Green Closet</h1>

            <input
            type="text"
            plcaeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}

            />
            <ItemList items= {filteredItems}/>

        </div>
    );
}
export default Home;
