import styled from 'styled-components';

import SponsorsHulyImg from '/src/assets/sponsors_huly.png';
import SponsorsJJayImg from '/src/assets/sponsors_jjay.png';

const SponsorsContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh;
  padding: 3rem 1rem;
  color: white;
  background: url('/src/assets/sponsors_background.png') center/cover no-repeat;
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
  text-wrap: balance;
`;


const SponsorsGrid = styled.div`
  display: flex;

  width: 100%;
  max-width: 50rem;
  margin: 0 4rem;

  flex-wrap: wrap;
  gap: 8rem;
  justify-content: center;
  align-items: center;
`;

const SponsorsItem = styled.a`
  display: flex;

  flex: 0 0 calc(50% - 4rem);
  gap: 1rem;
  flex-direction: column;
  align-items: center;

  text-align: center;
  text-wrap: balance;

  min-width: 20rem;

  transition: transform 0.3s ease;

  &:hover {
    text-decoration: none;
    color: #3B82F6;
    transform: scale(1.1);
  }
`;

const SponsorsItemImage = styled.img`
  max-height: 12.5rem;
  max-width: 100%;
`;


export default function Sponsors() {

  const sponsors = [
    { id: 1, name: 'Huly', image: SponsorsHulyImg, link: "https://huly.app/" },
    // { id: 2, name: 'Major League Hacking', image: "https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.png", link: "https://mlh.io/" },
    { id: 3, name: 'John Jay College of Criminal Justice', image: SponsorsJJayImg, link: "https://www.jjay.cuny.edu/" }
  ];

  return (
    <SponsorsContainer>
      <Title>Sponsors</Title>

      <Description>
        We extend our heartfelt thanks to our sponsors for their generous support and commitment to fostering innovation and collaboration across the CUNY schools. Your sponsorship has made this hackathon possible, empowering students from diverse backgrounds to develop new skills, tackle real-world challenges, and connect with industry professionals. Together, we are creating invaluable learning opportunities and helping build the next generation of tech innovators. Thank you for investing in our potential and inspiring us to push the boundaries of creativity and problem-solving!
      </Description>

      <SponsorsGrid>
        {sponsors.map(sponsor => (
          <SponsorsItem key={sponsor.id} href={sponsor.link} target="_blank">
            <SponsorsItemImage src={sponsor.image} alt={`${sponsor.name} Icon`} />
            {/* <h2>{sponsor.name}</h2> */}
          </SponsorsItem>
        ))}
      </SponsorsGrid>
    </SponsorsContainer>
  )
}
