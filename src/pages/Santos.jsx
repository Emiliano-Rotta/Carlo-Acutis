import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sanfrancisco from '../assets/img/santos/sanfrancisco.jpg';
import santaclara from '../assets/img/santos/santaclara.jpg';
import santotomas from '../assets/img/santos/santotomas.jpg';

function Santos() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={sanfrancisco} alt='' width={"100%"} height={"500vh"}/>
        <Carousel.Caption>
          <h3>San Francisco de Asis</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={santaclara} alt='' width={"100%"} height={"500vh"}/>
        <Carousel.Caption>
          <h3>Santa Clara de Asis</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={santotomas} alt='' width={"100%"} height={"500vh"}/>
        <Carousel.Caption>
          <h3>Santo Tomas de Aquino</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Santos;