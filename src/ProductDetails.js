import React from 'react';
import { useParams } from 'react-router-dom';

// Import images
import image1 from './Products/image1.png';
import image2 from './Products/image2.png';
import image3 from './Products/image3.png';
import image4 from './Products/image4.png';
import image5 from './Products/image5.png';
import image6 from './Products/image6.png';

const products = [
    { id: 1, name: 'Product 1', price: '100.00', description: 'Description for Product 1', images: [image1, image2, image3] },
    { id: 2, name: 'Product 2', price: '200.00', description: 'Description for Product 2', images: [image2, image3, image4] },
    { id: 3, name: 'Product 3', price: '300.00', description: 'Description for Product 3', images: [image3, image4, image5] },
    { id: 4, name: 'Product 4', price: '350.00', description: 'Description for Product 4', images: [image4, image5, image6] },
    { id: 5, name: 'Product 5', price: '310.00', description: 'Description for Product 5', images: [image5, image6, image1] },
    { id: 6, name: 'Product 6', price: '360.00', description: 'Description for Product 6', images: [image6, image1, image2] }
];

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container py-4">
            <h1 className="mb-4">{product.name}</h1>
            <div className="row">
                <div className="col-md-6">
                    {/* Carousel for images */}
                    <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {product.images.map((image, index) => (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                    <img src={image} className="d-block w-100" alt={product.name} />
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-md-6">
                    <h2>Price: ₹{product.price}/-</h2>
                    <p>{product.description}</p>
                    <button className="btn btn-success" style={{ backgroundColor: "#01c64b" }}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;