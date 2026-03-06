import React from "react";

function ItemDetail({ item }) {
    if (!item) return <p>Select an item to see details.</p>

    return (
        <div className="item-detail">
            <h2>{item.name}</h2>
            <p>Condition: {item.condition}</p>
            <p>Price: {item.price}</p>
            <p>Size: {item.size}</p>
            <p>Material: {item.material}</p>
            <p>Description: {item.description}</p>

        </div>

    );
}
export default ItemDetail;