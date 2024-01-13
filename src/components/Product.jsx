import React, { useState, useContext, createContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style/Product.css";
import { add } from '../Store/cartslice'
// import {add} from '../Store/cartSlice'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// const UserContext = createContext();
export default function Product({userData,handlechange}) {
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
  // console.log(userData)
  // const [userData, setUserData] = useState([]);
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const response = await fetch("https://fakestoreapi.com/products");
  //     const data = await response.json();
  //     setUserData(data);
  //     console.log(data);
  //   };
  //   fetchProduct();
  // }, []);
  return (
    <>
      {/* <UserContext.Provider value={userData}> */}
        <div className="product-conatiner">
          <div className="product-cl1">
            <h1>Product</h1>
            <p>
              <Link className="product-link" to="/">
                Home
              </Link>{" "}
              / Product
            </p>
          </div>
          <div className="product-cl2">
            <div className="product-cl-sec1">
              <div className="product-cl-sec-hd">
                <h3>Product Categories</h3>
              </div>
              <div className="product-cl-sec-tp">

                
                <Button className="product-cl-sec-tp-link"    onClick={()=>handlechange("")} >All</Button>
                <Button className="product-cl-sec-tp-link"    onClick={()=>handlechange("electronics")} >Electronic</Button>
                <Button className="product-cl-sec-tp-link"    onClick={()=>handlechange("men's clothing")} >Men</Button>
                <Button className="product-cl-sec-tp-link"    onClick={()=>handlechange("women's clothing")} >Women</Button>
                <Button className="product-cl-sec-tp-link"    onClick={()=>handlechange("jewelery")} >Jewelery</Button>
                <Button className="product-cl-sec-tp-link"    onClick={()=>handlechange("phone")} >Phone</Button>
                <Button className="product-cl-sec-tp-link"    onClick={()=>handlechange("automobiles")} >Automobiles</Button>
                <Button className="product-cl-sec-tp-link"    onClick={()=>handlechange("")} >Outdoor</Button>
                <Button className="product-cl-sec-tp-link"    onClick={()=>handlechange("jewelery")} >Fashion & Beauty </Button>
                <Button className="product-cl-sec-tp-link"    onClick={()=>handlechange("")} >Books & Offices</Button>
              </div>
            </div>
            <div className="product-sec-hd">
              <h3>Products</h3>
            <div className="product-cl-sec2">
              {userData.length == 0 ? (
                 <div className="not">
                No products available in this category!
              </div>
                
              ) : (
               
                  <div className="pr-card-cl">
                  {userData.map((data, index) => (
                    
                    <div className="pr-card-sec1"  key={index}>
                       <Link className="pr-card-sec" to={`/productdetail/${data.id}`} >
                      <div className="img-sec">

                        <img src={data.image} alt="" />
                      </div>
                      </Link>
                      <div className="details">
                        <span className="title">{data.title}</span>
                        {/* <span className="descr">{data.description}</span> */}
                        <span className="price">Price: ${data.price}</span>
                        <div className="opt">
                          <Button variant="success">Buy Now</Button>{" "}
                          <Button variant="success" onClick={()=>productAdd(data)}>Add To Cart</Button>{" "}
                        </div>
                      </div>
                     
                    </div>
                   
                    
                  ))}
                </div>
               
              )}
            </div>
            </div>
          </div>
        </div>
      {/* </UserContext.Provider> */}
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
