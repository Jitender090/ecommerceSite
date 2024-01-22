import React, { useContext } from "react";
import { useEffect } from "react";
import { UserContext } from "../UserContext";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../style/Cart.css";
import { Button } from "react-bootstrap";


import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../Store/cartSlice";
export const Cart = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
   
  );
  console.log(cart)
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  if (cart.length === 0) {
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
          {cart.map((e, index) => (
            <div className="cart-container" key={index}>
              <img src={e.image} alt="Product Image" />
              <div className="quantity-sec">
                {/* <button onClick={() => dispatch(decreaseItemQuantity(cart.id))}>
                  -
                </button> */}
                <span>{e.cartQuantity}</span>
                {/* <button onClick={() => dispatch(increaseItemQuantity(cart.id))}>
                  +
                </button> */}
              </div>
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
              <span>${totalPrice}</span>
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
              <h4>${totalPrice+58}</h4>
            </div>
          </div>
          {/* <h6>Your Total Savings on this order $100</h6> */}
          <Button variant="success" onClick={handlePayment}>Checkout</Button>
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
