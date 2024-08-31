import { styled } from "styled-components";

export const ContainerCitacao = styled.div`
  text-align: center; 
 
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
  width: 480px; /* Largura reduzida do traço à direita */
  height: 2px; /* Altura do traço */
  background-color: #ccc; /* Cor do traço */
  display: inline-block; /* Faz com que o traço respeite o espaço do contêiner */
`;

// Traço horizontal à direita
export const HorizontalLineInferior = styled.div`

  position: relative;
  width: 480px; /* Largura reduzida do traço à esquerda */
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

export const Citacao = styled.div`
 color: #fff;
 margin-top: 20px;
 margin-bottom: -20px;
`;

export const VerticalLineDireito = styled.div`
 color: #fff;
 width: 2px; /* Largura do traço vertical */
 height: 71px; /* Altura do traço vertical */
 background-color: #ccc; /* Cor do traço */
 margin: 0 auto; /* Centraliza o traço horizontalmente */
 margin-right: 240px;
 transform: translateY(-76px); /* Sobe o traço 100px */
`;

export const VerticalLineEsquerdo = styled.div`
 color: #fff;
 width: 2px; /* Largura do traço vertical */
 height: 70px; /* Altura do traço vertical */
 background-color: #ccc; /* Cor do traço */
 margin: 0 auto; /* Centraliza o traço horizontalmente */
 margin-left: 240px;
 transform: translateY(112px); 
 
`;

export const VerticalLineEsquerdoMenor = styled.div`
 color: #fff;
 width: 2px; /* Largura do traço vertical */
 height: 60px; /* Altura do traço vertical */
 background-color: #ccc; /* Cor do traço */
 margin: 0 auto; /* Centraliza o traço horizontalmente */
 margin-left: 624px;
 transform: translateY(-78px); /* Desce o traço 100px */

`;


export const Autor = styled.div`
 color: #fff;
 margin-top: 20px;
 margin-bottom: -20px;
 transform: translateY(-138px); /* Sobe nome do Autor */
 margin-left: 670px;
`;

export const HorizontalLineInferiorMenor = styled.div`
position: relative;
width: 200px; /* Largura reduzida do traço à esquerda */
height: 2px; /* Altura do traço */
background-color: #ccc; /* Cor do traço */
display: inline-block; /* Faz com que o traço respeite o espaço do contêiner */
margin-left: 624px;
margin-bottom: 50px;
transform: translateY(-100px); /* Sobe o traço 100px */
`;


export const VerticalLineDireitoMenor = styled.div`
 color: #fff;
 width: 2px; /* Largura do traço vertical */
 height: 69px; /* Altura do traço vertical */
 background-color: #ccc; /* Cor do traço */
 margin: 0 auto; /* Centraliza o traço horizontalmente */
 margin-right: 240px;
 transform: translateY(-224px); /* Sobe o traço 100px */
`;