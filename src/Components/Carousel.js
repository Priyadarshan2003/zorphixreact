import '../App.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/eventphotos/event1.JPG'
import img2 from '../img/eventphotos/event2.JPG'
import img3 from '../img/eventphotos/event3.JPG'
import img4 from '../img/eventphotos/event4.JPG'
import img5 from '../img/eventphotos/event5.JPG'
import img10 from '../img/eventphotos/event10.JPG'
import img12 from '../img/eventphotos/event12.JPG'
import img13 from '../img/eventphotos/event13.JPG'
import img14 from '../img/eventphotos/event14.JPG'
import img15 from '../img/eventphotos/event15.JPG'

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
        src={img15}
        alt="Fifteenth slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img10}
        alt="Tenth slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img12}
        alt="Twelfth slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img13}
        alt="Thirteenth slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img14}
        alt="Fourteenth slide"
      />
    </Carousel.Item>
    
  </Carousel>
  </div>
  );
};

export default CarouselComponent;