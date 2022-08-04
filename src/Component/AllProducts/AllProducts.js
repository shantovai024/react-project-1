import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = (props) => {
    let {setCartCount} = props

let [products, setProducts] = useState([])

useEffect ( ()=> {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
}, [])

console.log(products);

    return (
        <div>
            <h2>All Products</h2>
            <div className="container">
            <div className="row">
            {
                products.map(product=> <SingleProduct
                     product = {product}
                     setCartCount = {setCartCount}
                    //  key = {Math.random()}
                     key = {product.id}
                     ></SingleProduct> ) 
            }
            </div>
            </div>
        </div>
    );
};

export default AllProducts;