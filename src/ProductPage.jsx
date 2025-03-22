import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductListing from './ProductListing';
import ProductDetails from './ProductDetails';

const ProductPage = () => {
    return (
        <div className="d-flex">
            <div className="flex-grow-1">
                <Routes> 
                    <Route path="/products" element={<ProductListing />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>
            </div>
        </div>
    );
};

export default ProductPage;
