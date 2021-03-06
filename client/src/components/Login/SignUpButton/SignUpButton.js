import React from "react";
import "./SignUpButton.css";

// Destructuring the type, className, children and onClick props, applying them to the button element
const SignUpButton = ({ type, className, children, onClick }) => (

<button
    onClick={onClick}
    className={`btn btn-${type ? type : "default"} 
                       ${className ? " " + className : ""}`}
  >
    {children}
  </button>
   
  
);

export default SignUpButton;