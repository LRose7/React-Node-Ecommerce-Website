import React from 'react';
import './App.css';
import data from './data';

function App() {

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  }
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  }


  return (

    <div className="grid-container">
       <nav className="navbar">
           <div className="navbar-center">
               <div className="brand">
                   <button onClick={openMenu}>&#9776;</button>
               </div>
               <div className="logo-title">
                   <h1><img className="logo-img" src="./images/JALogo2.PNG" alt="logo" />
                      Fine Desks</h1>
               </div>
               <div className="nav-links">
                   <a href="signin.html" className="nav-link">Signin</a>
                   <div className="cart-btn">
                       <span className="nav-icon">
                           <a href="index.html"><i className="fas
                                   fa-shopping-cart"></i></a>
                       </span>
                       <div className="cart-items">0</div>
                   </div>
               </div>
           </div>
       </nav>
       <aside className="sidebar">
           <button className="sidebar-close-button" onClick={closeMenu}>
             x
           </button>
           <div className="sidebar-title">
               <h3>Shopping Categories</h3>
           </div>
           <ul className="sidebar-list">
               <li><a href="index.html">Corner Desks</a></li>

               <li><a href="index.html">Student Desks</a></li>

               <li><a href="index.html"> Writing Desks</a></li>

               <li><a href="index.html">Executive Desks</a></li>

               <li><a href="index.html">Credenza Desks</a></li>

               <li><a href="index.html">Floating Desks</a></li>

               <li><a href="index.html">Standing Desks</a></li>
           </ul>
       </aside>
       <main className="main">
           <header className="hero">
               <div className="banner">
                   <h1 className="banner-title">Fine Desks Collection</h1>
                   <a href="#products" className="banner-btn">shop now</a>
               </div>
           </header>
           <section id="products" className="products">
               <div className="section-title">
                   <h2>Our Products</h2>
               </div>
               <div className="products-center">
                   <ul className="products-list">
                       {
                           data.products.map(product =>
                            <li className="product">
                            <div className="image-container">
                                <img
                                src={product.image}
                                alt="product1"
                                className="product-image"
                                />
                            </div>
                            <div className="product-name">
                                <a href="product.html"> {product.name}</a>
                            </div>
                            <div className="product-type">{product.type}</div>
                            <div className="product-price">${product.price}</div>
                            <div className="product-rating">{product.rating} Stars ({product.numReviews})</div>
                        </li>
                            )
                       }
                   </ul>
               </div>
           </section>
       </main>
       <footer className="footer">
           <p>&copy; 2020 All Rights Reserved.</p>
       </footer>
   </div>
  );
}

export default App;
