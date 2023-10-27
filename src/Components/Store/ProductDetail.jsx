import { useState } from "react";
import { NavLink } from "react-router-dom";

export function ProductDetail(props ) {
    const { id, title, description, image, price } = props.product;
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value, 10));
    };

    return (
        <div className="container mx-auto my-8">
            <div className="flex">
                <div className="w-1/2">
                    <img src={image} alt="Produit 1" className="w-full" />
                </div>
                <div className="w-1/2 px-8">
                        <h1 className="text-3xl font-semibold mb-4">{title}</h1>
                    <p className="text-gray-700 mb-4">{description}</p>
                    <p className="text-blue-500 font-bold text-2xl mb-4">{price}</p>
                    <div className="flex items-center mb-4">
                        <label htmlFor="quantity" className="mr-4">Quantité:</label>
                        <input
                            type="number"
                            id="quantity"
                            className="border border-gray-300 px-2 py-1 rounded"
                            value={quantity}
                            onChange={handleQuantityChange}
                            min="1"
                        />
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Ajouter au Panier
                    </button>
                </div>
            </div>
        </div>
    );
}