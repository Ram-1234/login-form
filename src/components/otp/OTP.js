import React from "react";
import "./OTP.css";

function OtpValidation({ numberOfDigits }) {
 

  return (
         <div className="otp_input_box">
          {/* <p>Verify SMS Code</p> */}
         <input
            type="text"
            name="otp1"
            id="otp1"
            title="OTP"
          />
           <input
            type="text"
            name="otp2"
            id="otp2"
            title="OTP"
          />
           <input
            type="text"
            name="otp3"
            id="otp3"
            title="OTP"
          />
           <input
            type="text"
            name="otp4"
            id="otp4"
            title="OTP"
          />
         </div>
  );
}

export default OtpValidation;
