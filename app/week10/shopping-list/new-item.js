import { useState } from 'react';

const NewItem = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const handleSubmit = (event) => {
        event.preventDefault();
        const NewItem = {
            name: name,
            quantity: quantity,
            category: category
        };

        onAddItem(NewItem);
        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    console.log(item);
    alert('Name: ${name}, Quantity: ${quantity}, Category: ${category}');

    const handleName = (event) => {
        setName(event.target.value);
    };
    const handleQuantity = (event) => {
        setQuantity(event.target.value);
    };
    const handleCategory = (event) => {
        setCategory(event.target.value);
    }

    return(
        <div class="p-3 border rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} class="grid grid-cols-1 gap-3 sm:grid-cols-2 bg-blue-100 p-5">
                <label class="font-semibold text-sm mb-1">
                    Name:
                    <input type="text" value={name} onChange={handleName} required />
                </label>

                <label class="font-semibold text-sm mb-1">
                    Quantity:
                    <input type="number" value={quantity} onChange={(n) => setQuantity(Number(n.target.value))} 
                    min="1"
                    max="99"
                    required />
                </label>

                <label class="font-semibold text-sm mb-1">
                    Category:
                    <select value={category} onChange={handleCategory}>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen-foods">Frozen-Foods</option>
                        <option value="canned-goods">Canned-Goods</option>
                        <option value="dry-goods">Dry-Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>    
                    </select>
                </label>

                <button 
                    type="submit" 
                    class="text-stone-300 bg-blue-300 rounded-md hover:bg-blue-500">
                    Submit</button>
            </form>
        </div>
    );
};

export default NewItem;