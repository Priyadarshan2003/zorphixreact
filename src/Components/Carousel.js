import '../App.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/eventphotos/year 1/DSC_0026.jpg'
import img2 from '../img/eventphotos/year 1/DSC_0034.jpg'
import img3 from '../img/eventphotos/year 1/DSC_0191.jpg'
import img4 from '../img/eventphotos/year 1/DSC_0217.jpg'
import img5 from '../img/eventphotos/year 1/DSC_0382.jpg'
import img6 from '../img/eventphotos/year 1/DSC_0436.jpg'
import img7 from '../img/eventphotos/year 2/IMG_2736.jpg'
import img8 from '../img/eventphotos/year 2/IMG_4396.jpg'
import img9 from '../img/eventphotos/year 2/IMG_4841.jpg'
import img10 from '../img/eventphotos/DSC_0510.jpg'

const CarouselComponent = () => {
  return (
    <div className='carousel_container'>
    <Carousel className='carousel' interval={2000}>
    <Carousel.Item>
      <img
        className="d-block"
        src={img1}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img2}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img3}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img4}
        alt="Fourth slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img5}
        alt="Fifth slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img6}
        alt="Sixth slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img7}
        alt="Seventh slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img8}
        alt="Eighth slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img9}
        alt="Ninth slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img10}
        alt="Tenth slide"
      />
    </Carousel.Item>
  </Carousel>
  </div>
  );
};

export default CarouselComponent;