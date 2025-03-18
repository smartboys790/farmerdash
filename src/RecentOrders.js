import React from 'react';

const RecentOrders = ({ orders }) => {
    const getStatusClass = (status) => {
        const classes = {
            'Pending': 'status-pending',
            'Completed': 'status-completed',
            'Processing': 'status-processing'
        };
        return classes[status] || 'bg-secondary text-white';
    };

    return (
        <div className="bg-white rounded shadow p-4 mb-4">
            <h2 className="fs-5 fw-bold text-dark mb-3">Recent Orders</h2>
            <div className="table-responsive">
                <table className="table table-hover align-middle">
                    <thead className="table-light">
                        <tr>
                            <th className="text-uppercase small fw-medium text-secondary">Order ID</th>
                            <th className="text-uppercase small fw-medium text-secondary">Customer</th>
                            <th className="text-uppercase small fw-medium text-secondary">Amount</th>
                            <th className="text-uppercase small fw-medium text-secondary">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td className="small">{order.id}</td>
                                <td className="small">{order.customer}</td>
                                <td className="small">¥{order.amount}</td>
                                <td>
                                    <span className={`badge ${getStatusClass(order.status)}`}>
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentOrders;