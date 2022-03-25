import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <h1 className='m-5 text-center'>Available Products</h1>
            {
                products.map(product=><Product productData={product} key={product.id}></Product>)
            }
        </div>
    );
};

export default Products;