import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, del, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="card">
       <div className="product">
          <img src={productImage} />
        </div>
          <h3 className="product-name">{productName}  </h3>
         <div className="product-price"> 
         ₹{price}&nbsp;&nbsp;<div className="product-del">{del}</div>
         </div> 
         <div className="button">
         <button className="addToCartBttn">View Product</button>&nbsp;&nbsp;&nbsp;
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      </div>
      
    </div>
  );
};
