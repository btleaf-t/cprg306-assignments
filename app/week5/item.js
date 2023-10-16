const Item = ({name, quantity, category}) => {
    return(
        <li className="bg-white p-4">
            <p className="text-lg font-semibold ">Name: {name}</p>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </li>
    );
};

export default Item;