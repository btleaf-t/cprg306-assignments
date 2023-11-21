"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ItemList from './item-list.js';
import NewItem from './new-item';
import MealIdeas from './meal-ideas.js';
import { useUserAuth } from '../_utils/auth-context.js';    
import { getItems, addItem } from './_services/shopping-list-service';

export default function page() {
    const {user} = useUserAuth();
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    useEffect(() => {
        loadItems(); 
    }, [user]);

    const loadItems = async () => {
        if (user) {
            const userItems = await getItems(user.uid);
            setItems(userItems);
        }
    };

    const handleAddItem = async (newItem) => {
        const newItemId = await addItem(user.uid, newItem);
        setItems([...items, { id: newItemId, ...newItem }]);
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