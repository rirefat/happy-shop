import React from 'react';
import './Product.css'

const Product = (props) => {
    const {image,title, rating}=props.productData;
    return (
        <div>
            <div className="card">
                <img src={image} alt="" />
                <h3>{title}</h3>
                <p>Ratings: {rating.rate}</p>
            </div>
        </div>
    );
};

export default Product;