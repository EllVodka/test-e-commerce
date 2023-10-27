export function ProductInfo(product) {
    return (
        <div className="bg-white p-4 shadow rounded">
            <img className="w-full mb-2" srcSet={product.image} />
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <span className="text-blue-500 font-bold">{product.price}</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700">Ajouter au Panier</button>
        </div>
    )
}