import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, updateUser } from "../redux/userSlice";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const UserList = () => {
  const users = useSelector((state) => state.users.users); // Get the list of users from Redux state
  const dispatch = useDispatch();

  const [editUserId, setEditUserId] = useState(null); // Track the user currently being edited
  const [editableData, setEditableData] = useState({ name: "", email: "" }); // Track the editable name and email

  // Start editing the user's data
  const handleEditClick = (user) => {
    setEditUserId(user.id);
    setEditableData({ name: user.name, email: user.email }); // Set the current values for editing
  };

  // Handle saving the updated data
  const handleSaveClick = (id) => {
    dispatch(updateUser({ id, ...editableData }));
    setEditUserId(null); // Exit edit mode after saving
  };

  // Handle input changes for the editable data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableData({ ...editableData, [name]: value });
  };

  // If no users are available, show the message with a link to add users
  if (users.length === 0) {
    return (
      <div>
        <p>
          No users found. Please{" "}
          <Link className="link-user-to-form" to="/form">
            add some users
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="user-item">
            {editUserId === user.id ? (
              // If the current user is being edited, show input fields for editing
              <div className="user-info">
                <input
                  type="text"
                  name="name"
                  value={editableData.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="email"
                  value={editableData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
            ) : (
              // If the user is not being edited, just show their info
              <div className="user-info">
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
              </div>
            )}
            <div className="user-actions">
              {editUserId === user.id ? (
                // Show "Save" button if currently editing
                <button onClick={() => handleSaveClick(user.id)}>Save</button>
              ) : (
                // Show "Edit" button if not currently editing
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={() => handleEditClick(user)}
                  style={{ cursor: "pointer", marginRight: "10px" }}
                  title="Edit user"
                />
              )}
              {/* Trash icon for deleting users */}
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => dispatch(deleteUser(user.id))}
                style={{ cursor: "pointer", color: "red" }}
                title="Delete user"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
