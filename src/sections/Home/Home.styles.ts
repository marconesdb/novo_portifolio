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
  flex-direction: row; /* Altera para dispor as imagens lado a lado */
  align-items: center; /* Centraliza verticalmente */
  justify-content: center; /* Centraliza horizontalmente */
  gap: 20px; /* Espaço entre as imagens, ajuste conforme necessário */
  padding: 20px;
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
  margin-top: 50px;
  margin-left: 0px;
`;

export const ImageFundo = styled.img`
  width: 80px;
  margin-left: 100px;
  margin-bottom: 300px;
  width: 150px;
  transform: rotate(15deg); /* Adiciona a rotação de 30 graus */
`;

export const ImageQuadrado = styled.img`
  width: 35px; /* Ajuste o tamanho conforme necessário */
  height: 35px; /* Ajuste o tamanho conforme necessário */
  margin-right: 10px; /* Espaçamento entre a imagem e o texto */
  background-color: #d9a400;
  
`;

export const ImagePerfil = styled.img`
  
  
`;


export const PortfolioTag = styled.div`
  display: flex; /* Usando flexbox para alinhar o conteúdo */
  align-items: center; /* Centraliza verticalmente o conteúdo */
  font-size: 16px;
  color: #cccccc;
  margin: 0px; /* Remove a margem do PortfolioTag */
  padding: 0; /* Remove o preenchimento do PortfolioTag */

  span {
    color: #fff;
    font-weight: bold;
  }

  p{
      margin-right: -35px;
  }
`;


export const StyledMainContent = styled.main`
  background-color: #2c3036; 
`;


// Traço horizontal à esquerda
export const HorizontalLineSuperior = styled.div`
  position: relative;
  width: 50px; /* Largura reduzida do traço à esquerda */
  height: 2px; /* Altura do traço */
  background-color: #ccc; /* Cor do traço */
  display: inline-block; /* Faz com que o traço respeite o espaço do contêiner */
`;

// Componente de aspa
export const HorizontalAspas = styled.div`
  position: relative;
  width: 50px; /* Largura do espaço onde as aspas ficam */
  height: 2px; /* Altura do traço */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px; /* Tamanho das aspas */
  color: #ccc; /* Cor das aspas */
  display: inline-block; /* Faz com que o traço respeite o espaço do contêiner */
  
`;

// Traço horizontal à direita
export const HorizontalLineSuperiorCont = styled.div`
  position: relative;
  width: 750px; /* Largura reduzida do traço à direita */
  height: 2px; /* Altura do traço */
  background-color: #ccc; /* Cor do traço */
  display: inline-block; /* Faz com que o traço respeite o espaço do contêiner */
`;

// Traço horizontal à direita
export const HorizontalLineInferior = styled.div`
  position: relative;
  width: 750px; /* Largura reduzida do traço à esquerda */
  height: 2px; /* Altura do traço */
  background-color: #ccc; /* Cor do traço */
  display: inline-block; /* Faz com que o traço respeite o espaço do contêiner */
`;


export const InferiorAspas = styled.div`
  position: relative;
  width: 50px; /* Largura do espaço onde as aspas ficam */
  height: 2px; /* Altura do traço */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px; /* Tamanho das aspas */
  color: #ccc; /* Cor das aspas */
  display: inline-block; /* Faz com que o traço respeite o espaço do contêiner */
  
`;

export const HorizontalLineInferiorCont = styled.div`
  position: relative;
  width: 50px; /* Largura reduzida do traço à direita */
  height: 2px; /* Altura do traço */
  background-color: #ccc; /* Cor do traço */
  display: inline-block; /* Faz com que o traço respeite o espaço do contêiner */
`;


export default StyledMainContent;