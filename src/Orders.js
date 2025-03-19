import React from 'react';

const Orders = () => {
    const orders = [
        { id: 1, product: 'Tender Coconut', quantity: 2, total: 138 },
        { id: 2, product: 'Product 2', quantity: 1, total: 200 },
        { id: 3, product: 'Product 3', quantity: 3, total: 900 },
    ];

    return (
        <div className="container py-4">
            <h1 className="mb-4">Incoming Orders</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.product}</td>
                            <td>{order.quantity}</td>
                            <td>₹{order.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;