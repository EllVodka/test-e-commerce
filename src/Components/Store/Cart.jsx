export function Cart() {
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
                    <tr>
                        <td className="border px-4 py-2 text-center">test</td>
                        <td className="border px-4 py-2 text-center">4254</td>
                        <td className="border px-4 py-2 text-center">$245</td>
                        <td className="border px-4 py-2 text-center">1</td>
                        <td className="border px-4 py-2 text-center">$15,569</td>
                    </tr>

                </tbody>
            </table>

            <div>
                <div className="flex flex-col justify- bg-blue-200 border-solid border-2  border-blue-500 rounded-lg py-2">
                    <h3 className="px-3 self-center">Résume</h3>
                    <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="flex justify-between gap-10 px-5">
                        <h3>Sous-Total</h3>
                        <h3>6$</h3>
                    </div>
                    <div className="flex justify-between  px-5">
                        <h3>Livraison</h3>
                        <h3>5$</h3>
                    </div>
                    <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="flex justify-between px-5">
                        <h3>Total</h3>
                        <h3>11.95$</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}