import styled from 'styled-components';

// Contêiner principal do aside
export const AsideLeft = styled.aside`
  width: 15%; /* Define a largura como 15% */
  background-color: #282C33;/* Cor de fundo opcional para diferenciar */
  box-sizing: border-box; /* Inclui a borda e o preenchimento na largura */
  display: flex;
  flex-direction: column; /* Organiza o conteúdo interno em coluna */
   padding: 20px; /* Adiciona algum preenchimento ao redor do conteúdo */
   
   @media (min-width: 360px) and (max-width: 768px) {
    display: none;
    }

    @media (min-width: 769px) and (max-width: 991px) {
    display: none;
    }

    
    @media (min-width: 992px) and (max-width: 1280px) {
      display: none;
    }


    @media (min-width: 1281px) and (max-width: 1639px){
    width: 10%; 
    justify-content: space-between;
   
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
 

  @media (min-width: 1281px) and (max-width: 1639px) {
    transform: translateY(-650px);
  }
  
`;


export const RetanguloEsquerdoInferior = styled.div`
  width: 100px;
  height: 180px;
  border: solid 1px #ABB2BF;
  transform: translateY(2550px);
  border-left: none;
  margin-left: -40px;

  

  @media (min-width: 1640px) {
    transform: translateY(2900px);
    margin-left:-30px;
    height: 200px;
    
  }

  
`;

export const Cubo = styled.div`
  


  .cubo1 {
    display: grid;
    grid-template-columns: repeat(5, 15px); /* 5 colunas de 30px */
    grid-template-rows: repeat(5, 15px);    /* 5 linhas de 30px */
    gap: 5px; /* Espaço entre os círculos */
    transform: translateY(3310px);
    margin-left: -55px;
    
    

    @media (min-width: 1640px) {
      transform: translateY(3890px);
   
  }
  }

  .dot {
    width: 5px;
    height: 5px;
    background-color: #ABB2BF;
    border-radius: 50%;

  }


  .cubo2 {
    display: grid;
    grid-template-columns: repeat(5, 15px); /* 5 colunas de 30px */
    grid-template-rows: repeat(5, 15px);    /* 5 linhas de 30px */
    gap: 5px; /* Espaço entre os círculos */
    transform: translateY(480px);
    margin-left: -30px;
  
    
    @media (min-width: 1640px) {
    transform: translateY(1100px);
   
  }
    
  }

  .dot {
    width: 5px;
    height: 5px;
    background-color: #ABB2BF;
    border-radius: 50%;

    
  }
`;





