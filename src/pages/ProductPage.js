import { useParams } from "react-router-dom";
import { getItems } from "../services/itemservice";

function ProductPage() {

    const { id } = useParams();
    const items = getItems();

    const item = items[id];

    if (!item)return <p>Item not found</p>;

    return(
        <div>
            <h2>{item.name}</h2>
            <p>Price: LKR {item.price}</p>
            <p>Condition: {item.condition}</p>

            <h3>Sustainability Impact</h3>
            <p>CO2 Saved: {item.co2} kg</p>
            <p>Water Saved: {item.water} L</p>
            <p>Waste Reduced: {item.waste} kg</p>
        </div>
    );
}

export default ProductPage;