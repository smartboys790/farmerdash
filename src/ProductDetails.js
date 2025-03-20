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
    {id: 1,
        name: 'Tender Coconut Cling Wrapped (1 pc)',
        weight: 'Approx 900 g - 1300 g',
        price: 69.00,
        description: `Taste the deliciously refreshing and light liquid Coconut Water, inside the coir sac of a green coconut. Coconut water inside the coir sac is white in colour with a distinct hint of sweetness to it, like fresh natural spring water. Apart from its refreshing properties, tender coconut water can also be used as an adjunct in food products such as cakes, salsas & smoothies. So, go ahead, buy Tender Coconut 1 pc (Approx 900 g - 1300 g) online now!`,
        stockStatus: 'In Stock',
        deliveryTime: 'Delivery in 10 to 30 mins',
        soldBy: 'Reliance Retail',
        customerCare: '1800 890 1222',
        countryOfOrigin: 'India',
        images: [image1, image2, image5] },
    { id: 6, name: 'Product 6', weight:'kg', price: '100.00', description: 'Description for Product 1', stockStatus:'In Stock', deliveryTime:' ', soldBy:'abc', customerCare:'',countryOfOrigin:'India', images: [image1, image2, image3] },
    { id: 2, name: 'Product 2',weight:'kg', price: '200.00', description: 'Description for Product 2',stockStatus:'In Stock', deliveryTime:' ', soldBy:'abc', customerCare:'',countryOfOrigin:'India', images: [image2, image3, image4] },
    { id: 3, name: 'Product 3',weight:'kg', price: '300.00', description: 'Description for Product 3',stockStatus:'In Stock', deliveryTime:' ', soldBy:'abc', customerCare:'',countryOfOrigin:'India', images: [image3, image4, image5] },
    { id: 4, name: 'Product 4',weight:'kg', price: '350.00', description: 'Description for Product 4',stockStatus:'In Stock', deliveryTime:' ', soldBy:'abc', customerCare:'',countryOfOrigin:'India', images: [image4, image5, image6] },
    { id: 5, name: 'Product 5',weight:'kg', price: '310.00', description: 'Description for Product 5',stockStatus:'In Stock', deliveryTime:' ', soldBy:'abc', customerCare:'',countryOfOrigin:'India', images: [image5, image6, image1] },
    { id: 6, name: 'Product 6',weight:'kg', price: '360.00', description: 'Description for Product 6',stockStatus:'In Stock', deliveryTime:' ', soldBy:'abc', customerCare:'',countryOfOrigin:'India', images: [image6, image1, image2] }
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
                    <h2>Price:</h2><h3> ₹{product.price} (Incl. of all taxes)</h3>
                    <br></br>
                    
                    <p><strong><h2>Weight:</h2> {product.weight}</strong></p><br></br>
                    <p><strong><h2>Status: </h2>{product.stockStatus}</strong></p><br></br>
                    <p><strong><h2>Delivery: </h2>{product.deliveryTime}</strong></p><br></br>
                    <p><strong><h2>Sold By:</h2> {product.soldBy}</strong></p><br></br>
                    <p><strong><h2>Customer Care: </h2>{product.customerCare}</strong></p><br></br>
                    <h5>Offers:</h5>
                    {/* <ul>
                        {product.offers.map((offer, index) => (
                            <li key={index}>{offer}</li>
                        ))}
                    </ul> */}
                    <button className="btn btn-success" style={{ backgroundColor: "#01c64b" }}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;