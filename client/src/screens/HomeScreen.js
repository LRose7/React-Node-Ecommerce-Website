import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


function HomeScreen (props) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("http://localhost:5000/api/products/");
            setProducts(data);
        }
        fetchData();
        return () => {
            //
        };
    }, [])


    return   <section id="products" className="products"><header className="hero">
        <div className="banner">
            <h1 className="banner-title">Fine Desks Collection</h1>
            <a href="#products-center" className="banner-btn">shop now</a>
        </div>
        </header>
        <div id="products-center" className="products-center">
        <div className="section-title">
            <h2>Our Products</h2>
        </div>
        <ul className="products-list">
        {
            products.map(product =>
            <li className="product" key={product._id}>
            <div className="image-container">
            <NavLink to={"/product/" + product._id}> <img
                src={product.image}
                alt="product1"
                className="product-image"
                />
            </NavLink>

            </div>
            <div className="product-name">
                <NavLink to={"/product/" + product._id}> {product.name}</NavLink>
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
}

export default HomeScreen;