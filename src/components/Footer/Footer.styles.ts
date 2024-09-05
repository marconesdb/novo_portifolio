import styled from 'styled-components';

// Estilizando o contêiner principal do Footer
export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 1px solid #fff;
  background-color: #282C33;
  transform: translateY(150px);
  
  @media (min-width: 1640px) {
    transform: translateY(300px);
    }
`;

export const FooterContent = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3036;
  color: #fff;
  position: relative;
  box-sizing: border-box;
  width: 70%;
  height: 250px;
  border-top: 0px solid #fff;
  padding-left: 15px;
  padding-right: 15px;

  @media (max-width: 1200px) {
    width: 90%;
    flex-direction: column;
    height: auto;
    padding: 20px;
  }

  @media (max-width: 700px) {
    width: 95%;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  @media (max-width: 540px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }

  @media (min-width: 1640px) {
      padding-left: 15px;
      padding-right: 15px;
    }
`;

// Seção da esquerda
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 700px) {
    align-items: center;
  }

  @media (max-width: 540px) {
    align-items: center;
    margin-bottom: 20px;
  }
`;

// Estilo para o conteúdo da seção esquerda
export const LeftSectionContent = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 540px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Contêiner para o layout dos parágrafos
export const ParagraphContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 540px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Estilo para o primeiro parágrafo
export const FirstParagraph = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-right: 10px;
  margin-left: -25px;
  margin-top: -110px;

  @media (max-width: 540px) {
    margin-left: 0;
    margin-top: 0;
    text-align: center;
  }
`;

// Estilo para o segundo parágrafo
export const SecondParagraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-left: 50px;
  color: #ABB2BF;
  margin-top: -110px;

  @media (max-width: 540px) {
    margin-left: 0;
    margin-top: 0;
    text-align: center;
  }
`;

// Estilo para o terceiro parágrafo
export const ThirdParagraph = styled.p`
  font-weight: 400;
  margin-top: -20px;
  margin-left: 5px;
  font-size: 16px;

  @media (max-width: 540px) {
    text-align: center;
    margin-top: 10px;
    margin-left: 0;
  }
`;

// Estilo para o parágrafo central
export const CentralParagraph = styled.p`
  font-size: 16px;
  color: #ABB2BF;

  @media (max-width: 540px) {
    text-align: center;
    margin-bottom: 10px;
  }
`;

// Estilo para o parágrafo das redes sociais
export const ParagraphSocialNetworks = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin-right: 25px;
  margin-top: -60px;

  @media (max-width: 540px) {
    text-align: center;
    margin-right: 0;
    margin-top: 10px;
  }
`;

// Seção da direita
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 700px) {
    align-items: center;
    margin-top: 20px;
  }

  @media (max-width: 540px) {
    align-items: center;
    margin-top: 10px;
  }
`;

// Adicione um estilo para a imagem do logo
export const LogoImage = styled.img`
  width: 100px;
  height: 30px;
  margin-left: -30px;
  margin-top: -110px;

  @media (max-width: 540px) {
    margin-left: 0;
    margin-top: 0;
  }
`;

// Contêiner de Imagens na direita
export const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  @media (max-width: 540px) {
    justify-content: center;
    width: 100%;
    margin-top: 15px;
  }
`;

// Seção central
export const CenterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 20px;

  @media (max-width: 540px) {
    position: static;
    bottom: 0;
    margin-top: 15px;
  }
`;

// Contêiner da Imagem
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  @media (max-width: 540px) {
    margin-right: 0;
  }
`;
