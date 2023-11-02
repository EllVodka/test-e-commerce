import { useEffect, useState } from "react";
import { changeQuantity, deleteCart, getCart, getNumberProduct, getTotalPrice, saveCart } from "../Cart/cart";

export function Cart() {
    const initialCart = getCart();
    const [cart, setCart] = useState(initialCart);

    useEffect(() => {
        saveCart(cart);
    }, [cart]);

    const changeQuantityLocal = (product, quantity) => {
        changeQuantity(product, quantity)
        setCart(getCart());
    };

    return (
        <div className="w-full flex flex-col justify-between gap-10 px-3 content-stretch md:flex-row md:px-0">
            {getNumberProduct() === 0 ? <p>Aucun article est dans le panier</p> : (
                <div className="flex flex-col justify-between content-stretch gap-5 md:w-2/3">
                    <table className=" table-auto border border-blue-200 mt-4">
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
                            {cart.map(product =>
                                <tr key={product.id}>
                                    <td className="border px-4 py-2 text-center"><img src={product.image} className="max-w-[60px]" /></td>
                                    <td className="border px-4 py-2 text-center">{product.id}</td>
                                    <td className="border px-4 py-2 text-center">{product.price} $</td>
                                    <td className="border px-4 py-2 text-center">
                                        <button
                                            onClick={() => changeQuantityLocal(product, -1)}
                                            className="bg-blue-200 px-2 rounded-lg mr-2 hover:bg-blue-300">-</button>
                                        {product.quantity}
                                        <button
                                            onClick={() => changeQuantityLocal(product, 1)}
                                            className="bg-blue-200 px-2 rounded-lg ml-2 hover:bg-blue-300">+</button>
                                    </td>
                                    <td className="border px-4 py-2 text-center">{(product.price * product.quantity).toFixed(1)} $</td>
                                </tr>)}
                            <tr>

                            </tr>

                        </tbody>
                    </table>
                    <button onClick={() => deleteCart()} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 md:w-2/5 md:self-center xl:w-1/3">Supprimer panier</button>
                </div>
            )}

            <div className=" flex flex-col justify-between gap-4 md:w-1/3">
                <div className="flex flex-col justify- bg-blue-200 border-solid border-2  border-blue-500 rounded-lg py-2">
                    <h3 className="px-3 self-center">Résume</h3>
                    <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="flex justify-between gap-10 px-5">
                        <h3>Sous-Total</h3>
                        <h3>{getTotalPrice().toFixed(1)} $</h3>
                    </div>
                    <div className="flex justify-between  px-5">
                        <h3>Livraison</h3>
                        <h3>5 $</h3>
                    </div>
                    <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="flex justify-between px-5">
                        <h3>Total</h3>
                        <h3>{(getTotalPrice() + 5).toFixed(1)} $</h3>
                    </div>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 lg:w-3/5 lg:self-center">
                    Commander
                </button>
            </div>
        </div>
    );
}