import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

const Login = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      navigate("/home");
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="login">
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setLoginEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setLoginPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
      <p>
        Not a user?<Link to="/signup">SignUp</Link>
      </p>
    </div>
  );
};

export default Login;
