import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveProduct, listProducts } from '../actions/productActions';


function ProductsScreen(props) {

    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const productList = useSelector((state) => state.productList);
    const { loading, products, error } = productList;
    const productSave = useSelector((state) => state.productSave);
    const {
        loading: loadingSave,
        error: errorSave
    } = productSave;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());

        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveProduct({
                name,
                image,
                price,
                category,
                description,
                countInStock
            })
        );
    }

    return <div className="content content-margined">
        <div className="product-header">
            <h3>Products</h3>
            <button className="button primary">Create Product</button>
        </div>
    <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Create Product</h2>
                </li>
                <li>
                    { loadingSave && <div>Loading...</div> }
                    { errorSave && <div>{ errorSave }</div> }
                </li>
                <li>
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    name="name"
                    value={name}
                    id="name"
                    onChange={(e) => setName(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="image">Image</label>
                    <input
                    type="text"
                    name="image"
                    value={image}
                    id="image"
                    onChange={(e) => setImage(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="price">Price</label>
                    <input
                    type="number"
                    name="price"
                    value={price}
                    id="price"
                    onChange={(e) => setPrice(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="category">Category</label>
                    <input
                    type="text"
                    name="category"
                    value={category}
                    id="category"
                    onChange={(e) => setCategory(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="description">Description</label>
                    <textarea
                    name="description"
                    value={description}
                    id="description"
                    onChange={(e) => setDescription(e.target.value)}>
                    </textarea>
                </li>
                <li>
                    <label htmlFor="countInStock">Count In Stock</label>
                    <input
                    type="number"
                    name="countInStock"
                    value={countInStock}
                    id="countInStock"
                    onChange={(e) => setCountInStock(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type="submit" className="button primary">Create</button>
                </li>
            </ul>

        </form>
        </div>
        <div className="product-list">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                    <tr>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    </div>
}

export default ProductsScreen;