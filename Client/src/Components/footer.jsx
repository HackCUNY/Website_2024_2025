// Footer.js
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const FooterContainer = styled.footer`
  width: 120%;
  position: relative;
  left: -10%;
  background-color: #3B82F6;
  padding: 1rem;
  margin-top: 1rem;
`;

const FooterContent = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  
  img {
    height: 52px;
    width: auto;
  }
`;

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 12px;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const LinkStyled = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`;

const IconButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: background-color 0.3s, transform 0.3s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
  
  svg {
    width: 20px;
    height: 20px;
    color: white;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoContainer>
          <img 
            src="/src/assets/hack_cuny_logo_1.png" 
            alt="HackCUNY Logo" 
          />
        </LogoContainer>

        <CenterContent>
          <SocialLinks>
            <IconButton 
              href="https://instagram.com/hackcuny" 
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#E1306C' }}
            >
              <FaInstagram />
            </IconButton>

            <IconButton 
              href="mailto:support@hackcuny.com" 
              aria-label="Gmail"
              style={{ color: '#D44638' }}
            >
              <MdEmail />
            </IconButton>
          </SocialLinks>

          <p>©2024 - 2025 HackCUNY</p>
          <div>
            <span>Reach us at </span>
            <LinkStyled href="mailto:support@hackcuny.com">
              support@hackcuny.com
            </LinkStyled>
          </div>
        </CenterContent>

        <LogoContainer>
          <img 
            src="/src/assets/footer_cuny.png" 
            alt="CUNY Logo" 
          />
        </LogoContainer>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer;
