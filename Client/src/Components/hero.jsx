import styled from "styled-components";
import heroBackground from "../assets/hero_background.png";
import heroTrainLeft from "../assets/hero_train_left.png";
import heroTrainRight from "../assets/hero_train_right.png";
import hackCUNYLogo from "../assets/hack_cuny_logo_1.png";

const HeroContainer = styled.div`
  background-image: url(${heroBackground});
  background-size: w-1359px h-1058px;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const Title = styled.h1`
  font-size: 40px;
  width: 679px;
  height: 59px;
  margin-bottom: 0.5rem;
  border-bottom: 10px solid #3b82f6;
  padding-bottom: 0.5rem;
`;

const Date = styled.h1`
  font-size: 25px;
  width: auto;
  height: 59;
  padding-bottom: 0.5rem;
`;

const Description = styled.p`
  max-width: 700px;
  line-height: 1.6;
  margin-bottom: 3rem;
  font-size: 17.13px;
`;

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 1200px;
`;

const RegisterButton = styled.button`
  background-color: #fff;
  color: #3b82f6;
  padding: 1.3rem 2.5rem;
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

  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <TextContainer>
        <Title>Welcome to HackCUNY 24 - 25'</Title>
        <Date>Feb. 18th - 24th, 2025</Date>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          labore soluta reiciendis optio earum voluptatibus ab, commodi
          laudantium cupiditate magni! Dolorum accusantium harum ut. Mollitia
          facilis eveniet ea atque rem!
        </Description>
        <RegisterContainer>
          <img src={heroTrainLeft} alt="train left" />
          <RegisterButton>Register</RegisterButton>
          <img src={heroTrainRight} alt="train right" />
        </RegisterContainer>
      </TextContainer>
      <img
        src={hackCUNYLogo}
        alt="hack cuny logo"
        style={{
          width: "445px",
          height: "334px",
        }}
      />
    </HeroContainer>
  );
}
