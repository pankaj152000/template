import React from "react";
import "./thirdpage.scss";
import imagu from "./officu.png";
import CustomButton from "../../components/button/buttton";

const thirdpage = () => {
  return (
    <div className="thirdpage" style={{backgroundImage:`url(${imagu})`, backgroundRepeat:"no-repeat" ,backgroundSize:"cover"}}>
      <div className="thi">
        <h1><br/>SERVICES</h1>
        <span>GET A QUOTE</span><br/>
        <CustomButton value="TAKE A TOUR"></CustomButton>
        
      </div>
    </div>
  );
};
export default thirdpage;