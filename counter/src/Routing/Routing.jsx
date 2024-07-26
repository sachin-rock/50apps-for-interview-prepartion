import { Routes, Route } from "react-router-dom"
import React from 'react'
import Navbar from "../Header/Navbar"
import Product from "../Product/Product"
import ProductDetails from "../ProductDetails/ProductDetails"
import Home from "../Home/Home"
const Routing = () => {
  return (
    <div>
<Navbar/>
<Routes>
<Route path="/home" element={<Home/>}/>
<Route path ="/Product" element={<Product/>}/>
<Route path="/ProductDetails/:id" element={<ProductDetails/>}/>
</Routes>
    </div>
  )
}

export default Routing