import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #282C33;
  color: #fff;
  position: relative;
`;

export const Logo = styled.h1`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px; /* Ajuste a distância entre a imagem e o texto */
`;

export const LogoImage = styled.img`
  width: 40px; /* Ajuste o tamanho da imagem conforme necessário */
  height: auto;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NavItem = styled.a`
  color: #ABB2BF;
  text-decoration: none;
  font-size: 18px;
  position: relative;
  transition: color 0.3s ease;
  padding-right: 25px;

  &:before {
    content: '#';
    color: #C778DD;
    position: absolute;
    left: -13px; /* Ajuste a posição conforme necessário */
  }

  &:hover {
    color: #C778DD;
  }
`;

export const NavItemHome = styled(NavItem)`
  color: #fff; /* Cor específica para o item "Início" */

  &:hover {
    /* color: #FFBD33; Cor ao passar o mouse sobre o item "Início" */
  }
`;

export const Hamburger = styled.div<{ isOpen: boolean }>`
  display: none;
  cursor: pointer;
  width: 30px;
  height: 24px;
  position: relative;
  z-index: 1000;

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #fff;
    border-radius: 3px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }

  /* Traço superior */
  span:nth-child(1) {
    top: ${({ isOpen }) => (isOpen ? '11px' : '0px')};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
  }

  /* Traço do meio */
  span:nth-child(2) {
    top: 11px;
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }

  /* Traço inferior */
  span:nth-child(3) {
    top: ${({ isOpen }) => (isOpen ? '11px' : '22px')};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div<{ isOpen: boolean }>`
  display: flex;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #333;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }
`;

/* Dropdown */
export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownToggle = styled.div`
  cursor: pointer;
  color: #ABB2BF;
  font-size: 18px;
  display: flex;
  align-items: center;

  &:hover {
    color: #C778DD;
  }
`;

export const DropdownMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #444;
  min-width: 150px;
  z-index: 1;
`;

export const DropdownItem = styled.a`
  color: #fff;
  text-decoration: none;
  display: block;
  padding: 10px;
  font-size: 16px;

  &:hover {
    background-color: #555;
    color: #C778DD;
  }
`;
