import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import Office from "./photos/office2.png";
import CustomButton from "./components/button/buttton";
import Secondpage from "./pages/secondpage/secondpage";
import Thirdpage from "./pages/thirdpage/thirdpage";

const App=()=>{
  return(
    <div className="App">


    <div className="firstpage" style={
        {
            backgroundImage:`url(${Office})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover"
    }}>
    <Header/>
    <div className="fin">
    <h1>WE CREATE<br/> PERFECT BRAND <br/>GOODS VALUE</h1>
    <span>Bring your ideas to life with us</span>
    <CustomButton value="GET STARTED NOW"></CustomButton>
    </div>
    </div>
    <div>
    <Secondpage/>
    </div>

    <div>
    <Thirdpage></Thirdpage>
    </div>

    
    
    
    
    </div>
  );
};
export default App;
