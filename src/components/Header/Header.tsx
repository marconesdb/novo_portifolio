import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Importando o ScrollLink do react-scroll
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
          <ScrollLink
            to="inicio"
            smooth={true}
            duration={500}
            offset={-70}  // Ajuste o offset conforme necessário
          >
            <NavItemHome>Início</NavItemHome>
          </ScrollLink>
          <ScrollLink
            to="projetos"
            smooth={true}
            duration={500}
            offset={-70}
          >
            <NavItem>Projetos</NavItem>
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            offset={-70}
          >
            <NavItem>Skills</NavItem>
          </ScrollLink>
          <ScrollLink
            to="sobre"
            smooth={true}
            duration={500}
            offset={-70}
          >
            <NavItem>Sobre</NavItem>
          </ScrollLink>
          <ScrollLink
            to="contato"
            smooth={true}
            duration={500}
            offset={-70}
          >
            <NavItem>Contato</NavItem>
          </ScrollLink>
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
