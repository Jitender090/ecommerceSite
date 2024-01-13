import React from "react";
import { Link } from "react-router-dom";
import "./style/Header.css";
import { BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from 'react-redux';

export default function Header() {
  const items=useSelector((state)=>state.cart);
  return (
    <>
      <div className="header-sec">
        <div className="logo">
          <Link className="link " to="/">
            Dev Shop
          </Link>
        </div>
        <div className="links-tab">
          <Link className="link " to="/">
            Home
          </Link>
          <Link className="link " to="/product">
            Product
          </Link>
          <Link className="link " to="/contact">
            Contact
          </Link>
          <div className="icon-tp">
          <div className="cart">
            <Link className="link" to="/cart">
              <AiOutlineShoppingCart />
              <span className="status"> {items.length}</span>
            </Link>
          </div>
          <div className="login">
            <Link className="link" to="/login">
              
              <BiUser />
            </Link>
          </div>
          </div>
         
        </div>
      </div>
    </>
  );
}
