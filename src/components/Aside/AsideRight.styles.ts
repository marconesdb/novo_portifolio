import styled from 'styled-components';

export const AsideRight = styled.aside`
  width: 15%; /* Define a largura como 10% */
  background-color: #282C33; /* Cor de fundo opcional para diferenciar */
  box-sizing: border-box; /* Inclui a borda e o preenchimento na largura */
  display: flex;
  flex-direction: column; /* Organiza o conteúdo interno em coluna */
 
  @media (max-width: 540px) {
    display: none; /* Esconde o AsideRight em telas com largura até 540px */
  }

  
`;

export const RetanguloDireito= styled.div`
  width: 100px;
  height: 120px;
  border: solid 1px #ABB2BF;
  transform: translateY(895px);
  margin-left: 126px;
  border-right: none;

  @media (min-width: 1640px) {
    transform: translateY(1125px);
    margin-left:185px;
    }
`;

export const RetanguloDireitoInferior= styled.div`
  width: 100px;
  height: 180px;
  border: solid 1px #ABB2BF;
  transform: translateY(1285px);
  margin-left: 126px;
  border-right: none;

  @media (min-width: 1640px) {
    transform: translateY(1600px);
    margin-left:185px;
    height: 200px;
  }
`;


export const CuboDireito= styled.div`
.cubo1 {
    display: grid;
    grid-template-columns: repeat(4, 15px); /* 5 colunas de 30px */
    grid-template-rows: repeat(5, 15px);    /* 5 linhas de 30px */
    gap: 5px; /* Espaço entre os círculos */
    margin-left: 80px;
    margin-top: 40px;
    transform: translateY(1440px);
  }

  .dot {
    width: 5px;
    height: 5px;
    background-color: #ABB2BF;
    border-radius: 50%;
  }

  @media (min-width: 1640px) {
    transform: translateY(400px);
    margin-left: 52px;
  }
`;
