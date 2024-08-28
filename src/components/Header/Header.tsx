import React, { useState } from 'react';
import {
  Container,
  Logo,
  LogoImage,
  Nav,
  NavItem,
  NavItemHome,
  Hamburger,
  NavMenu,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ImageContainer,
  SvgLink,
  SvgImage
} from './Header.styles';

import logo from '../../assets/images/Logo.svg';
import Github from '../../assets/images/Github.svg';
import Web from '../../assets/images/Web.svg';
import Figma from '../../assets/images/Figma.svg';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownSymbol, setDropdownSymbol] = useState('ˬ');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setDropdownSymbol(dropdownOpen ? 'ˬ' : '˰'); // Alterna entre ˬ e ˰
  };

  return (
    <Container>
      <Logo>
        <LogoImage src={logo} alt="Logo" />
        MSB
      </Logo>
      <Hamburger isOpen={isOpen} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>
      <NavMenu isOpen={isOpen}>
        <Nav>
          <NavItemHome href="#início">Início</NavItemHome>
          <NavItem href="#sobre">Sobre</NavItem>
          <NavItem href="#skills">Skills</NavItem>
          <NavItem href="#projetos">Projetos</NavItem>
          <Dropdown>
            <DropdownToggle onClick={toggleDropdown}>
              PT
              <span>{dropdownSymbol}</span> {/* Exibe o caractere Unicode baseado no estado */}
            </DropdownToggle>
            <DropdownMenu isOpen={dropdownOpen}>
              <DropdownItem href="#en">EN</DropdownItem>
              <DropdownItem href="#es">ES</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>

        {/* Exibe os ícones somente se o menu estiver aberto */}
        {isOpen && (
          <ImageContainer>
            <SvgLink href="https://github.com/marconesdb" target="_blank" rel="noopener noreferrer">
              <SvgImage src={Github} alt="Github" />
            </SvgLink>
            <SvgLink href="https://novo-portifolio-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
              <SvgImage src={Web} alt="Web" />
            </SvgLink>
            <SvgLink href="https://www.figma.com/design/IQ1tIxj1mZXhpqpMWLWiOa/Portfolio-(Community)?node-id=0-1&t=vwzNXYxBGgZ8PvuH-0" target="_blank" rel="noopener noreferrer">
              <SvgImage src={Figma} alt="Figma" />
            </SvgLink>
          </ImageContainer>
        )}
      </NavMenu>
    </Container>
  );
};

export default Header;
