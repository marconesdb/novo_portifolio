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

export const Citacao = styled.div`
 color: #fff;
  
`;