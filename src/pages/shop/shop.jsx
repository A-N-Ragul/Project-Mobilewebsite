import React from "react";
import {Navbar} from"../../components/navbar";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import Animation from "../HeadAnimation";
import "./shop.css";

export const Shop = () => {
  return (
    <>
   <br/>
   <Navbar />
   <br/>
   <Animation/>
    <div className="shop">
    
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
    </>
  );
};
