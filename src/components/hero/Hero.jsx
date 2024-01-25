import React from "react";
import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function Hero() {
  return (
    <div>
      <Carousel fade className="hero-container">
        <Carousel.Item>
          <Image
            className="d-block w-100 hero-image"
            src="/images/leiada-krozjhen-AbcSYWxnzGo-unsplash.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 hero-image"
            src="/images/janko-ferlic-sfL_QOnmy00-unsplash.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 hero-image"
            src="/images/janko-ferlic-sfL_QOnmy00-unsplash.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
