"use client";
import { useState } from 'react';
import Link from 'next/link';
import ItemList from './item-list.js';
import NewItem from './new-item';
import itemsData from './items.json';

export default function page() {
    const [items, setItems] = useState(itemsData);
    const handleAddItem = (newItem) => {setItems([...items, newItem])};

    return (
        <main className="bg-indigo-600">
            <h1 className="text-lg">Shopping List</h1>
            <ItemList />
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}