import React from "react";
import "./button.scss";

const Dabao=()=>{
    alert("Hi This is Pankaj, button is clicked add some functionality")
}
const customButton=({value})=>{
  return(
      <div className="button">
      <button onClick={Dabao}>{value}</button>
      </div>
  );
};
export default customButton;