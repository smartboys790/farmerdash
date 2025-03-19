import React from 'react';
import SalesChart from './SalesChart';

const salesData= [30,50,76,346,666,6436]
const Analytics = () => {
    const totalSales = 1234.56; // Example total sales amount
    const totalOrders = 50; // Example total number of orders
    return (
        <div>
            <div className="container py-4">
                <h1 className="mb-4">Sales Analytics</h1>
                <h2>Total Sales: ₹{totalSales.toFixed(2)}</h2>
                <h2>Total Orders: {totalOrders}</h2>
            </div>

            <div className="container py-3">
                <h2>Sales Analytics</h2>
                <SalesChart salesData={salesData} />
            </div>
        </div>
    );
};

export default Analytics;