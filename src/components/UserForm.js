import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../redux/userSlice";

const UserList = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  if (users.length === 0) {
    return <p>No users found. Please add some users.</p>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}{" "}
            <button onClick={() => dispatch(deleteUser(user.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
