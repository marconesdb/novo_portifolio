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
  padding: 2rem; /* Usar rem para maior consistência */
  margin-top: 0px;

  @media (min-width: 360px) and (max-width: 768px) {
    padding: 1.5rem;  // Reduzir o padding
    margin-top: 60px;  // Ajustar o espaçamento superior para melhor visualização em telas menores
    height:auto;
    min-height: 100vh; // Garante que o container tenha pelo menos a altura da viewport

  
  }

  
  @media (min-width: 769px) and (max-width: 991px) {
    width: 100%;
    max-width: none;
    
    }


  @media (min-width: 992px) and (max-width: 1280px){
    width: 100%; 
     
  }

  @media (min-width: 1281px) and (max-width: 1639px){
    width: 100%;
    max-width: 100%;
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

  @media (min-width: 360px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    
  }

  @media (min-width: 769px) and (max-width: 991px) {
    width: 100%;
    margin-top: 0px;
    
    }

  @media (min-width: 992px) and (max-width: 1280px){
    width: 100%;
    padding: 0;
    
  }
  `;

// Componente TextSection
export const TextSection = styled.div`
  flex: 1;
  text-align: left;
  margin: 0;
  padding: 0;

  @media (min-width: 360px) and (max-width: 768px) {
    text-align: center;
    width: 100%;
    margin-top: -0.5rem;
    /* transform: translateY(50px); */
    padding-top: 3rem;  // Usar rem para manter consistência

    @media (min-width: 992px) and (max-width: 1280px){
    width: 100%;
    margin-right: 0;
    
  }


  @media (min-width: 769px) and (max-width: 991px) {
    width: 100%;
   
    
    }

    .TextoFront-end{
      display: inline;
      
    }
  }
`;

// Componente ImageSection
export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 0.625rem;  // Usar rem
  padding: 0;
  margin-right: -5rem;  // Ajuste com rem

 

  @media (min-width: 360px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    transform: translateY(0px);
  }


  @media (min-width: 769px) and (max-width: 991px) {
  flex-direction: row;
  gap: 1rem; // Ajusta o espaçamento entre as imagens
  margin-right: 0; // Remover a margem à direita
  /* transform: translateX(33px); */
  transform: translateY(-90px);
  
  }

  

  @media (min-width: 992px) and (max-width: 1280px){
    width: 100%;
    margin-right: 0;
  }


  @media (min-width: 1281px) and (max-width: 1639px){
    margin-right: 0;  
    
  }
`;

// Componente Logo
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
 
  transform: translateY(0px);
  transform: translateX(50px);
  /* margin-left: 20px; */
  /* top: -250px; */
  

  @media (min-width: 360px) and (max-width: 768px) {
    /* margin-top: 0px; */
    gap: 0.5rem;
    transform: scale(0.9);
  }

  @media (min-width: 769px) and (max-width: 991px) {
     
    transform: translateY(50px);
    transform: translateX(75px);
    
  }

  @media (min-width: 1640px) {
    
  }


  @media (min-width: 992px) and (max-width: 1280px) {
    width: 100%;
    transform: translateX(140px);
  }



  .retanguloInferior {
    border: 1px solid ${secondaryColor};
    width: 5rem;
    height: 9.375rem;
    transform: translateY(5.625rem);
    margin-left: -1.8125rem;

    @media (max-width: 400px) {
      width: 3.75rem;
      height: 7.5rem;
      transform: translateY(3.75rem);
    }
  }

  .retanguloInferiorMenor {
    border: 1px solid ${secondaryColor};
    width: 2.5rem;
    height: 3.0625rem;
    transform: translateY(-0.0625rem);
    margin-left: 4.875rem;
    

    @media (max-width: 400px) {
      width: 2.25rem;
      height: 2.8125rem;
      margin-left: 3.625rem;
      transform: translateY(-2px);
    }
  }

  .retanguloSuperior {
    border: 1px solid ${secondaryColor};
    width: 5rem;
    height: 9.375rem;
    transform: translateY(-7.1875rem);
    margin-left: 3.125rem;

    @media (max-width: 400px) {
      width: 3.75rem;
      height: 7.5rem;
      transform: translateY(-5.625rem);
      margin-left: 1.875rem;
    }
  }

  .retanguloSuperiorMenor {
    border: 1px solid ${secondaryColor};
    width: 2.5rem;
    height: 2.875rem;
    transform: translateY(4.6875rem);
    margin-left: -2.5rem;
    margin-top: 1.8125rem;

    @media (max-width: 400px) {
     width: 2.25rem;
      height: 2.8125rem;
      transform: translateY(2.65rem);
      margin-left: -2.270rem;
    }
  }
`;

// Componente Title
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  margin: 0;
  padding: 0;
  text-shadow: 1px 5px 5px rgba(0, 0, 0, 0.5);
  /* margin-right: 30px; */


  @media (min-width: 360px) and (max-width: 768px) {
    font-size: 1.65rem;
    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 991px) {
    font-size: 1.9rem;
    
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
  margin-top: 2rem;

  @media (min-width: 360px) and (max-width: 768px) {
    text-align: center;
    font-size: 0.95rem;
    padding-top: 1.25rem;
  }

  
`;

// Componente ContactButton
export const ContactButton = styled.a`
  display: block;
  padding: 0.625rem 1.25rem;
  border: 1px solid ${secondaryColor};
  background: transparent;
  color: ${textColor};
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  text-align: left;
  width: 11rem;
  margin-top: 2rem;

  &:hover {
    background-color: ${secondaryColor};
    color: ${textColor};
  }

  @media (min-width: 360px) and (max-width: 768px) {
    width: 60%;
    text-align: center;
    margin-left: 20%;
    margin-top: 5rem;
    
  }

   
`;

// Componente Image
export const Image = styled.img`
  width: 21.875rem;
  height: auto;
  margin-top: 3.125rem;
  margin-left: 2.8rem;
  

  @media (min-width: 360px) and (max-width: 768px) {
    width: 17.5rem;
    margin-left: 2.1875rem;
    margin-top: 1.25rem;
  }

  @media (min-width: 769px) and (max-width: 991px) {
    width: 18rem;
    /* margin-left: 75px; */
    /* padding: 25px; */
    /* transform: translateX(33px); */
  }


  @media (min-width: 992px) and (max-width: 1280px){
    transform: translateX(70px);
  }
`;

// Componente ImageQuadrado
export const ImageQuadrado = styled.img`
  width: 2.1875rem;
  height: 2.1875rem;
  margin-right: 0.625rem;
  background-color: ${secondaryColor};
`;

// Componente PortfolioTag
export const PortfolioTag = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: ${lightTextColor};
  margin: 0;
  /* padding: 0; */
  margin-top: 2rem;
  border: 1px solid #ABB2BF;
  width: 25rem;
  padding: 0.3125rem;
  margin-right: 4.9rem;

  @media (min-width: 360px) and (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    font-size: 0.8rem;
    justify-content: center;
    margin-top: 20px;
  }

 
  @media (min-width: 769px) and (max-width: 991px) {
    width: 17.875rem;
    margin-top: 20px;
    margin-right: 0;
    margin-left: 25px;
    /* transform: translateX(135px); */
  }


  @media (min-width: 992px) and (max-width: 1280px){
    transform: translateX(50px);
  } 

  span {
    color: ${textColor};
    font-weight: bold;
  }

  p {
    margin-right: -2.1875rem;

    @media (min-width: 360px) and (max-width: 768px) {
      margin-right: 0;
      text-align: center;
    }
  }
`;