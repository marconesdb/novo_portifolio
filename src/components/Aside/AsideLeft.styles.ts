import styled from 'styled-components';

// Contêiner principal do aside
export const AsideLeft = styled.aside`
  width: 15%; /* Define a largura como 15% */
  background-color: #2d2d2d; /* Cor de fundo opcional para diferenciar */
  height: 100vh; /* Garante que o AsideLeft ocupe a altura total da viewport */
  box-sizing: border-box; /* Inclui a borda e o preenchimento na largura */
  display: flex;
  flex-direction: column; /* Organiza o conteúdo interno em coluna */
  padding: 20px; /* Adiciona algum preenchimento ao redor do conteúdo */

  @media (max-width: 400px) {
    display: none; /* Esconde o AsideLeft em telas com largura até 400px */
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

// Estilo das imagens
export const Image = styled.img`
  width: 10%; /* Ajusta a largura das imagens para o tamanho do contêiner */
  height: auto; /* Mantém a proporção da imagem */
  margin-left: 8px;
`;
