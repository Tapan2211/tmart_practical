import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Logo from "../logo/Logo";
import { useAuth } from "../../context/AuthContext";

const CustomNavbar = () => {
    const navigate = useNavigate();
    const count = useSelector((state) => state.cart.totalItems);
    const isLoggedIn = localStorage.getItem("loggedIn");
    const data = localStorage.getItem('user');
    const userData = JSON.parse(data);
    const firstLetter = userData.username ? userData.username.charAt(0).toUpperCase() : "";
    const { isAuthenticated, logout } = useAuth();

    console.log("USERNAME", userData.username)

    const handleCartClick = () => {
        navigate('/cart');
    };

    const handleLogoClick = () => {
        navigate('/home');
    };

    const handleLogout = () => {
        // localStorage.removeItem("loggedIn");
        logout();
        navigate("/");
    };

    const handleUsers = () => {
        navigate('/users')
    }

    return (
        <Navbar bg="light" expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand onClick={handleLogoClick} style={{ cursor: "pointer" }}>
                    <Logo />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center gap-2">

                        {/* Cart Button with Count */}
                        <div className="position-relative me-3" onClick={handleCartClick} style={{ cursor: "pointer" }}>
                            <img
                                src="https://profiles-fyi-shivam907.vercel.app/cart.svg"
                                alt="Cart"
                                width="30"
                                height="30"
                            />
                            {count > 0 && (
                                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                                    {count}
                                </span>
                            )}
                        </div>

                        {/* User List */}
                        <Button variant="danger" onClick={handleUsers} >
                            Users
                        </Button>

                        {/* Logout Button (Only if Logged In) */}
                        {/* {isLoggedIn && ( */}
                        {isAuthenticated && (
                            <div className="d-flex gap-2">
                                <Button variant="danger" onClick={logout}>
                                    Logout
                                </Button>

                                <div
                                    className="d-flex align-items-center justify-content-center rounded-circle bg-danger text-white"
                                    style={{ width: "40px", height: "40px", fontSize: "18px", fontWeight: "bold" }}
                                >
                                    {firstLetter}
                                </div>
                            </div>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;