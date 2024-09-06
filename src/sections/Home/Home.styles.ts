// Home.styles.tsx
import styled from 'styled-components';

// Definindo variáveis para cores
const primaryColor = '#2c3036';
const secondaryColor = '#A8990F';
const textColor = '#ffffff';
const lightTextColor = '#cccccc';

// Componente Container
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${primaryColor};
  color: ${textColor};
  height: 100vh;
  padding: 20px;
  margin-top: 89px;

  @media (max-width: 400px) {
    padding: 10px;
    height: auto;
    justify-content: flex-start;
  }
`;

// Componente ContentWrapper
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

// Componente TextSection
export const TextSection = styled.div`
  flex: 1;
  text-align: left;
  margin: 0;
  padding: 0;

  @media (max-width: 400px) {
    text-align: center;
    width: 100%;
  }
`;

// Componente ImageSection
export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 0;
  margin-right: -90px;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    margin-right: 0;
  }
`;

// Componente Logo
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-right: -5px;
  margin-top: -120px;

  @media (max-width: 400px) {
    margin-top: -50px;
    gap: 5px;
    transform: scale(0.8);
    margin-left: 27px;
    margin-right: 10px;
  }

  .retanguloInferior {
    border: 1px solid ${secondaryColor};
    width: 80px;
    height: 150px;
    transform: translateY(90px);
    margin-left: -29px;

    @media (max-width: 400px) {
      transform: translateY(60px);
      width: 60px;
      height: 120px;
    }
  }

  .retanguloInferiorMenor {
    border: 1px solid ${secondaryColor};
    width: 40px;
    height: 49px;
    transform: translateY(-1px);
    margin-left: 78px;
    margin-top: 1px;

    @media (max-width: 400px) {
      width: 30px;
      height: 45px;
      margin-left: 58px;
      transform: translateY(-2px);
    }
  }

  .retanguloSuperior {
    border: 1px solid ${secondaryColor};
    width: 80px;
    height: 150px;
    transform: translateY(-115px);
    margin-left: 50px;

    @media (max-width: 400px) {
      width: 60px;
      height: 120px;
      transform: translateY(-90px);
      margin-left: 30px;
    }
  }

  .retanguloSuperiorMenor {
    border: 1px solid ${secondaryColor};
    width: 40px;
    height: 46px;
    transform: translateY(75px);
    margin-left: -40px;
    margin-top: 29px;

    @media (max-width: 400px) {
      width: 30px;
      height: 45px;
      transform: translateY(45px);
      margin-left: -30px;
    }
  }
`;

// Componente Title
export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: left;
  margin: 0;
  padding: 0;
  text-shadow: 1px 5px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 400px) {
    font-size: 24px;
    text-align: center;
    margin-top: 50px;
  }

  span {
    color: ${secondaryColor};
  }
`;

// Componente Subtitle
export const Subtitle = styled.p`
  font-size: 1rem;
  text-align: left;
  margin: 0;
  padding: 0;
  color: ${lightTextColor};
  margin-top: 30px;

  @media (max-width: 400px) {
    text-align: center;
    font-size: 0.9rem;
    margin-top: 15px;
  }
`;

// Componente ContactButton
export const ContactButton = styled.a`
  display: block;
  padding: 10px 20px;
  border: 1px solid ${secondaryColor};
  background: transparent;
  color: ${textColor};
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  text-decoration: none;
  text-align: left;
  width: 178px;

  &:hover {
    background-color: ${secondaryColor};
    color: ${textColor};
  }

  @media (max-width: 400px) {
    width: 50%;
    text-align: center;
    margin-left: 25%;
    margin-top: 50px;
  }
`;

// Componente Image
export const Image = styled.img`
  width: 350px;
  height: auto;
  margin-top: 50px;
  margin-left: -30px;

  @media (max-width: 400px) {
    width: 250px;
    margin-left: 0;
    margin-top: 100px;
  }
`;

// Componente ImageQuadrado
export const ImageQuadrado = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  background-color: ${secondaryColor};
`;

// Componente PortfolioTag
export const PortfolioTag = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${lightTextColor};
  margin: 0;
  padding: 0;
  margin-top: 30px;
  border: 1px solid #ABB2BF;
  width: 400px;
  padding: 5px;
  margin-right: 90px;

  @media (max-width: 400px) {
    width: 100%;
    margin-right: 0;
    font-size: 0.65rem;
    margin-top: 20px;
  }

  span {
    color: ${textColor};
    font-weight: bold;
  }

  p {
    margin-right: -35px;

    @media (max-width: 400px) {
      margin-right: 0;
      text-align: center;
    }
  }
`;