import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import "./style/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-sec">
        <div className="sec">
          <h6>Social</h6>
          <div className="social-icon sec-cl">
            <Link className="ft-link" to='#'>
              <AiFillInstagram />
              <span>Instagram</span>
            </Link>
            <Link className="ft-link"  to='#'>
              <AiFillTwitterCircle />
              <span>Twitter</span>
            </Link>
            <Link className="ft-link"  to='#'>
              <AiFillYoutube />
              <span>Youtube</span>
            </Link>
            <Link className="ft-link"  to='#'>
              <BsFacebook />
              <span>Facebook</span>
            </Link>
          </div>
        </div>
        <div className="sec">
          <h6>Contact</h6>
          <div className="contact-sec sec-cl ">
            <Link className="ft-link"  to='/contact'> Contact Us</Link>
            <Link className="ft-link"  to='/contact'> Email: abc@123</Link>
            <Link className="ft-link"  to='/contact'>Call Us: +91 1234567890</Link>
            
          </div>
        </div>
        <div className="sec">
          <h6>About Us </h6>
          <div className="about-sec sec-cl ">
            <Link className="ft-link"  to='/contact'>Support Center</Link>
            <Link className="ft-link"  to='/contact'>Customer Support</Link>
            <Link className="ft-link"  to='#'>About Us</Link>
            <Link className="ft-link"  to='#'>Copyright</Link>
          </div>
        </div>
        <div className="sec">
          <h6>Customer Care</h6>
          <div className="customer-sec sec-cl ">
            <Link className="ft-link"  to='#'>FAQ & Helps</Link>
            <Link className="ft-link"  to='#'>Shipping & Delivery</Link>
            <Link className="ft-link"  to='#'>Return & Exchanges</Link>
        
          </div>
        </div>
        <div className="sec">
          <h6> Our Information</h6>
          <div className="info-sec  sec-cl">
            <Link className="ft-link"  to='#'> Privacy policy update</Link>
            <Link className="ft-link"  to='#'>Terms & conditions</Link>
            <Link className="ft-link"  to='#'>Return Policy</Link>
           
          </div>
        </div>
        <div className="sec">
          <h6>Categories</h6>
          <div className="categories-sec sec-cl ">
            <Link className="ft-link"  to='#'>Men's Wear</Link>
            <Link className="ft-link"  to='#'>Women's Wear</Link>
            <Link className="ft-link"  to='#'>Electronics</Link>
           
          </div>
        </div>
      </div>
    </div>
  );
}
