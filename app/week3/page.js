import Item from 'app/week3/item-list.js';

function page() {
    return (
        <main className="bg-indigo-600">
            <h1 className="text-lg">Shopping List</h1>
            <ItemList />
        </main>
    );
}

export default page;