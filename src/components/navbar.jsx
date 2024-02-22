import React from "react";
import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { RiAdminFill } from "react-icons/ri";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import Logo from "../pages/shop/Logo/Logo";

export const Navbar = () => {
  return (
    <div>
    <div className="navbar">
    <Logo/>
    <div className="links-content">
        <Link to="/Home"> <TiHome /> Home </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/contact"> Shope details </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/cart">My Cart <ShoppingCart size={25} />
      </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/"><RiAdminFill /> Login/Sign-up</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/Admin"><RiAdminFill /> Admin</Link>
      </div>
      </div>
      </div>
    

  );
};
