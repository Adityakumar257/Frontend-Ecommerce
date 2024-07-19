import React, { useContext,useEffect } from "react";
import "./CartItem.css";
import AOS from 'aos'
import "aos/dist/aos.css"

// import all_product from './../../Assets/all_product';
// import { useContext } from 'react';
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../Assets/cart_cross_icon.png";
// import {loadStripe} from '@stripe/stripe-js';
// import { Cart } from './../../Pages/Cart';
// import { json} from "react-router-dom";

export const CartItems = () => {
  const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);


//payment integration
// const makePayment = async()=>{
//   const stripe = await loadStripe("pk_test_51PGDJwSEk08zJTSU9W3fcgnfAIR281rhZiowF1o2wnmsyJwrnI7ALlv3x7hCR8HhqDqHz2Qo9bnbkLRSVwB5ubOP003Z1RV9F7");
  
//   const body = {
//     products:Cart
//   }
//   const header ={
//     "content-Type":"application/json"
//   }
//   const response  = await fetch("http://localhost:7000/api/create-chekout-seassion",{
//       method:"post",
//       headers:header,
//       body:JSON.stringfy(body)
//     });
//     const session = await response.json();

//     const result = stripe.redirectToCheckout({

//       sessionId:session.id
//     });
//     if(result.error){
//       console.log(result.error);
      
//     }

// }
useEffect(() =>{
  AOS.init();

})



  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItems[e.id]>0)
        {
            return <div>
            <div className="cartitem-format cartitems-format-main">
              <img src={e.image} alt="" className="carticon-product-icon" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cartitem-quantity">{cartItems[e.id]}</button>
              <p>${e.new_price*cartItems[e.id]}</p>
              <img className="cartitem-remove-icon"
                src={remove_icon}
                onClick={() => {
                  removeFromCart(e.id);
                }}
                alt=""
                // className="carticon-product-icon"
              />
            </div>
            <hr />
          </div>
        }
        return null;
      })}
      <div className="cartitems-down">
      <div className="cartitems-total">
      <h1>cart Totals</h1>
      <div>
      <div className="cartitems-total-item">
      <p>Subtotal</p>
      <p>${getTotalCartAmount()}</p>
      </div>
      <hr/>
      <div className="cartitems-total-items">
      <p>Shipping Fee</p>
      <p>Free</p>
      </div>
      <hr/>
      <div className="cartitems-total-items">
      <h3>Total</h3>
      <h3>${getTotalCartAmount()}</h3>
      </div>
      </div>
      <button id="cartitems-total-items">PROCEED TO CHEKOUT</button>
      </div>
      <div className="cart-item-promocode">
      <p data-aos="fade-right" data-aos-duration="1700">If you have a promo code, Enter it here</p>
      <div className="cartitem-promobox">
      <input type="text" placeholder="Promo-code"/>
      <button>Submit</button>
      </div>
      </div>
      </div>
    </div>
  );
};
