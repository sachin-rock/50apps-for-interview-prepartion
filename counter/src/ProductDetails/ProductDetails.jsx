import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(res => setProduct(res))
    }, [id]);

    console.log(product);

    return (
        <div className="product-container">
            <h1 className="product-title">{product.title}</h1>
            <img className="product-image" src={product.image} alt={product.title} />
            <h3 className="product-description">{product.description}</h3>
            <h3 className="product-price">${product.price}</h3>
        </div>
    );
};

export default ProductDetails;
