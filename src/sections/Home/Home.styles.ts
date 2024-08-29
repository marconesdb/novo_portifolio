import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1b1e23; /* Cor de fundo escura */
  color: #ffffff; /* Cor do texto */
  height: 100vh;
  padding: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row; /* Alinhamento horizontal do conteúdo principal */
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px; /* Ajuste conforme necessário */
`;

export const TextSection = styled.div`
  flex: 1;
  text-align: left;
  margin: 0; /* Remove qualquer margem que possa estar aplicando ao texto */
  padding: 0; /* Remove qualquer preenchimento que possa estar aplicando ao texto */
`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column; /* Adiciona esta linha para empilhar verticalmente */
  align-items: center; /* Centraliza horizontalmente */
  justify-content: center; /* Centraliza verticalmente */
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: left; /* Alinha o texto à esquerda */
  margin: 0; /* Remove a margem do título */
  padding: 0; /* Remove o preenchimento do título */
  text-shadow: 1px 5px 5px rgba(0, 0, 0, 0.5);
  span {
    color: #d9a400; /* Cor amarela */
    
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  text-align: left; /* Alinha o texto à esquerda */
  margin: 0; /* Remove a margem do subtítulo */
  padding: 0; /* Remove o preenchimento do subtítulo */
  color: #cccccc; /* Texto mais claro */
  margin-top: 30px;
`;

export const ContactButton = styled.button`
  padding: 10px 20px;
  border: 2px solid #d9a400;
  background: transparent;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin: 0;      /* Remove qualquer margem que possa estar aplicando ao botão */
  display: block; /* Garante que o botão seja exibido como bloco */
  text-align: left; /* Alinha o texto do botão à esquerda */
  margin-top: 20px;
  
  &:hover {
    background-color: #d9a400;
    color: #1b1e23;
  }
`;

export const Image = styled.img`
  width: 350px; /* Ajuste o tamanho conforme necessário */
  height: auto;
  margin-bottom: 10px;
`;

export const ImageQuadrado = styled.img`
  width: 30px; /* Ajuste o tamanho conforme necessário */
  height: 30px; /* Ajuste o tamanho conforme necessário */
  margin-right: 10px; /* Espaçamento entre a imagem e o texto */
`;

export const PortfolioTag = styled.div`
  display: flex; /* Usando flexbox para alinhar o conteúdo */
  align-items: center; /* Centraliza verticalmente o conteúdo */
  font-size: 16px;
  color: #cccccc;
  margin: 0; /* Remove a margem do PortfolioTag */
  padding: 0; /* Remove o preenchimento do PortfolioTag */

  span {
    color: #fff;
    font-weight: bold;
  }

  p{
    margin-right: 5px;
  }
`;

export const QuoteContainer = styled.div`
  background-color: #2c3038; /* Fundo da citação */
  padding: 20px;
  border-left: 5px solid #d9a400; /* Linha à esquerda */
  margin-top: 20px;
  text-align: center;
`;

export const QuoteText = styled.p`
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 10px;
`;

export const QuoteAuthor = styled.p`
  font-size: 1rem;
  color: #cccccc;
`;

const StyledMainContent = styled.main`
  background-color: #2c3036; 
`;

export default StyledMainContent;
