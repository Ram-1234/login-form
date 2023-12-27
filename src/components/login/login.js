import React from "react";
import "./login.css";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

const Login = () => {
  return (
    <div className="loginbox">
      <div className="login_form_logo">
        <img
          className="login_logoimg"
          src="https://www.margdarshakendra.com/img/Mlogo.png"
          alt="register"
        />
        <h1>Login</h1>
      </div>
      <form className="login_form">
        <div className="login_form_input_text">
          <Person2OutlinedIcon className="email_icon" />
          <input
            type="email"
            name="email"
            id="email"
            title="email"
            placeholder="Email"
          />
        </div>
        <div className="login_form_input_text">
          <VpnKeyIcon className="fullname_icon" />
          <input
            type="password"
            name="passcode"
            id="passcode"
            title="passcode"
            placeholder="Passcode"
          />
        </div>
        <div className="checkbox_class">
          <input
            className="check"
            style={{ width: "20px", height: "20px", margin: "30px 10px" }}
            type="checkbox"
            name="check"
            title="i'm Agree"
          />
          I agree to the Terms of Use and Privacy Policy.
        </div>
        <div className="regisetrButton">
          <input type="submit" value="Login" className="submitButton" />
        </div>
        <p className="forget_passcode">Forget Password?</p>
      </form>
    </div>
  );
};

export default Login;
