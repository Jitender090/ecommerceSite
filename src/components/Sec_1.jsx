import React from "react";
import './style/Sec_1.css'

export default function Sec_1() {
  return (
    <>
      <div className="s1-container">
        <h2 className="s1-h2">Best Month Offer</h2>
        <p className="s1-p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
          facilis ex tempore architecto delectus illum! Praesentium error
          dolorem quod expedita laborum? Voluptatem, molestiae quaerat? Nobis
          rem aliquam repellendus doloremque quaerat.
        </p>
        <div className="s1-content">
          <div className="box1">
            <img src="/images/166306363884png.png" className="box-img" alt="" />
            <div className="box-content1">
              <p>Sale Up To 30%</p>
              <h3>Mens Collection</h3>
              <p>NEW AUTUMN ARRIVE</p>
            </div>
          </div>
          <div className="box">
            <img src="/images/166306365085png.png" className="box-img" alt="" />
            <div className="box-content">
              <p>Sale Up To 50%</p>
              <h3> EXO TRAVEL BAGS</h3>
              <p>BAGS AND SHOES</p>
            </div>
          </div>
          <div className="box">
            <img src="/images/166306009486png.png" className="box-img" alt="" />
            <div className="box-content">
              <p>Sale Up To 70%</p>
              <h3>NEW ARRIVALS</h3>
              <p>CASUAL SHOES</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
