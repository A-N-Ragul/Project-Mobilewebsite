import React from "react";
import './Admin.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
const AdminPage =() =>{
    return(
        <>
        <div className='front1'>
            <div className="front2">
        <div className='wrapper'>
            <form action="">
                <h1>Admin</h1>
                <div className="input-box">
                <input type="text" placeholder='Username' required/>
                <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                    <FaLock className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="a">Forget password?</a>
                    </div>
                    <button type="submit">Login</button>
            </form>
        </div>
        </div>
        </div>
        </>
    );
};
export default AdminPage;