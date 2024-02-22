import React from 'react'
import './LoginFrom.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
const RegistrationForm = () =>{
    return(
        <div className='front1'>
        <div className='wrapper'>
            <form action="">
                <h1>SignUp</h1>
                <div className="input-box">
                <input type="text" placeholder='Full Name' required/>
                <FaUser className='icon'/>
                </div>
                <div className="input-box">
                <input type="text" placeholder='Mobile Number' required/>
                </div>
                <div className="input-box">
                <input type="text" placeholder='Enter EmailId' required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder=' Set Password' required/>
                    <FaLock className='icon'/>

                </div>
               
                    <button type="submit">SUBMIT</button>
                    
            </form>
        </div>
        </div>
    );
};
export default RegistrationForm;