import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify({ username, email, password }));
        alert("Signup Successful! Redirecting to Login.");
        navigate("/");
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow" style={{ width: "25rem" }}>
                <h3 className="text-center text-danger mb-4">Sign Up</h3>
                <form onSubmit={handleSignUp}>

                    <Input
                        label="Username"
                        type="username"
                        placeholder="Enter your name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

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
                        Sign Up
                    </button>
                </form>
                <p className="text-center mt-3">
                    Already have an account?{" "}
                    <span
                        className="text-danger cursor-pointer"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/")}
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
