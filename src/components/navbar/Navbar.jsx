import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Logo from "../logo/Logo";

const CustomNavbar = () => {
    const navigate = useNavigate();
    const count = useSelector((state) => state.cart.totalItems);
    const isLoggedIn = localStorage.getItem("loggedIn");

    const handleCartClick = () => {
        navigate('/cart');
    };

    const handleLogoClick = () => {
        navigate('/home');
    };

    const handleLogout = () => {
        localStorage.removeItem("loggedIn");
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
                        {isLoggedIn && (
                            <Button variant="danger" onClick={handleLogout}>
                                Logout
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;

// import styles from './Navbar.module.css';
// import Logo from "../logo/Logo";

// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// function Navbar() {

//     const navigate = useNavigate();
//     const count = useSelector((state) => state.cart.totalItems);

//     const handleClick = () => {
//         navigate('/cart');
//     }

//     const handlLogo = () => {
//         navigate('/home');
//     }
//     return (
//         <div className={styles.main}>
//             <Logo onClick={handlLogo} />
//             <div onClick={handleClick} send="TEST">
//                 <img className={styles.checkout} alt="checkout" src="https://profiles-fyi-shivam907.vercel.app/cart.svg" />
//                 <span className={styles.count}>
//                     <p>{count}</p>
//                 </span>
//             </div>

//         </div>

//     )
// }

// export default Navbar;