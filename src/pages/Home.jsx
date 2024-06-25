import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

function Home() {
  return (
    <div className="container mt-5">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3>Benvenuti nel nostro Blog Sportivo</h3>
            <p>Scopri le ultime notizie sullo sport.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Ultime Novità</h3>
            <p>Rimani aggiornato con le novità sportive.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Eventi Imperdibili</h3>
            <p>Non perderti i grandi eventi sportivi.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
