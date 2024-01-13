import React from "react";
import { useState } from "react";
import "./style/Contact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Contact() {
  const initialstate = {
    username: "",
    email: "",
    subject: "",
    message: ""
  };
  const [userDetail, setUserdetail] = useState(initialstate);
  const { username, email, subject, message, } = userDetail;
  const [records, setRecords] = useState(false);

  const [formerror, setformerror] = useState({});
  const changeHandle = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setUserdetail({ ...userDetail, [name]: value });
  };

  const submitDetail = (e) => {
    e.preventDefault();

    console.log(records);

    console.log(userDetail)
    setRecords(true);
    Validateform();
  };

  const Validateform = () => {
    // console.log(state);
    const err = {};
    const regexname = /^[a-zA-Z]+$/;
    const regexemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const regexmobileno = /^\d{10}$/;
    if (!userDetail.username) {
      err.eusername = "Please Enter Your Name";
    } else if (!userDetail.username.match(regexname)) {
      err.eusername = "Please Enter Characater Only";
    } else if (!userDetail.email) {
      err.eemail = "Please Enter Your email";
    } else if (!userDetail.email.match(regexemail)) {
      err.eemail = "Please Enter a Valid Email";
    }  else {
      
      toast("Thank you for submitting the form!" , {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      setUserdetail({
        username: "",
        email: "",
        subject: "",
        message: "",
       
      });
      // console.log()
    }
    // console.log(err);
    setformerror(err);
  };
  return (
    <>
      <div className="contact-sec">
        <div className="hd">
          <div className="hd-sec">
            <span className="sp-1">Explore</span>
            <h2 className="txt"> Contact Us</h2>
          </div>
        </div>
        <div className="dt-sec">
          <h3 className="txt-1">Get in touch</h3>
          <form className="get-sec" action="#" onSubmit={submitDetail}> 
            <div className="sec-1">
              <div className="nm-sec">
                <label htmlFor="name">Your Name(required)</label>
                <input
                  type="text"
                  value={userDetail.username}
                  name="username"
                  onChange={changeHandle}
                  placeholder="Enter Your Name"
                />
                <span className="errvalue">{formerror.eusername}</span>
              </div>
              <div className="eml-sec">
                <label htmlFor="email">Your Email(required)</label>
                <input
                  type="text"
                  value={userDetail.email}
                 
                  name="email"
                  onChange={changeHandle}
                  placeholder="Enter Your Email"
                />
                 <span className="errvalue"> {formerror.eemail}</span>
              </div>
            </div>
            <div className="subjct-sec">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                value={userDetail.subject}
                  
                  name="subject"
                  onChange={changeHandle}
                placeholder="Enter Your Subject"
              />
            </div>
            <div className="txt-sec">
              <label htmlFor="txtarea">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                value={userDetail.message}
                onChange={changeHandle}
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </>
  );
}
