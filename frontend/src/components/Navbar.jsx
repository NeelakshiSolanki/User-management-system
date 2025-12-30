import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // 🔴 Login se pehle navbar hide
  if (!token) return null;

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="navbar">
      <div>
        <Link to="/profile">Profile</Link>
        <Link to="/admin">Admin</Link>
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
