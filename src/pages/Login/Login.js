import React, { useState } from "react";
import "./Login.css";
import axiosInstance from "../../auth/authHandler";
import { baseUrl } from "../../utils/urls";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    axiosInstance
      .post(`${baseUrl}/api/token/`, {
        email: email,
        password: password,
      })
      .then(
        (res) => {
          // console.log(res)
          localStorage.setItem("access_token", res.data.access);
          localStorage.setItem("refresh_token", res.data.refresh);
          axiosInstance.defaults.headers["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");
          if (res.status === 200) navigate("/");
        },
        (error) => {}
      );
  };
  return (
    <div className="login__main_container">
      <h1>Login</h1>

      <form onSubmit={handleLogin} className="login__form">
        <input
          type="text"
          placeholder="Email"
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <span
          className="sign__up_red"
          onClick={() => {
            navigate("/sign-up");
          }}
        >
          sign-up
        </span>
      </p>
    </div>
  );
};

export default Login;
