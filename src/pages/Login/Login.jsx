import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            const user = JSON.parse(storedUser);
            console.log("Data", user);
            if (user.email === email && user.password === password) {
                alert("Login Successful!");
                localStorage.setItem("loggedIn", "true");
                navigate("/home"); // Redirect to Home
            } else {
                alert("Invalid email or password!");
            }
        } else {
            alert("User not found. Redirecting to Sign Up.");
            navigate("/register");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow" style={{ width: "25rem" }}>
                <h3 className="text-center text-danger mb-4">Login</h3>
                <form onSubmit={handleLogin}>
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="btn btn-danger w-100">
                        Login
                    </button>
                </form>
                <p className="text-center mt-3">
                    Not registered?{" "}
                    <span
                        className="text-danger cursor-pointer"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/signup")}
                    >
                        Sign Up
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
