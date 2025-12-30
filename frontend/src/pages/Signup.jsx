import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const signup = async () => {
    await API.post("/auth/signup", { fullName, email, password });
    nav("/");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Signup</h2>

        <input
          placeholder="Full Name"
          onChange={e => setFullName(e.target.value)}
        />
        <input
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
         <p style={{ textAlign: "center" }}>
  Already have an account? <a href="/">Login</a>
</p>

        <button onClick={signup}>Signup</button>
      </div>
      
    </div>
  );
}
