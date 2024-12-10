import React, { useContext, useState, useRef } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Assets/logo.svg";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import Search_icon from "../Assets/search_icon.svg";
import login_icon from "../Assets/login_icon.svg";
import nav_dropdown from "../Assets/nav_dropdown.png";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("responsive-nav");
    e.target.classList.toggle("open");
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>

      <div ref={menuRef} class="nav-menu-container">
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Shop
            </Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("men");
            }}
          >
            <Link style={{ textDecoration: "none", color: "black" }} to="/men">
              Men
            </Link>
            {menu === "men" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("women");
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/women"
            >
              Women
            </Link>
            {menu === "women" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            <Link style={{ textDecoration: "none", color: "black" }} to="/kids">
              Kids
            </Link>
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>
        <button className="nav-btn nav-close-btn" onClick={dropdown_toggle}>
          <FaTimes />
        </button>
      </div>

      <div className="search-login-cart">
        <span className="search-text-icon">
          <input type="text" placeholder="Search" />
          <img src={Search_icon} alt="" className="search-icon" />
        </span>
        <div className="cart-login-drop">
          <div className="cart-login">
            <Link to="/cart" className="cart-counter">
              <img src={cart_icon} alt="" className="cart-icon" />{" "}
              <div className="nav-cart-count">{getTotalCartItems()}</div>
            </Link>
            {localStorage.getItem("auth-token") ? (
              <button
                onClick={() => {
                  localStorage.removeItem("auth-token");
                  window.location.replace("/");
                }}
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                {/* <img src={login_icon} alt="" className="login-icon" /> */}
                <button>Login</button>
              </Link>
            )}
          </div>
          <button className="nav-btn" onClick={dropdown_toggle}>
            <FaBars />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
