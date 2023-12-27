import React from "react";
import "./register.css";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import Person2Icon from "@mui/icons-material/Person2";
import OtpValidation from "../otp/OTP";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Register = () => {
  const onChangeHandler = () => {
    console.log("hello");
  };
  return (
    <div className="register">
      <div className="register_form_logo">
        <img
          className="register_logoimg"
          src="https://www.margdarshakendra.com/img/Mlogo.png"
          alt="register"
        />
        <h1>Register</h1>
      </div>
      <form className="register_form">
        <div className="mobile_otp">
          <PhoneInput
            className="phone_number_input_field"
            onChange={onChangeHandler}
            type="tel"
            name="phone"
            id="phone_number"
            title="Phone number"
            placeholder="Phone number"
            international={true}
            withCountryCallingCode={true}
            defaultCountry={"IN"}
            minLength={15}
            maxLength={15}
            style={{
              background: "#f5f5f5",
              paddingLeft: "10px",
              borderRadius: "5px",
            }}
          />
          <OtpValidation />
        </div>
        <div className="form_input_text">
          <MailOutlineOutlinedIcon className="email_icon" />
          <input
            type="email"
            name="email"
            id="email"
            title="email"
            placeholder="Email"
          />
        </div>
        <div className="form_input_text">
          <Person2Icon className="fullname_icon" />
          <input
            type="text"
            name="fullname"
            id="fullname"
            title="Full Name"
            placeholder="Full Name"
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
          <input type="submit" value="Register" className="submitButton" />
        </div>
      </form>
    </div>
  );
};

export default Register;
