import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
    saveProduct,
    listProducts,
    deleteProduct
} from '../actions/productActions';


function ProductsScreen(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [numReviews, setNumReviews] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [uploading, setUploading] = useState(false);
    const productList = useSelector((state) => state.productList);
    const { loading, products, error } = productList;

    const productSave = useSelector((state) => state.productSave);
    const {
        loading: loadingSave,
        success: successSave,
        error: errorSave
    } = productSave;

    const productDelete = useSelector((state) => state.productDelete);
    const {
      loading: loadingDelete,
      success: successDelete,
      error: errorDelete,
    } = productDelete;
    const dispatch = useDispatch();

    useEffect(() => {
        if (successSave) {
            setModalVisible(false);
        }
        dispatch(listProducts());
        return () => {
            //
        };
    }, [successSave, successDelete]);

    const openModal = (product) => {
        setModalVisible(true);
        setId(product._id);
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setCategory(product.category);
        setDescription(product.description);
        setRating(product.rating);
        setNumReviews(product.numReviews);
        setCountInStock(product.countInStock);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveProduct({
                _id: id,
                name,
                image,
                price,
                category,
                description,
                countInStock
            })
        );
    };

    const deleteHandler = (product) => {
        dispatch(deleteProduct(product._id));
    };

      const uploadFileHandler = (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('image', file);
        setUploading(true);
        axios
          .post('/api/uploads', bodyFormData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
            setImage(response.data);
            setUploading(false);
          })
          .catch((err) => {
            console.log(err);
            setUploading(false);
          });
      };

    return <div className="content content-margined">
        <div className="product-header">
            <h3>Products</h3>
            <button onClick={ () => openModal({}) }>Create Product</button>
        </div>
        {
            modalVisible &&
            <div className="form">
            <form onSubmit={ submitHandler }>
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
                        <input type="file" onChange={uploadFileHandler}></input>
                        {uploading && <div>Uploading...</div>}
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
                        <button type="submit" className="button primary">{id ? "Update" : "Create"}</button>
                        <br />
                        <button onClick={ () => setModalVisible(false)} type="button" className="button secondary">Back</button>
                    </li>
                </ul>

            </form>
            </div>
        }

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
                            <button onClick={ () => openModal(product)}>Edit</button>
                            <button onClick={ () => deleteHandler(product)}>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}

export default ProductsScreen;