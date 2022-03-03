import React from "react";
import CustomButton from "../../components/button/buttton";
import "./secondpage.scss";

const secondpage = () => {
  return (
    <div className="secondpage">
      <div className="sec">
        <h1><br/>ABOUT US</h1>
        <span>WE HELP TO BUILD A FOUNDATION <br/></span><br/>
        <CustomButton value="CLICK TO KNOW MORE ABOUT US"/>
        
      </div>
    </div>
  );
};
export default secondpage;
