import styled from 'styled-components';
import CodeIconImg from '/src/assets/about_code.png';
import WorkshopsIconImg from '/src/assets/about_workshop.png';
import InnovationIconImg from '/src/assets/about_innovation.png';
import PrizesIconImg from '/src/assets/about_prizes.png';
import CommunityIconImg from '/src/assets/about_community.png';
import StudentLifeIconImg from '/src/assets/about_student.png';
import NetworkingIconImg from '/src/assets/about_networking.png';
import ProgressIconImg from '/src/assets/about_progress.png';

const AboutContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 3rem 1rem;
  color: white;
  background: url('/src/assets/about_background.png') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  border-bottom: 6px solid #3B82F6;
  padding-bottom: 0.5rem;
`;

const Description = styled.p`
  max-width: 800px;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;

const IconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 800px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const IconBox = styled.div`
  background: white;
  border-radius: 12px;
  border: 2px solid #3B82F6;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const IconLabel = styled.span`
  font-size: 1rem;
  text-align: center;
  color: white;
`;

export default function About() {
  const features = [
    { id: 1, name: 'Code Collab', icon: CodeIconImg },
    { id: 2, name: 'Workshops', icon: WorkshopsIconImg },
    { id: 3, name: 'Innovation', icon: InnovationIconImg },
    { id: 4, name: 'Prizes', icon: PrizesIconImg },
    { id: 5, name: 'Community', icon: CommunityIconImg },
    { id: 6, name: 'Student Life', icon: StudentLifeIconImg },
    { id: 7, name: 'Networking', icon: NetworkingIconImg },
    { id: 8, name: 'Progress', icon: ProgressIconImg }
  ];

  return (
    <AboutContainer>
      <Title>About HackCUNY</Title>
      <Description>
        Welcome to HackCUNY, an annual hackathon exclusively designed for the vibrant and diverse student 
        body of the City University of New York (CUNY). Our event is more than just a competition; it's a 
        celebration of innovation, creativity, and collaboration. Each year, we invite CUNY students from all 
        backgrounds and skill levels to come together for an exhilarating 48-hour journey of hacking. At 
        HackCUNY, you'll get the chance to level your ideas into reality, learn new technologies, and connect with 
        fellow students and industry leaders. Whether you're here as a seasoned coder, a design enthusiast, or a 
        newcomer with a passion for solving problems, HackCUNY is the perfect platform to challenge yourself, 
        expand your network, and showcase your talents. Join us in fostering a community of forward-thinkers, 
        united by the spirit of discovery and a shared ambition to drive positive change through technology.
      </Description>
      
      <IconsGrid>
        {features.slice(0, 4).map(feature => (
          <IconContainer key={feature.id}>
            <IconBox>
              <img src={feature.icon} alt={`${feature.name} Icon`} width="100" height="100" />
            </IconBox>
            <IconLabel>{feature.name}</IconLabel>
          </IconContainer>
        ))}
        {features.slice(4, 7).map(feature => (
          <IconContainer key={feature.id}>
            <IconBox>
              <img src={feature.icon} alt={`${feature.name} Icon`} width="40" height="40" />
            </IconBox>
            <IconLabel>{feature.name}</IconLabel>
          </IconContainer>
        ))}
        <IconContainer>
          <IconBox>
            <img src={features[7].icon} alt={`${features[7].name} Icon`} width="40" height="40" />
          </IconBox>
          <IconLabel>{features[7].name}</IconLabel>
        </IconContainer>
      </IconsGrid>
    </AboutContainer>
  );
}
