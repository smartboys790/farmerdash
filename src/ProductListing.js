// src/ProductListing.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
// Import images
import image1 from './Products/image1.png';
import image2 from './Products/image2.png';
import image3 from './Products/image3.png';
import image4 from './Products/image4.png';
import image5 from './Products/image5.png';
import image6 from './Products/image6.png';

const products = [
    { id: 1, name: 'Product 1', price: '100.00', description: 'Description for Product 1', image: 
        image1 },
    { id: 2, name: 'Product 2', price: '200.00', description: 'Description for Product 2', image: 
        image2 },
    { id: 3, name: 'Product 3', price: '300.00', description: 'Description for Product 3', image: 
        image3 },
    { id: 4, name: 'Product 4', price: '350.00', description: 'Description for Product 4', image: 
        image4 },
    { id: 5, name: 'Product 5', price: '310.00', description: 'Description for Product 5', image: 
        image5 },
    { id: 6, name: 'Product 6', price: '360.00', description: 'Description for Product 6', image: 
        image6 }
];

const ProductListing = () => {
    return (
        <div className="container py-4">
            <h1 className="mb-4">Product Listing</h1>
            <div className="row">
                {products.map(product => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card">
                            <img width={'192'} height={'192'}
                            src={product.image} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">Price:₹{product.price}/-</p>
                                <button className="btn btn-primary" style={{"background-color":' #01c64b',borderColor:'black',borderBlock:"none"}}>
                                    <Link to={`/products/${product.id}`} style={{"color":'white'}}>View Details</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListing; // Only one default export