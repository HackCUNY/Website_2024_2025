import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

import img1 from '../assets/prev-hack-1.png';
import img2 from '../assets/prev-hack-2.png';
import img3 from '../assets/prev-hack-3.png';
import img4 from '../assets/prev-hack-4.png';
import img5 from '../assets/prev-hack-5.png';
import img6 from '../assets/prev-hack-6.png';
import img7 from '../assets/prev-hack-7.png';
import img8 from '../assets/prev-hack-8.png';
import img9 from '../assets/prev-hack-9.png';
import img10 from '../assets/prev-hack-10.png';
import img11 from '../assets/prev-hack-11.png';
import img12 from '../assets/prev-hack-12.png';
import img13 from '../assets/prev-hack-13.png';
import img14 from '../assets/prev-hack-14.png';
import img15 from '../assets/prev-hack-15.png';
import img16 from '../assets/prev-hack-16.png';
import img17 from '../assets/prev-hack-17.png';
import img18 from '../assets/prev-hack-18.png';
import img19 from '../assets/prev-hack-19.png';
import img20 from '../assets/prev-hack-20.png';
import img21 from '../assets/prev-hack-21.png';
import img22 from '../assets/prev-hack-22.png';
import img23 from '../assets/prev-hack-23.png';
import img24 from '../assets/prev-hack-24.png';

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img10, img11, img12, img13, img14, img15, img16, img17,
  img18, img19, img20, img21, img22, img23, img24
];

const CarouselContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  padding-top: 2 em;
  background-color: black;
  min-height: 50vh;
`;

const Slide = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 15rem;
  object-fit: contain;
  margin: 1rem;
  border-radius: 10px;
`;


const ImageContainer = styled.div`
  width: 15rem;  /* Set a fixed width */
  height: 15rem; /* Set a fixed height */
  background-color: white; /* Background if image doesn't fill */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  border-bottom: 6px solid #3B82F6;
  padding-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 153, 153, 0.8); 
  border-radius: 50%; 
  cursor: pointer; 
  transition: background-color 0.3s ease; 

  &:hover {
    background-color: rgba(102, 255, 255, 1);
  }

  &.next-arrow {
    right: -50px;
  }

  &.prev-arrow {
    left: -50px; 
  }
`;


const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <Arrow className="next-arrow" onClick={onClick}>
      &#10095; 
    </Arrow>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Arrow className="prev-arrow" onClick={onClick}>
      &#10094; 
    </Arrow>
  );
};





const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1, 
        slidesToScroll: 1,
      }
    },
  ]
};

const Previous_Hackathon = () => {
  return (
    <CarouselContainer>
      <Title>Previous HackCUNY (Spring 2024)</Title>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Slide key={index}>
            <ImageContainer>
              <Image src={image} alt={`Previous Hackathon ${index + 1}`} />
            </ImageContainer>
          </Slide>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Previous_Hackathon;