import React, {useState} from 'react';
import Item from './item.js';

const ItemList = ({items, onItemSelect}) => {
    const [sortBy, setSortBy] = useState("name");

    let sortedItems = [...items];
    if (sortBy === "name") {
        sortedItems = [...items].sort((a, b) => (a.name > b.name ? 1 : -1));
    } else if (sortBy === "category") {
        sortedItems = [...items].sort((a, b) => (a.category > b.category ? 1 : -1));
    }

    return(
        <div>
            <h2>Shopping List</h2>
            <button 
                style={{backgroundColor: sortBy === "name" ? "red" : "orange"}}
                onClick={() => setSortBy("name")}>
                Sort by Name
            </button>

            <button 
                style={{backgroundColor: sortBy === "category" ? "red" : "orange"}}
                onClick={() => setSortBy("category")}>
                Sort by Category
            </button>

            <ul>
                {sortedItems.map((item) => (
                    <Item
                    id={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}   
                    onSelect={() => onItemSelect(item)}     
                    />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;