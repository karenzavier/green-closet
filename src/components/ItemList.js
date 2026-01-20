import ItemCard from "./ItemCard";

function ItemList({items}) {
    return(
        <div>
            {items.map((item, index) =>(
                <ItemCard
                key={index}
                name={item.name}
                condition={item.condition}
                price={item.price}
                />
            )

        )}
        </div>
    );
}

export default ItemList;