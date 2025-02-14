import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../redux/userSlice";
import Navbar from '../navbar/Navbar'

const UserForm = ({ userToEdit, setUserToEdit }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (userToEdit) {
            setName(userToEdit.name);
            setEmail(userToEdit.email);
        } else {
            setName("");
            setEmail("");
        }
    }, [userToEdit]);

    const handleSubmit = e => {
        e.preventDefault();
        if (userToEdit) {
            dispatch(updateUser({ id: userToEdit.id, name, email }));
        } else {
            dispatch(addUser({ name, email }));
        }
        setUserToEdit(null);
        setName("");
        setEmail("");
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-4">

                <h2>{userToEdit ? "Edit User" : "Add User"}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary">{userToEdit ? "Update" : "Add"} User</button>
                </form>
            </div></div>

    );
};

export default UserForm;
