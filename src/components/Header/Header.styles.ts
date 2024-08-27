import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
  position: relative;
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
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
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6347;
  }
`;

export const Hamburger = styled.div<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  width: 30px;
  height: 24px;
  position: relative;
  z-index: 1000;

  span {
    height: 4px;
    background-color: #fff;
    transition: transform 0.4s ease, opacity 0.4s ease, background-color 0.4s ease;
    width: 100%;
    border-radius: 2px;
    position: relative;
  }

  /* Primeiro traço (topo) */
  span:nth-child(1) {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)')};
  }

  /* Segundo traço (meio) */
  span:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    transform: ${({ isOpen }) => (isOpen ? 'translateX(-20px)' : 'translateX(0)')};
  }

  /* Terceiro traço (inferior) */
  span:nth-child(3) {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)')};
  }

  @media (max-width: 768px) {
    display: flex;
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
