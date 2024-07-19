import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../logo.png";
import cart_icon from "../cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from '../nav_dropdown.webp'

export const Navbar = () => {
const [menu,setmenu] = useState("shop");
const {getTotalcartItems} = useContext(ShopContext)
const menuRef = useRef();

const dropdown_toggle =(e) =>{
  menuRef.current.classList.toggle('nav-menu-visible')
  e.target.classList.toggle('open');


}

  return (
    <div className="navbar">
      <div className="nav-logo">
      <img src={logo} alt="logo"/>
      <p>SHOPPER</p>
      <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" style={{height:"1rem"}}/>
      </div>
      <ul ref={menuRef}className="nav-menu">
      <li onClick={()=>{setmenu("Shop")}}><Link style={{textDecoration: 'none'}}to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
      <li onClick={()=>{setmenu("Mens")}}><Link  style={{textDecoration: 'none'}}to='/Mens'>Men</Link> {menu==="Mens"?<hr/>:<></>}</li>
      <li onClick={()=>{setmenu("Women")}}><Link  style={{textDecoration: 'none'}}to='/Women'>Women</Link> {menu==="Women"?<hr/>:<></>}</li>
      <li onClick={()=>{setmenu("kids")}}> <Link  style={{textDecoration: 'none'}}to='/kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
      {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
      :<Link to='/Login'><button>Login</button></Link>}
      
      <Link to='/cart'><img src={cart_icon} alt="cart-img"/></Link>
      <div className="nav-cart-count">{getTotalcartItems()}</div>
      </div>
    </div>
  );
};
