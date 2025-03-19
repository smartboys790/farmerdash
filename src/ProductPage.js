import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductListing from './ProductListing';
import ProductDetails from './ProductDetails';
import Sidebar from './Sidebar'; // Assuming you have a sidebar component

const ProductPage = () => {
    return (
        <div className="d-flex">
            <Sidebar activePage="products" isCollapsed={false} toggleSidebar={() => {}} />
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