import React from "react";
import CustomButton from "../button/buttton";
import "./header.scss";

const Header=()=>{
  return(
    <div className="header">
    <div className="options">
    
    <h1 className="option">PAN</h1>
    
    
    <h5 className="option">HOME</h5>
    <h5 className="option">ABOUT</h5>
    <h5 className="option">SERVICES</h5>
    <h5 className="option">PAGES</h5>
    <h5 className="option">NEWS</h5>
    <h5 className="option">CONTACT</h5>
    <div className="but"><CustomButton value="GET A QUOTE" ></CustomButton></div>
   </div>
   
    </div>
  );
};
export default Header;