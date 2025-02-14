import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CardSlice";

const ProductCard = ({ send }) => {
    const { name, description, price, img } = send;
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addItem(send));
    };

    return (
        <Card className="shadow-sm border-0 rounded text-center p-2" style={{ width: "18rem" }}>
            {/* Image Wrapper with Overflow Hidden */}
            <div className="position-relative overflow-hidden bg-light rounded" style={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Card.Img
                    variant="top"
                    src={img}
                    alt="product"
                    className="img-fluid"
                    style={{ height: "100%", width: "100%", objectFit: "contain", transition: "0.3s ease-in-out", cursor: "pointer" }}
                    onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                    onMouseOut={(e) => e.target.style.transform = "scale(1.0)"}
                />
            </div>

            {/* Product Details */}
            <Card.Body>
                <Card.Title className="fs-6 fw-bold">{name}</Card.Title>
                <Card.Text className="text-muted small">{description}</Card.Text>
                <h5 className="fw-bold text-dark">₹{price}</h5>

                {/* Add to Cart Button */}
                <Button variant="light" className="w-100 mt-2 d-flex align-items-center justify-content-center border" onClick={handleClick}>
                    <span className="me-2">Add to Cart</span>
                    <img src="https://profiles-fyi-shivam907.vercel.app/cart.svg" alt="cart" width="18" height="18" />
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
