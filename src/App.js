import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductListing from './ProductListing'; 
import ProductDetails from './ProductDetails';
import Sidebar from './Sidebar';
import DashboardOverview from './DashboardOverview';
import RecentOrders from './RecentOrders';
import VerificationRequest from './VerificationRequest';


const Apps = () => {
    const [orders] = useState([
        { id: 'ORD001', customer: 'John Smith', amount: '124.50', status: 'Pending' },
        { id: 'ORD002', customer: 'Sarah Davis', amount: '228.25', status: 'Completed' },
        { id: 'ORD003', customer: 'Mike Johnson', amount: '78.85', status: 'Processing' },
        { id: 'ORD004', customer: 'Emma Wilson', amount: '149.40', status: 'Completed' }
    ]);
    const [totalOrders] = useState(45);
    const [pendingOrders] = useState(2);
    const [revenue] = useState('581.00');
    const [products] = useState(120);
    const [certifications] = useState(15);
    const [activePage] = useState('dashboard');
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleSidebar = () => setIsCollapsed(!isCollapsed);

    return (
        <div className="d-flex">
            <Sidebar activePage={activePage} isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
            <div className="flex-grow-1">
                <div className="container-fluid py-4 px-4">
                    <DashboardOverview 
                        totalOrders={totalOrders} 
                        pendingOrders={pendingOrders} 
                        revenue={revenue} 
                        products={products} 
                        certifications={certifications} />
                    <RecentOrders orders={orders} />
                    <VerificationRequest />
                </div>
            </div>
        </div>
    );
};


export const App = () => {
    return (
        <div className="d-flex">
                <Sidebar activePage="products" isCollapsed={false} toggleSidebar={() => {}} />
                <div className="flex-grow-1">
                    <Routes path="/products" >
                        <Route path="/products" element={<ProductListing />} />
                        <Route path="/products/:id" element={<ProductDetails />} />
                    </Routes>
                </div>
            </div>
    );
};

export default App;