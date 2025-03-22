import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './ProductListing'; 
import ProductDetails from './ProductDetails';
import Sidebar from './Sidebar';
import DashboardOverview from './components/DashboardOverview';
import RecentOrders from './components/RecentOrders';
import VerificationRequest from './VerificationRequest';
import Products from './components/Products';
import Analytics from './Analytics';
import Orders from './components/Orders';
import Dashboard from './components/Dashboard';
import './App.css';

const FarmerDashboard = () => {
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
    const [rating] = useState(4.5);
    return (
            <div className="container-fluid py-4 px-4">
                                <DashboardOverview 
                                    totalOrders={totalOrders} 
                                    pendingOrders={pendingOrders} 
                                    revenue={revenue} 
                                    products={products} 
                                    rating={rating} />
                                <RecentOrders orders={orders} />
                                <Products />
                                <Orders />
                                <Dashboard />
        </div>
    );
};

const App = () => {

    return (
        // <Router>
            <div className="d-flex">
                {/* <Sidebar activePage="dashboard" isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} /> */}
                <div className="flex-grow-1">
                    <Routes>
                        <Route path="/dashboard" element={<FarmerDashboard />}/>
                    </Routes>
                </div>
            </div>
        // </Router>
    );




};

export default App;
