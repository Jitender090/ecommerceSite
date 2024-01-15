import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./style/Featureproduct.css";

import { add } from '../Store/cartSlice'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Featureproduct() {
  const [fproducts, setFproducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=4");
      const data = await response.json();
      setFproducts(data);
      //   console.log(data);
    };
    fetchProducts();
  }, []);

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
      <div className="fp-container">
        <h3>Feature Products</h3>
        <h1>Our Featured Products</h1>
        <div className="fp-cl-container">
       
        {fproducts.length == 0 ? (
          "loading..."
        ) : (
          
          <div className="card-cl" >
            {fproducts.map((data,key) => (

              <div className="card-sec" key={data.id}>
                <div className="img-sec">
                  <img src={data.image} alt="Product Image" loading="lazy" />
                </div>
                <div className="details">
                  <span className="title">{data.title}</span>
                  {/* <span className="descr">{data.description}</span> */}
                  <span className="price">Price: ${data.price}</span>
                  <div className="opt">
                  <Button variant="success">Buy Now</Button>{' '}
                  <Button variant="success" onClick={()=>productAdd(data)}>Add To Cart</Button>{' '}
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
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
