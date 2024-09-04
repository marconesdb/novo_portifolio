import styled from 'styled-components';

// Contêiner principal do aside
export const AsideLeft = styled.aside`
  width: 15%; /* Define a largura como 15% */
  background-color: #282C33; /* Cor de fundo opcional para diferenciar */
  box-sizing: border-box; /* Inclui a borda e o preenchimento na largura */
  display: flex;
  flex-direction: column; /* Organiza o conteúdo interno em coluna */
  padding: 20px; /* Adiciona algum preenchimento ao redor do conteúdo */

  @media (max-width: 540px) {
    display: none; /* Esconde o AsideLeft em telas com largura até 540px */
  }
`;

// Estiliza o traço vertical
export const VerticalLine = styled.div`
  width: 1px; /* Largura do traço */
  height: 10cm; /* Altura do traço */
  background-color: #fff; /* Cor do traço */
  margin-bottom: 20px; /* Espaço entre o traço e as imagens */
  margin-left: 20px;
`;


// Contêiner para as imagens
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column; /* Alinha as imagens verticalmente */
  gap: 10px; /* Espaço entre as imagens */
`;


export const RetanguloEsquerdoInferior = styled.div`
  width: 100px;
  height: 180px;
  border: solid 1px #ABB2BF;
  transform: translateY(2499px);
  border-left: none;
  margin-left: -50px;

  @media (min-width: 1640px) {
    transform: translateY(1600px);
    margin-left:185px;
    height: 200px;
  }
`;





