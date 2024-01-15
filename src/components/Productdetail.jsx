import React from "react";
// import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./style/Productdetail.css";
import { Button } from "react-bootstrap";
import { add } from '../Store/cartSlice'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function Productdetail({ userData }) {
  // console.log(ID)
    // console.log(items[ID].rating.rate)
    // console.log(items[ID].price)
  const { ID } = useParams();
  const dispatch=useDispatch();
  const productAdd=(product)=>{
    toast("Successfully Added To Cart.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    console.log(product);
      dispatch(add(product))
    }
  return (
    <>
      <div className="pd-container">
        <div className="product-cl1">
          <h1>Product Detail</h1>
          <p>
            <Link className="product-link" to="/product">
              Home
            </Link>{" "}
            / Product Detail
          </p>
        </div>
        <div className="pd-sec">
          <div className="pd-img-sec">
            <img src={userData[ID - 1].image} alt="Image"  loading="lazy"/>
          </div>
          <div className="pd-txt-sec">
            <p>
              <Link to="/product">Home</Link> / {userData[ID - 1].category}
            </p>
            <h3>{userData[ID - 1].title}</h3>
            <span>Rating: {userData[ID-1].rating.rate}</span>
            <span>{userData[ID - 1].price}$</span>
            <div className="btn-pd-grp">
              <Button onClick={()=>productAdd(userData[ID-1])}>
                ADD TO CART{" "}
              </Button>
              <Button>BUY NOW </Button>
            </div>
            <span>Report this item</span>
          </div>
          <div className="pd-seller-sec">
            <span>Sold By</span>
            <span className="pd-st-nm">Store Name</span>
            <span>{userData[ID-1].rating.count}</span>
            <span>Total Items</span>
            <Link className="pd-link-sec" to="/product">
              Visit Store
            </Link>
            <Link className="pd-link-sec" to="/contact">
              Contact Seller{" "}
            </Link>
          </div>
        </div>
        <div className="pd-sec2">
          <div className="pd-cl-sec2">
            <Link className="pd-cl-sec2-lk" to="description">Description</Link>
            <Link className="pd-cl-sec2-lk" to="policy">Buy / Return Policy</Link>
            <Link className="pd-cl-sec2-lk" to="review">Reviews</Link>
            <Link className="pd-cl-sec2-lk" to="review">Comments</Link>
          </div>
          <div className="pd-cm-sec">
           <Outlet/>
          </div>
        
         

      
          

        </div>
      </div>
      <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark" />
    </>
  );
}
