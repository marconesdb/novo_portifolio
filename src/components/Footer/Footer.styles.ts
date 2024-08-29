import styled from 'styled-components';

// Estilizando o contêiner principal do Footer
export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 1px solid #fff;
  background-color: #282C33;
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
`;


// Seção da esquerda
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// Estilo para o conteúdo da seção esquerda
export const LeftSectionContent = styled.div`
  display: flex;
  align-items: center; /* Alinha verticalmente a imagem e os parágrafos */
`;

// Contêiner para o layout dos parágrafos
export const ParagraphContainer = styled.div`
  display: flex;
  align-items: center;
`;

// Estilo para o primeiro parágrafo
export const FirstParagraph = styled.p`
 /* font-family: 'Fira Code', sans-serif; */
 font-size: 16px;
 font-weight: 700;
 margin-right: 10px; /* Espaço entre o primeiro parágrafo e o segundo */
 margin-left: -25px;
 margin-top: -110px;
`;

// Estilo para o segundo parágrafo
export const SecondParagraph = styled.p`
  /* font-family: 'Fira Code', sans-serif; */
  font-size: 16px;
  font-weight: 400;
  margin-left: 50px;
  color: #ABB2BF;
  margin-top: -110px;
`;

// Estilo para o terceiro parágrafo
export const ThirdParagraph = styled.p`
  font-weight: 400;
  margin-top: -20px;
  margin-left: 5px;
  /* font-family: 'Fira Code', sans-serif; */
  font-size: 16px;
`;

// Estilo para o parágrafo central
export const CentralParagraph = styled.p`
   /* font-family: 'Fira Code', sans-serif; */
   font-size: 16px;
   color: #ABB2BF;
   
 
`;

// Estilo para o parágrafo das redes sociais
export const ParagraphSocialNetworks = styled.p`
  /* font-family: 'Fira Code', sans-serif; */
  font-size: 24px;
  font-weight: 400;
  margin-right: 25px;
  margin-top: -60px;
`;

// Seção da direita
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;


// Adicione um estilo para a imagem do logo
export const LogoImage = styled.img`
  width: 100px; /* Ajuste o tamanho conforme necessário */
  height: 30px; /* Mantém a proporção original */
   /* Centraliza a imagem, se necessário */
  /* Adicione outros estilos conforme necessário */
  margin-left: -30px;
  margin-top: -110px;
`;


// Contêiner de Imagens na direita
export const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  
`;

// Seção central
export const CenterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%; /* Garante que ocupa toda a largura disponível */
  position: absolute; /* Permite o posicionamento absoluto */
  bottom: 20px; /* Distância da parte inferior */
  
  
`;

// Contêiner da Imagem
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
