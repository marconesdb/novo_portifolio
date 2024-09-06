import styled from 'styled-components';


export const Container = styled.header`

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  position: fixed; /* Navbar fixa no topo */
  top: 0;  /* Adicionado para fixar no topo */
  z-index: 1000;  /* Z-index alto para sobrepor outros elementos */
  background-color: #282C33;
  color: #fff;
  box-sizing: border-box;
  background-color: #2c3036;
  width: 100%;
  max-width: 1065px;  /* Exemplo de largura máxima */
  /* Adicionando borda sólida e box-shadow */
  border: 1px solid #000000;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
  


  
  @media (min-width: 1640px) {
    max-width: 1335px; 
  }
  
`;



export const Logo = styled.h1`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoImage = styled.img`
  width: 40px;
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
    color: #A8990F;
    position: absolute;
    left: -13px;
  }

  &:hover {
    color: #A8990F;
  }
`;

export const NavItemHome = styled(NavItem)`
  color: #fff;

  &:hover {
    /* color: #FFBD33; */
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

  span:nth-child(1) {
    top: ${({ isOpen }) => (isOpen ? '11px' : '0px')};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
  }

  span:nth-child(2) {
    top: 11px;
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }

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
    background-color: #2c3036;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  
`;

export const DropdownToggle = styled.div`
  cursor: pointer;
  color: #ABB2BF;
  font-size: 18px;
  display: flex;
  align-items: center;
  position: relative;
  font-weight: bold;
  

  &:hover {
    color: #A8990F;
  }

  span {
    margin-left: 5px;
    font-size: 18px; // Ajustado para ser do mesmo tamanho do texto
  }
`;

export const DropdownMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #444;
  min-width: 100px;
  z-index: 1000;
  padding: 5px 0;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    position: static;
    transform: none;
    width: 100%;
    margin-top: 10px;
  }
`;

export const DropdownItem = styled.a`
  color: #ABB2BF;
  text-decoration: none;
  display: block;
  padding: 10px;
  font-size: 16px;
  white-space: nowrap;
  text-align: center;
  width: 100%;
  font-weight: bold;

  &:hover {
    background-color: #555;
    color: #A8990F;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;  // Espaço entre o menu e as imagens
  
`;

export const SvgImage = styled.img`
  width: 100%;  // Tamanho das imagens SVG
  height: auto;
`;

export const SvgLink = styled.a`
  display: inline-block;
  width: 40px;
  height: auto;
  transition: transform 0.2s;
  margin-right: 3px;
  padding: 2px;
  &:hover {
    transform: scale(1.1);  // Efeito de zoom ao passar o mouse
  }
`;
