import React from "react";
import "./home.css";
import logo from "../assests/logo.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Register from "./register/register";
import Login from "./login/login";

const Home = () => {
  return (
    <header>
      <div className="header_logo">
        <img className="header_logimg" src={logo} alt="header_log" />
      </div>
      <section className="section">
        <h1>Login / Register</h1>
        <p>
          <span>Home</span> <ArrowForwardIosIcon className="rightarrow" /> Login
          / Register
        </p>
      </section>
      <div className="form_section">
        <Login />
        <Register />
      </div>
    </header>
  );
};

export default Home;
