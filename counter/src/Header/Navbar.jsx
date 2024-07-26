import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
    <div className='logo'>MyApp</div>
    <ul className='navLinks'>
      <li><a href="/home">Home</a></li>
      <li><a href="/product">Product</a></li>
      <li><a href="/">Services</a></li>
      <li><a href="/">Contact</a></li>
    </ul>
  </nav>
  )
}

export default Navbar
