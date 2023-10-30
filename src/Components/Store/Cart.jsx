import { getCart, getTotalPrice } from "../Cart/cart";

export function Cart() {
    const cart = getCart();
    
    return (
        <div className="w-full flex justify-between gap-10">
            <table className="w-2/4 table-auto border border-blue-200 mt-4">
                <thead className="bg-blue-200">
                    <tr>
                        <th className="border px-4 py-2">Produit</th>
                        <th className="border px-4 py-2">Référence</th>
                        <th className="border px-4 py-2">Prix</th>
                        <th className="border px-4 py-2">Quantité</th>
                        <th className="border px-4 py-2">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product=><tr>
                        <td className="border px-4 py-2 text-center"><img src={product.image} className="max-w-[60px]" /></td>
                        <td className="border px-4 py-2 text-center">{product.id}</td>
                        <td className="border px-4 py-2 text-center">{product.price} $</td>
                        <td className="border px-4 py-2 text-center">{product.quantity}</td>
                        <td className="border px-4 py-2 text-center">{product.price * product.quantity} $</td>
                    </tr>)}
                    <tr>
                        
                    </tr>

                </tbody>
            </table>

            <div className=" flex flex-col justify-between">
                <div className="flex flex-col justify- bg-blue-200 border-solid border-2  border-blue-500 rounded-lg py-2">
                    <h3 className="px-3 self-center">Résume</h3>
                    <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="flex justify-between gap-10 px-5">
                        <h3>Sous-Total</h3>
                        <h3>{getTotalPrice()} $</h3>
                    </div>
                    <div className="flex justify-between  px-5">
                        <h3>Livraison</h3>
                        <h3>5 $</h3>
                    </div>
                    <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="flex justify-between px-5">
                        <h3>Total</h3>
                        <h3>{getTotalPrice() + 5} $</h3>
                    </div>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                       Commander
                    </button>
            </div>
        </div>
    );
}