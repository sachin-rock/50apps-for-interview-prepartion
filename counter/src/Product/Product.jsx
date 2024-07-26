import React from "react";
import "./Product.css";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  return (
    <div className="container">
      {products.map((product) => {
        return (
          <div className="wrapper">
            <img className="img" src={product.image} alt={product.image} />
            <p>{product.title}</p>
            <h3>price - {product.price}$</h3>
            <button className="btn-grad" onClick={()=>navigate(`/ProductDetails/${product.id}`)}>View Details</button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;