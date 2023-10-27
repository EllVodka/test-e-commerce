import { ProductDetail } from "../Store/ProductDetail";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export function ProductId() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching product data: ", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>; // Afficher un message de chargement pendant que les données sont récupérées
    }

    return (
        <ProductDetail product={product} />
    );
}
