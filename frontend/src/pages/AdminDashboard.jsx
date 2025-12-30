import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    API.get("/users")
      .then(res => {
        // handle both array & object response
        if (Array.isArray(res.data)) {
          setUsers(res.data);
        } else if (res.data.users) {
          setUsers(res.data.users);
        } else {
          setUsers([]);
        }
      })
      .catch(err => {
        setError(err.response?.data?.msg || "Access denied");
      });
  }, []);

  if (error) {
    return (
      <div className="container">
        <div className="card">
          <h2>{error}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card" style={{ width: "500px" }}>
        <h2>Admin Dashboard</h2>

        {users.length === 0 && <p>No users to display</p>}

        {users.map(u => (
          <div
            key={u._id}
            style={{
              borderBottom: "1px solid #ddd",
              paddingBottom: "10px",
              marginBottom: "10px"
            }}
          >
            <p><b>Email:</b> {u.email}</p>
            <p><b>Role:</b> {u.role}</p>
            <p><b>Status:</b> {u.status || "active"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
