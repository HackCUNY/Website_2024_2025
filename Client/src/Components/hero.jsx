import styled from "styled-components";
import prevHack16 from "../assets/prev-hack-16.jpg";
import cunyLogo from "../assets/navbar_hack_cuny_logo_1.png";
import prevHack24 from "../assets/prev-hack-24.jpg";

const MainScreen = styled.div`
  min-height: screen.height;
  background-color: #000;
`;

const MainImage = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
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
    width: 800px;
    height: auto;
  }
`;

const TextBox = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 20px;
  max-width: 800px;
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
`;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  align-self: center;
  z-index: 2;

  &:hover {
    background-color: #3b82f6;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
  }
`;

const Register = styled.p`
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 20px;
  width: 60%;
`;

export default function Hero() {
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
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint.
            </p>
          </TextBox>
        </LogoContainer>
      </MainImage>
      <RegisterContainer>
        <Register>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </Register>
        <RegisterButton>Register</RegisterButton>
      </RegisterContainer>
    </MainScreen>
  );
}
