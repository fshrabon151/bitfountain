import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [iSLogin, SetIsLogin] = useState(false);
  const token = localStorage.getItem("token");
  const login = {
    email,
    password,
  };
  useEffect(() => {
    if (token != null) {
      SetIsLogin(true);
    }
  }, [token]);
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("api/login", login)
      .then((response) => {
        localStorage.setItem("token", response.data.access_token);
        SetIsLogin(true);
      })
      .catch((err) => {
        console.log(err);
        SetIsLogin(false);
        toast.error("Invalid Email/Password");
      });
  };

  return iSLogin ? (
    <Redirect from="/" to="/modeltype"></Redirect>
  ) : (
    <>
      <div className="container">
        <ToastContainer />
        <h3 className="text-center my-3">Login Please</h3>

        <form className="w-75 mx-auto" onSubmit={formSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={email}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Email"
              name="password"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              defaultValue={password}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
      </div>
    </>
  );
};

export default Login;
