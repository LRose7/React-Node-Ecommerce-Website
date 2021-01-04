import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from "./screens/CartScreen";
import SigninScreen from './screens/SigninScreen';

function App() {

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  }
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  }


  return (
    <BrowserRouter>
    <div className="grid-container">
       <nav className="navbar">
           <div className="navbar-center">
               <div className="brand">
                   <button onClick={openMenu}>&#9776;</button>
               </div>
               <div className="logo-title">
                   <h1><img className="logo-img" src="./images/JALogo2.PNG" alt="logo" />
                     <NavLink
                     to='/'
                     activeStyle={{color: 'teal'}}> Fine Desks</NavLink></h1>
               </div>
               <div className="nav-links">
                   <NavLink to="/signin" className="nav-link">Sign in</NavLink>
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
                <Route path="/" exact="true" component={HomeScreen}></Route>
                <Route path="/signin" component={SigninScreen}></Route>
                <Route path="/product/:id" component={ProductScreen}></Route>
                <Route path="/cart/:id?" component={CartScreen}></Route>
        </main>
       <footer className="footer">
           <p>&copy; 2020 Fine Desks All Rights Reserved.</p>
       </footer>
   </div>
   </BrowserRouter>
  );
}

export default App;
