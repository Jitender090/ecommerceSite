import React from "react";
import { IoRocket } from "react-icons/io5";
import { TbTruckReturn } from "react-icons/tb";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GrSupport } from "react-icons/gr";
import "./style/Sec_2.css"

export default function Sec_2() {
  return (
    <div className="mn-bx">
      <div className="bx">
        <div className="bx-cl-1">
          <IoRocket />
        </div>
        <div className="bx-cl-2">
          <h5>Free Shipping</h5>
          <p>orders $50 or more</p>
        </div>
      </div>
      <div className="bx">
        <div className="bx-cl-1">
          <TbTruckReturn />
        </div>
        <div className="bx-cl-2">
          <h5>Free Returns</h5>
          <p>within 30 days</p>
        </div>
      </div>
      <div className="bx">
        <div className="bx-cl-1">
          <IoMdInformationCircleOutline />
        </div>
        <div className="bx-cl-2">
          <h5>Get 20% Off 1 Item</h5>
          <p>When you sign up</p>
        </div>
      </div>
      <div className="bx">
        <div className="bx-cl-1">
          <GrSupport />
        </div>
        <div className="bx-cl-2">
          <h5>We Support</h5>
          <p>24/7 amazing services</p>
        </div>
      </div>
    </div>
  );
}
