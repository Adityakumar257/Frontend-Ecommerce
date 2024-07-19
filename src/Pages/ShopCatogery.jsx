import React, { useContext } from "react";
import "./ShopCatogery.css";
import { ShopContext } from "./../Context/ShopContext";
import dropdown_icon from "../Assets/dropdown_icon.png";
import Item from "../Components/item/Item";

export const ShopCatogery = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="ShopCatogery">
      <img className="ShopCategory-Banner" src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
      <span>Showing 12 out of 36 </span> 
      <div>
      </div>
       
        <div className="shopcatogery-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
        <div className="shopcatogery-products"></div>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcatogery-loadmore">
      Explore More
      </div>
    </div>
  );
};
