import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style/Hero.css";
import Button from 'react-bootstrap/Button';

export default function Hero() {
  return (
    <>

        <Carousel interval={500} fade>

          <Carousel.Item>
          <img
              className="slider-imagehr"
              src="/images/16474305667png.png"
              alt="Slider Image"
              loading="lazy"
            />
         
            <Carousel.Caption>
              <h3 className='hr-h3'>Best Accessories</h3>
              <p className='hr-p'>
                GET UPTO 40% OFF
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, culpa?</p>
              <Button className='hr-btn' variant="primary">Shop Now</Button>{' '}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <img
              className="slider-imagehr"
              src="/images/164743050917png.png"
              alt=" Slider Image-2"
              loading="lazy"
            />
         
            <Carousel.Caption>
              <h3 className='hr-h3'>Women Clothes</h3>
              <p className='hr-p'>
              GET UPTO 40% OFF
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, culpa?</p>
              <Button className='hr-btn' variant="primary">Shop Now</Button>{' '}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <img
              className="slider-imagehr"
              src="/images/164743055618png.png"
              alt="Slider Image-3"
              loading="lazy"
            />
         
            <Carousel.Caption>
              <h3 className='hr-h3'>Men Clothes</h3>
              <p className='hr-p'>
              GET UPTO 40% OFF
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, culpa?</p>
              <Button className='hr-btn' variant="primary">Shop Now</Button>{' '}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

    </>
  );
}
