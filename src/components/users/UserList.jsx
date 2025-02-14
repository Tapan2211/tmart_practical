import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../redux/userSlice";

const UserList = ({ onEdit }) => {
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();

    return (
        <div className="container mt-4">
            <h2>User List</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn btn-warning me-2" onClick={() => onEdit(user)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
