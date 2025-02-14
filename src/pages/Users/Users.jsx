import React, { useState } from "react";
import UserList from "../../components/users/UserList";
import UserForm from "../../components/users/UserForm";

const UsersPage = () => {
    const [userToEdit, setUserToEdit] = useState(null);

    return (
        <div>
            <UserForm userToEdit={userToEdit} setUserToEdit={setUserToEdit} />
            <UserList onEdit={setUserToEdit} />
        </div>
    );
};

export default UsersPage;
