import React from 'react';

const DashboardOverview = ({ totalOrders, pendingOrders, revenue, products, certifications }) => {
    return (
        <div className="bg-white rounded shadow p-4 mb-4">
            <h1 className="fs-4 fw-bold text-dark mb-3">Dashboard Overview</h1>
            <div className="row g-3">
                <div className="col-md-3 col-sm-6">
                    <div className="border rounded p-3 h-100">
                        <div className="small text-secondary text-uppercase fw-medium">Total Orders</div>
                        <div className="d-flex align-items-center mt-2">
                            <span className="fs-3 fw-bold">{totalOrders}</span>
                            <span className="ms-2 badge status-pending">{pendingOrders} pending</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="border rounded p-3 h-100">
                        <div className="small text-secondary text-uppercase fw-medium">Revenue</div>
                        <div className="fs-3 fw-bold mt-2">₹{revenue}</div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="border rounded p-3 h-100">
                        <div className="small text-secondary text-uppercase fw-medium">Products</div>
                        <div className="fs-3 fw-bold mt-2">{products}</div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="border rounded p-3 h-100">
                        <div className="small text-secondary text-uppercase fw-medium">Certifications</div>
                        <div className="fs-3 fw-bold mt-2">{certifications}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;