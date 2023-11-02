import axios from "axios";
import { ProductInfo } from "../Store/ProductInfo";
import { Sidebar } from "../Store/Sidebar";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

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
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            });
    }, []);

    let filteredProducts = products;
    if (category && category !== "all") {
        filteredProducts = products.filter(product => product.category === category);
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Sidebar categorys={extractCategories(products)} />
            <div className="w-3/4 grid grid-cols-1 gap-4 ml-44 sm:ml-52 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {filteredProducts.map(product => (
                    <ProductInfo key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}
