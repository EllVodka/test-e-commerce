import axios from "axios";
import { ProductInfo } from "../Store/ProductInfo";
import { Sidebar } from "../Store/Sidebar";
import { useEffect, useState } from "react";

function extractCategories(jsonData) {
    const categories = new Set();
    jsonData.forEach(item => {
        if ("category" in item) {
            categories.add(item.category);
        }
    });
    return Array.from(categories);
}

export function ProductList() {
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
            .then(res => {
                setProducts(res.data);
                setLoading(false)
            });
    }, [ ]);


    if(loading){
        return <div>Loading...</div>
    }

    return (
        <>
            <Sidebar categorys={extractCategories(products)} />
            <div className="w-3/4 grid grid-cols-3 gap-4">
                {products.map(
                    product => <ProductInfo
                        key={product.id}
                        product={product} />)}
            </div>
        </>
    );


}