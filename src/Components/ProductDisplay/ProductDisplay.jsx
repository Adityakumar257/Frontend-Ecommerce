import React, { useContext } from "react";
import "./Productdisplay.css";
import star_icon from "../../Assets/star_icon.png";
import star_dull_icon from "../../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
// import { Product } from './../../Pages/Product';

export const ProductDisplay = (props) => {
  const { Product } = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className="ProductDisplay">
      <div className="p-display-left" style={{overflow:"hidden",gap:"10px"}}>
        <div className="productdisplay-img-list" style={{overflow:"hidden",}}>
          <img src={Product.image} alt="" />
          <img src={Product.image} alt="" />
          <img src={Product.image} alt="" />
          <img src={Product.image} alt="" />
        </div>
        <div className="productdisplay-img" style={{overflow:"hidden"}}>
          <img className="productdisplay-main-img" src={Product.image} alt="" style={{width:"80%",height:"60%",objectPosition:"center"}} />
        </div>
      </div>

      <div className="p-display-right">
        <h1>{Product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${Product.old_price}
          </div>
          <div className="prooductdisplay-right-price-new">
            ${Product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight ,usually knitted, Pullover shirt, clase-fitting and
          design a round neckline and short sleeves, worn as an undershit or
          urban company shirt.
        </div>
        <div className="productdisplay-right-size">
          <h1> Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <button onClick={()=>{addToCart(Product.id)}} className="btn">ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category</span>Women,T-shirt, Crop </p>
        <p className="productdisplay-right-category"><span>Tags</span>Modern,Latest, Crop </p>
      </div>
    </div>
  );
};
