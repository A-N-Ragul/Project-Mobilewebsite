import React from "react";
import './HeadAnimation.css';
import pic1 from "../assets/products/iphonelogo33.png";
import pic2 from "../assets/products/samsunglogo2.png";
import pic3 from "../assets/products/lavalogo3.png";
import pic4 from "../assets/products/lenovologo2.png";
import pic5 from "../assets/products/oppologo3.png";
import pic6 from "../assets/products/realme3.png";
import pic7 from "../assets/products/onepluslogo.png";
import pic8 from "../assets/products/redmi3.png";
import pic9 from "../assets/products/googlelogo3.png";
import pic10 from "../assets/products/lenovologo2.png";
function Animation(){
    return(
        <>
        <div class="slider">
  <div class="slide-track">
    <div class="slide">
      <img src={pic1} height="80" width="150" alt=""></img>
    </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div class="slide">
      <img src={pic2} height="80" width="150" alt=""></img>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div class="slide">
      <img src={pic3} height="80" width="150" alt=""></img>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div class="slide">
      <img src={pic4} height="80" width="190" alt="" ></img>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
    <div class="slide">
      <img src={pic5} height="80" width="150" alt=""></img>
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div class="slide">
      <img src={pic6} height="90" width="200" alt=""></img>
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div class="slide">
      <img src={pic7} height="90" width="180" alt=""></img>
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div class="slide">
      <img src={pic8} height="90" width="180" alt=""></img>
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div class="slide">
      <img src={pic9} height="100" width="300" alt=""></img>
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div class="slide">
      <img src={pic1} height="80" width= "200" alt=""></img>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div class="slide">
      <img src={pic2} height="80" width="150" alt=""></img>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div class="slide">
      <img src={pic3} height="80" width="150" alt=""></img>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div class="slide">
      <img src={pic10} height="80" width="150" alt=""></img>
    </div>
  </div>
</div>
        
        </>


    );
};
export default Animation;