import ItemList from 'app/week5/item-list.js';

export default function page() {
    return (
        <main className="bg-indigo-600">
            <h1 className="text-lg">Shopping List</h1>
            <ItemList />
        </main>
    );
}