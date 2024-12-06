import styled from "styled-components";
import prevHack16 from "../assets/prev-hack-16.jpg";
import cunyLogo from "../assets/navbar_hack_cuny_logo_1.png";
import prevHack24 from "../assets/prev-hack-24.jpg";
import prevHack5 from "../assets/prev-hack-5.jpg";
import prevHack21 from "../assets/prev-hack-21.jpg";
import prevHack3 from "../assets/prev-hack-3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainScreen = styled.div`
  min-height: screen.height;
  margin-bottom: 60px;
`;

const MainImage = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  margin-bottom: 60px;
  img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
  }

  @media (max-width: 763px) {
    justify-content: center;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 700px;
    height: auto;
  }

  @media (max-width: 1024px) {
    img {
      max-width: 500px;
    }
  }

  @media (max-width: 1296px) {
    img {
      max-width: 300px;
    }
  }

  @media (max-width: 763px) {
    img {
      display: none;
    }
  }

  @media (max-width: 428px) {
    img {
      display: none;
    }
  }
`;

const TextBox = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 3rem;
  border-radius: 20px;
  max-width: 600px;
  justify-content: center;
  h1 {
    font-size: 2rem;
    color: #000;
  }
  h2 {
    font-size: 1.5rem;
    color: #000;
    margin-bottom: 10px;
  }
  p {
    font-size: 1.5rem;
    color: #000;
  }

  @media (max-width: 1024px) {
    max-width: 400px;
    justify-content: around;
    padding: 2rem;
    h1 {
      font-size: 1.8rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    max-width: 300px;
    padding: 1rem;
    justify-content: around;
    h1 {
      font-size: 1rem;
    }
    h2 {
      font-size: 0.8rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 763px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 320px) {
    justify-content: around;
    flex-direction: row;
    padding: 1rem;
    h1 {
      font-size: 1rem;
    }
    h2 {
      font-size: 0.8rem;
      margin-bottom: 0.2rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;

const Divider = styled.div`
  height: 15px;
  width: 100%;
  background-color: #4275ec;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  border-radius: 10px;
  margin-top: 5px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    height: 10px;
  }

  @media (max-width: 320px) {
    height: 5px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  gap: 4rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }

  @media (max-width: 1296px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  @media (max-width: 320px) {
    padding: 0 10px;
    gap: 2rem;
  }
`;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 800px;
  width: 100%;
`;

const Register = styled.p`
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 20px;
  width: 100%;

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

const RegisterButton = styled.button`
  background-color: #fff;
  color: #3b82f6;
  padding: 0.75rem 2rem;
  border: 2px solid #3b82f6;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3b82f6;
    color: white;
  }

  @media (max-width: 320px) {
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
    flex-direction: column;
  }
`;

const Container = styled.div`
  // display: flex;
  // flex-direction: row;
`;

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 850px;
  position: relative;

  .slick-dots {
    position: absolute;
    bottom: 10px;
    margin-bottom: 5px;
    width: 100%;
    display: flex !important;
    justify-content: center;
    align-items: center;
  }

  .slick-dots li button:before {
    color: white;
  }

  .slick-dots li.slick-active button:before {
    color: #3b82f6;
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 20px;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  font-size: 2rem;
  color: white;
  &:hover {
    color: #3b82f6;
  }
`;

const PrevArrow = styled(Arrow)`
  left: 10px;
`;

const NextArrow = styled(Arrow)`
  right: 10px;
`;

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <PrevArrow className={className} style={{ ...style }} onClick={onClick}>
      &#9664;
    </PrevArrow>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <NextArrow className={className} style={{ ...style }} onClick={onClick}>
      &#9654;
    </NextArrow>
  );
}

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const images = [prevHack21, prevHack16, prevHack24, prevHack5, prevHack3];

  return (
    <MainScreen>
      <MainImage>
        <img src={prevHack16} alt="prevHack" />
        <LogoContainer>
          <img src={cunyLogo} alt="cunyLogo" />
          <TextBox>
            <h1>Welcome to HackCUNY 24 - '25</h1>
            <Divider />
            <h2>Feb. 18th - 24th, 2025</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </TextBox>
        </LogoContainer>
      </MainImage>
      <Container>
        <ContentContainer>
          <RegisterContainer>
            <Register>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </Register>
            <RegisterButton>Register</RegisterButton>
          </RegisterContainer>

          <CarouselContainer>
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <CarouselImage src={image} alt={`Slide ${index}`} />
                </div>
              ))}
            </Slider>
          </CarouselContainer>
        </ContentContainer>
      </Container>
    </MainScreen>
  );
}
