"use client";
import { useState } from 'react';
import Link from 'next/link';
import ItemList from './item-list.js';
import NewItem from './new-item';
import MealIdeas from './meal-ideas.js';
import itemsData from './items.json';


export default function page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    
    };
    const handleItemSelect = (item) => {
        const cleanItemName = selectedItem.name.split(',')[0].trim();
        setSelectedItemName(cleanItemName);
    };

    return (
        <main className="bg-indigo-600" style={{display: 'flex', justifyContent: 'space-around'}}>
            <div>
                <h1 className="text-lg">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div>{selectedItemNae && <MealIdeas ingredient={selectedItemName} />}</div>
        </main>
    );
}