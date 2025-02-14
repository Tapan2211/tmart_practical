import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function OrderPlaced() {
    const location = useLocation();
    const navigate = useNavigate();
    const { total, items } = location.state || { total: 0, items: [] };

    return (
        <div className="container text-center mt-5">
            <h1 className="text-success">Order Placed Successfully!</h1>
            <p>Thank you for shopping with us.</p>
            <h4>Total Amount: ₹{total.toFixed(2)}</h4>
            <button className="btn btn-danger mt-3" onClick={() => navigate("/home")}>Go to Home</button>
        </div>
    );
}

export default OrderPlaced;