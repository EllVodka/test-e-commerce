import axios from "axios";
import React from "react";
import { ProductInfo } from "../Store/ProductInfo";


export class ProductList extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
        axios.get(`https://fakestoreapi.com/products`)
            .then(res => {
                // console.log(res.data);
                this.setState({ products: res.data });
            })
    }

    render() {
        return (
            <div className="w-3/4 grid grid-cols-3 gap-4">                
                {this.state.products.map(
                    product => <ProductInfo 
                    key={product.id}  
                    product={product} />)}
            </div>
        );

    }
}