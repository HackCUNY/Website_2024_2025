import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import logo from '../assets/hack_cuny_logo_1.png';
import railsLogo from '../assets/navbar_rails.png';

const NavContainer = styled.nav`
  width: 100%;
  background-color: #000;
  overflow: hidden;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const NavContent = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 64px;
  width: auto;
  cursor: pointer;
`;

const RailsLogo = styled.img`
  position: absolute;
  right: 40%;
  height: 11vw;
  width: auto;
  z-index: 0; 
  @media (max-width: 768px) {
    display: none;
  }
`;

const DesktopMenu = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const NavLink = styled(RouterNavLink)`
  color: white;
  text-decoration: none;
  position: relative;
  padding-bottom: 0.25rem;
  transition: color 0.3s;

  &:hover {
    color: #60A5FA;
  }

  &.active {
    color: white;
    pointer-events: none;
    cursor: default;
  }

  &.active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 4px;
    border-radius: 25px;
    width: 100%;
    background-color: #3B82F6;
  }
`;

const ApplyButton = styled.a`
  background-color: #fff;
  color: #3B82F6;
  font-weight: bold;
  border: 2px solid #3B82F6;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3B82F6;
    color: #fff;
  }
`;

const MobileMenuButton = styled.button`
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  display: block;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <NavContent>
        <RouterNavLink to="/">
          <Logo src={logo} alt="HACKCUNY Logo" />
        </RouterNavLink>
        <RailsLogo src={railsLogo} alt="NYC Rails" />
        <DesktopMenu>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/schedule">
            Schedule
          </NavLink>
          <NavLink to="/our_team">
            Our Team
          </NavLink>
          <NavLink to="/sponsors">
            Sponsors
          </NavLink>
          <NavLink to="/faqs">
            FAQS
          </NavLink>
          <ApplyButton href="/">Apply</ApplyButton>
        </DesktopMenu>
        <MobileMenuButton onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </NavContent>
      {isOpen && (
        <MobileMenu>
          <NavLink to="/" exact onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/schedule" onClick={() => setIsOpen(false)}>
            Schedule
          </NavLink>
          <NavLink to="/our_team" onClick={() => setIsOpen(false)}>
            Our Team
          </NavLink>
          <NavLink to="/sponsors" onClick={() => setIsOpen(false)}>
            Sponsors
          </NavLink>
          <NavLink to="/faqs" onClick={() => setIsOpen(false)}>
            FAQS
          </NavLink>
          <ApplyButton href="/" onClick={() => setIsOpen(false)}>
            Apply
          </ApplyButton>
        </MobileMenu>
      )}
    </NavContainer>
  );
}

export default Navbar;
