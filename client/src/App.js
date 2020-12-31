import React from 'react';
import './App.css';

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
                       <li className="product">
                           <div className="image-container">
                               <img
                               src="/images/wooddesk1.jpg"
                               alt="product1"
                               className="product-image"
                               />
                           </div>
                           <div className="product-name">
                               <a href="product.html"> Wood Desk 1</a>
                           </div>
                           <div className="product-price">$700</div>
                           <div className="product-rating">4.5 Stars (10 Reviews)</div>
                       </li>
                       <li className="product">
                           <div className="image-container">
                               <img
                               src="/images/wooddesk2.jpg"
                               alt="product1"
                               className="product-image"
                               />
                           </div>
                           <div className="product-name">
                               <a href="product.html"> Wood Desk 2</a>
                           </div>
                           <div className="product-price">$500</div>
                           <div className="product-rating">4.5 Stars (10 Reviews)</div>
                       </li>
                       <li className="product">
                           <div className="image-container">
                               <img
                               src="/images/wooddesk3.jpg"
                               alt="product1"
                               className="product-image"
                               />
                           </div>
                           <div className="product-name">
                               <a href="product.html"> Wood Desk 3</a>
                           </div>
                           <div className="product-price">$900</div>
                           <div className="product-rating">4.5 Stars (10 Reviews)</div>
                       </li>
                       <li className="product">
                           <div className="image-container">
                               <img
                               src="/images/wooddesk4.jpg"
                               alt="product1"
                               className="product-image"
                               />
                           </div>
                           <div className="product-name">
                               <a href="product.html"> Wood Desk 4</a>
                           </div>
                           <div className="product-price">$750</div>
                           <div className="product-rating">4.5 Stars (10 Reviews)</div>
                       </li>
                       <li className="product">
                           <div className="image-container">
                               <img
                               src="/images/cornerdesk.jpg"
                               alt="product1"
                               className="product-image"
                               />
                           </div>
                           <div className="product-name">
                               <a href="product.html"> Corner Desk</a>
                           </div>
                           <div className="product-price">$1050</div>
                           <div className="product-rating">4.5 Stars (10 Reviews)</div>
                       </li>
                       <li className="product">
                           <div className="image-container">
                               <img
                               src="/images/u-shaped-desk.jpg"
                               alt="product1"
                               className="product-image"
                               />
                           </div>
                           <div className="product-name">
                               <a href="product.html"> U-Shaped Desk </a>
                           </div>
                           <div className="product-price">$2050</div>
                           <div className="product-rating">4.5 Stars (10 Reviews)</div>
                       </li>
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
