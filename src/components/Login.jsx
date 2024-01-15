import React from 'react'
import './style/Login.css'
import { Link } from "react-router-dom";

import { useState } from "react";
export default function Login() {
    const[userDetail,setUserdetail]=useState({
        username:"",
        password: ""
      })
      const[records,setRecords]=useState([]);
      const changeHandle = (e)=>{
        // console.log(e.target.value);
        const { name, value } = e.target;
        setUserdetail({ ...userDetail, [name]: value});
      //  console.log(userDetail)
    
      }
    
      const submitDetail = (e)=>{
        
        e.preventDefault();
        const savedDetail = {...userDetail,id:1};
    console.log(records)
        setRecords([...records,savedDetail])
        setUserdetail({username:"",password:""})
       
        
      }
      
      
  return (
    <>
    <div className="product-cl1">
          <h1>Lgin</h1>
          <p>
            <Link className="product-link" to="/">
              Home
            </Link>{" "}
            / Login
          </p>
        </div>

    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img
            src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
            alt="Login"
            loading='lazy'
          />
        </div>

        <div className="form_page">
          <p className="form-title">Welcome back</p>
          <p>Login to the Dashboard</p>
          <form action="#" className="form_sec" onSubmit={submitDetail}>
            <input type="text"   placeholder="Username" value={userDetail.username} className="input" name="username" onChange={changeHandle}/>
            <input type="password" placeholder="Password" value={userDetail.password} className="input" name="password" onChange={changeHandle}/>
            <button type="submit" className="submit-btn">Sign in</button>
          </form>
        </div>
      </div>
    </div>
   
  </>
  )
}
