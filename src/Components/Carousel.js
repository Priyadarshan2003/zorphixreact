import '../App.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/2fact.png'

const CarouselComponent = () => {
  return (
    <Carousel className='carousel' interval={1500}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;