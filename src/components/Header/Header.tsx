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
} from './Header.styles';

import { FaGithub, FaLinkedin, FaWhatsapp, FaGlobe } from 'react-icons/fa'; // Importação dos ícones
import logo from '../../assets/images/Logo.svg';

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
          <NavItem href="#projetos">Projetos</NavItem>
          <NavItem href="#skills">Skills</NavItem>
          <NavItem href="#sobre">Sobre</NavItem>
          <NavItem href="#contato">Contato</NavItem>
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
            <SvgLink href="https://novo-portifolio-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
              <FaGlobe size={40} color="#fff" /> {/* Ícone de Web */}
            </SvgLink>
            <SvgLink href="https://wa.me/5538992182727" target="_blank">
              <FaWhatsapp size={40} color="#fff" /> {/* Ícone de WhatsApp */}
            </SvgLink>
            <SvgLink href="https://github.com/marconesdb" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} color="#fff" /> {/* Ícone de Github */}
            </SvgLink>
            <SvgLink href="https://www.linkedin.com/in/marconesb/" target="_blank">
              <FaLinkedin size={40} color="#fff" /> {/* Ícone de LinkedIn */}
            </SvgLink>
          </ImageContainer>
        )}
      </NavMenu>
    </Container>
  );
};

export default Header;
