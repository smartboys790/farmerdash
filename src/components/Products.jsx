import React, { useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescript, setProductDescript] = useState('');
    const [productWeight, setProductWeight] = useState('');
    const [productStatus, setProductStatus] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productImage, setProductImage] = useState(null); // Change the initial state to null

    const handleFileUpload = (event) => {
        const file = event.target.files[0]; // Get the first selected file
        if (file) {
            setProductImage(file);
        }
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        const newProduct = {
            id: products.length + 1,
            name: productName,
            price: productPrice,
            Description: productDescript,
            weight: productWeight,
            status: productStatus,
            soldby: "Bio Coders",
            image: URL.createObjectURL(productImage) // Create a URL for the uploaded image
        };

        setProducts([...products, newProduct]);
        // Reset states
        setProductName('');
        setProductPrice('');
        setProductDescript('');
        setProductWeight('');
        setProductStatus('');
        setProductImage(null); // Reset the image
    };

    return (
        <div className="container py-4">
            <h1 className="mb-4 text-center">Manage Products</h1>
            <form onSubmit={handleAddProduct}>
                <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Price</label>
                    <input
                        type="number"
                        className="form-control"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Description</label>
                    <input
                        type="text"
                        className="form-control"
                        value={productDescript}
                        onChange={(e) => setProductDescript(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Status</label>
                    <input
                        type="text"
                        className="form-control"
                        value={productStatus}
                        onChange={(e) => setProductStatus(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Weight (KG)</label>
                    <input
                        type="number"
                        className="form-control"
                        value={productWeight}
                        onChange={(e) => setProductWeight(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Quantity</label>
                    <input
                        type="number"
                        className="form-control"
                        value={productQuantity}
                        onChange={(e) => setProductQuantity(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Image</label>
                    <input
                        type="file" // Change this to 'file'
                        className="form-control"
                        onChange={handleFileUpload}
                        accept="image/*" // Accept all image types
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>

            <h2 className="mt-4">Product List</h2>
            <ul className="list-group">
                {products.length === 0 && <li className="list-group-item text-center">No products available.</li>}
                {products.map((product) => (
                    <li key={product.id} className="list-group-item">
                        <h4>Name: {product.name} </h4>
                        <h5>Price: ₹{product.price}</h5>
                        <h5>Quantity: {productQuantity}</h5>
                        <h5>Product Description: {product.Description}</h5>
                        <h5>Product Weight: {product.weight} KG</h5>
                        <h5>Product Status: {product.status}</h5>

                        {product.image && <img src={product.image} alt={product.name} style={{width: '100px', height: 'auto'}} />} {/* Display the uploaded image */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
