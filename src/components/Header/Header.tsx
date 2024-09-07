import { useState } from 'react';
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

import { FaGithub, FaLinkedin, FaWhatsapp, FaGlobe } from 'react-icons/fa';
import logo from '../../assets/images/Logo.svg';

type SocialLink = {
  href: string;
  icon: typeof FaGithub;
  label: string;
};

const socialLinks: SocialLink[] = [
  { href: "https://novo-portifolio-eta.vercel.app/", icon: FaGlobe, label: "Website" },
  { href: "https://wa.me/5538992182727", icon: FaWhatsapp, label: "WhatsApp" },
  { href: "https://github.com/marconesdb", icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/marconesb/", icon: FaLinkedin, label: "LinkedIn" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

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
          <NavItemHome href="#inicio">Início</NavItemHome>
          <NavItem href="#projetos">Projetos</NavItem>
          <NavItem href="#skills">Skills</NavItem>
          <NavItem href="#sobre">Sobre</NavItem>
          <NavItem href="#contato">Contato</NavItem>
          <Dropdown>
            <DropdownToggle onClick={toggleDropdown}>
              PT
              <span>{dropdownOpen ? '˰' : 'ˬ'}</span>
            </DropdownToggle>
            <DropdownMenu isOpen={dropdownOpen}>
              <DropdownItem href="#en">EN</DropdownItem>
              <DropdownItem href="#es">ES</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>

        {isOpen && (
          <ImageContainer>
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <SvgLink key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon size={40} color="#fff" />
              </SvgLink>
            ))}
          </ImageContainer>
        )}
      </NavMenu>
    </Container>
  );
};

export default Header;