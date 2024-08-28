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
  DropdownItem
} from './Header.styles';

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
          <NavItemHome href="#home">Início</NavItemHome>
          <NavItem href="#about">Sobre</NavItem>
          <NavItem href="#skills">Skills</NavItem>
          <NavItem href="#projects">Projetos</NavItem>
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
      </NavMenu>
    </Container>
  );
};

export default Header;
