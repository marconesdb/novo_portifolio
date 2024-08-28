import React, { useState } from 'react';
import {
  Container,
  Logo,
  Nav,
  NavItem,
  Hamburger,
  NavMenu,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from './Header.styles';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Container>
      <Logo>My Portfolio</Logo>
      <Hamburger isOpen={isOpen} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>
      <NavMenu isOpen={isOpen}>
        <Nav>
          <NavItem href="#home">Início</NavItem>
          <NavItem href="#about">Sobre</NavItem>
          <NavItem href="#skills">Skills</NavItem>
          <NavItem href="#projects">Projetos</NavItem>
          <Dropdown>
            <DropdownToggle onClick={toggleDropdown}>
              PT ˅
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
