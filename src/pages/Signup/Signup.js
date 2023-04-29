import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/urls";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${baseUrl}/register/`, {
        username: username,
        password: password,
        email: email,
      })
      .then(
        (response) => {
          // console.log(response)
          if (response.status === 201) {
            navigate("/login");
          }
        },
        (error) => {
          // console.log(error)
        }
      );
  };
  return (
    <div className="login__main_container">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit} className="login__form">
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Sign up</button>
      </form>
      <p>
        Already have an account?
        <span
          className="sign__up_red"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default Signup;