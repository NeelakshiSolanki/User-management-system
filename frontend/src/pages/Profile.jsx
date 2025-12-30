import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    API.get("/auth/me").then(res => setUser(res.data));
  }, []);

  return (
    <div className="container">
      <div className="profile-card">
        <h2>My Profile</h2>
        <p><b>Name:</b> {user.fullName}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Role:</b> {user.role}</p>
      </div>
    </div>
  );
}
