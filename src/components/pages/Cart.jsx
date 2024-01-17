import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../style/Cart.css";

import { remove } from "../../Store/cartSlice";
export const Cart = () => {
  // const count = useContext(UserContext);
  // console.log(typeof(count));
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  console.log("mycartpage", items);
  if (items.length === 0) {
    return (
      <>
        <div className="product-cl1">
          <h1>Product</h1>
          <p>
            <Link className="product-link" to="/">
              Home
            </Link>{" "}
            / Product
          </p>
        </div>

        <div className="empty-box">
          <h3>Cart is Empty!! Add some products in your Cart</h3>
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="product-cl1">
        <h1>Product</h1>
        <p>
          <Link className="product-link" to="/">
            Home
          </Link>{" "}
          / Product
        </p>
      </div>
      <div className="cart-sec">
        <div className="cart-items">
          {items.map((e, index) => (
            <div className="cart-container" key={index}>
             
              <img src={e.image} alt="Product Image" />
              <span>Quantity</span>
              <span className="cart-p-txt">{e.title}</span>
              <span className="cart-price">${e.price}</span>
              <button className="cart-btn" onClick={() => handleRemove(e.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="checkout-sec">
          <h4 className="checkout-txt-hd">Price Details</h4>
          <div className="price-sec">
            <div className="price-cl-sec">
              <span>Price</span>
              <span>$60000</span>
            </div>
            <div className="price-cl-sec">
              <span>Delivery Charges</span>
              <span>Free</span>
            </div>
            <div className="price-cl-sec">
              <span>Packaging Charge</span>
              <span>$58</span>
            </div>
            <div className="price-cl-sec pr">
              <h4>Total Payable</h4>
              <h4>$60058</h4>
            </div>
          </div>
          <h6>Your Total Savings on this order $100</h6>
        </div>
      </div>
    </div>
  );
};

//  <p key={index}>
//   {e.category}
//   {e.price}
//   <img src={e.image} height='100px' widht='100px'></img>
//
//   </p>
