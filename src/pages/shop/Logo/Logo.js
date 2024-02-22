import React from "react";
import './Logo.css';
import pic from "../Logo/boost2.jpg";
function Logo(){
    return(
        <>
        <div className="Logo" >
            <img src={pic} alt="LOGO"></img>
            </div>
        </>
       
    )
}
export default Logo;