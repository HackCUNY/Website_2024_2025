import styled from 'styled-components';

const RegistrationContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  border-bottom: 6px solid #3B82F6;
  padding-bottom: 0.5rem;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  position: relative;
  z-index: 2;
`;

const CityImageContainer = styled.div`
  flex: 1;
  max-width: 500px;
  border-radius: 20px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InterestItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  
  &:before {
    content: "✓";
    color: #3B82F6;
  }
`;

const RegisterButton = styled.button`
  background-color: #fff;
  color: #3B82F6;
  padding: 0.75rem 2rem;
  border: 2px solid #3B82F6;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3B82F6;
    color: white;
  }
`;

const TrainContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const Train = styled.img`
  width: 150px;
  height: auto;
`;

const StatueBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 40%;
  background-image: url('/src/assets/registration_background.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;
  opacity: 0.3;
  z-index: 1;
`;

const ExcitingText = styled.p`
  font-size: 1.1rem;
  margin-top: 1rem;
  font-style: italic;
  color: #a3b1c6;
`;

export default function Registration() {
  const interests = [
    "Teamwork/Collaboration Experience",
    "Chance to win prizes",
    "Attend Workshops by Industry Professionals",
    "Creating an innovative project",
    "Expanding your Network Contacts"
  ];

  return (
    <RegistrationContainer>
      <Title>Registration</Title>
      <ContentContainer>
        <CityImageContainer>
          <img src="/src/assets/registration_city_view.png" alt="NYC Skyline" />
        </CityImageContainer>
        
        <InfoContainer>
          <h2>Interested in:</h2>
          {interests.map((interest, index) => (
            <InterestItem key={index}>
              {interest}
            </InterestItem>
          ))}
          <ExcitingText>
            Don't miss out on this exciting opportunity to learn, create & connect!
          </ExcitingText>
        </InfoContainer>
      </ContentContainer>

      <TrainContainer>
        <Train src="/src/assets/hero_train_left.png" alt="Train Left" />
        <RegisterButton>Register</RegisterButton>
        <Train src="/src/assets/hero_train_right.png" alt="Train Right" />
      </TrainContainer>

      <StatueBackground />
    </RegistrationContainer>
  );
}
