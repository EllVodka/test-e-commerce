import { Link } from "react-router-dom";

function truncateDescription(description, maxLength) {
    if (description.length > maxLength) {
        return description.substring(0, maxLength) + "...";
    } else {
        return description;
    }
}

export function ProductInfo(props) {
    const { id, title, description, image, price } = props.product;
    const truncatedDescription = truncateDescription(description, 50);

    return (
        <div className="flex flex-col justify-between bg-white p-4 shadow rounded">
            <img className="w-full mb-2" src={image} alt={title} />
            <Link to={`/product/${id}`} >
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
            </Link>
            <p className="text-gray-600 mb-2">{truncatedDescription}</p>
            <div className="flex items-baseline justify-between">
                <span className="text-blue-500 font-bold">{price} $</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700">Ajouter au Panier</button>
            </div>
        </div>
    );
}
