import styled from 'styled-components';

export const AsideRight = styled.aside`
  width: 15%; /* Define a largura como 10% */
  background-color: #2d2d2d; /* Cor de fundo opcional para diferenciar */
  height: 100vh; /* Garante que o AsideLeft ocupe a altura total da viewport */
  box-sizing: border-box; /* Inclui a borda e o preenchimento na largura */
  display: flex;
  flex-direction: column; /* Organiza o conteúdo interno em coluna */

  @media (max-width: 540px) {
    display: none; /* Esconde o AsideRight em telas com largura até 400px */
  }
`;
