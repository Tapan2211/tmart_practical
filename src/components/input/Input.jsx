import React from "react";

const Input = ({ type, placeholder, value, onChange, name }) => {
    return (
        <div className="mb-3">
            <input
                type={type}
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                required
            />
        </div>
    );
};

export default Input;
