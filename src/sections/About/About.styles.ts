import { styled } from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2c3036;
  min-height:100vh;
  padding: 20px;
  position: relative;
  transform: translateY(-340px);
  margin-bottom: -50px;

  @media (min-width: 360px) and (max-width: 768px) {
  margin-top: 280px;
  
  }
`;


export const Title = styled.div`
  width: 80%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 15px;
  color: white;
  display: flex;
  align-items: center;
  margin-top: 100px;
  transform: translateY(-300px);

  @media (min-width: 360px) and (max-width: 768px) {
    width: 90%;
    justify-content: space-between;
    position: relative;
    margin-top: 250px;
    transform: translateY(-600px);
   
  }


  span {
    color: #A8990F; /* Cor amarela */
    @media (min-width: 360px) and (max-width: 768px) {
     
    
  }
  }

  p{
    font-size: 32px;

    @media (min-width: 360px) and (max-width: 768px) {
      font-size: 24px;
      white-space: nowrap; /* Impede a quebra de linha do texto */
      width: auto; /* Permite que o parágrafo se ajuste à largura */
  }
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 325px;
  background-color: #A8990F;
  margin-left: 10px;

  @media (min-width: 360px) and (max-width: 768px) {
  width: 80%;
  
  }
`;

export const ContainerAbout = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  justify-content: space-between; /* Separa os containers esquerdo e direito */
  align-items: stretch; /* Garante que ambos os containers tenham a mesma altura */
   transform: translateY(-200px);


   @media (min-width: 360px) and (max-width: 768px) {
    justify-content: center; /* Centraliza horizontalmente no mobile */
    align-items: center; /* Centraliza verticalmente no mobile */
    flex-direction: column; /* Torna os containers empilhados no mobile */
    margin-top: 450px;
    }
`;


export const ContainerEsquerdo = styled.div`
  width: 50%;
  padding: 0px;

  @media (min-width: 360px) and (max-width: 768px) {
    width: 100%; /* O ContainerEsquerdo passa a ocupar 100% da largura */
    transform: none;
    margin-top: -60px;
    
    }

  .texto-titulo{
  font-size: 16px;
  color: #ABB2BF;
  
  @media (min-width: 360px) and (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 30px;
    margin-left: 35px;
  }
  }

  .recuo{
    margin-left: 35px;

    @media (min-width: 360px) and (max-width: 768px) {
      margin-left: 35px;
  }
  }



 .p-1{
  font-size: 16px;
  color: #ABB2BF;
  margin-top: 10px;
  text-align: justify;


 
 }

 .p-2{
  font-size: 16px;
  color: #ABB2BF;
  margin-top: 10px;
  text-align: justify;
 }

`;


export const ContainerDireito = styled.div`
  width: 50%;
  padding: 0px;
 
  
  @media (min-width: 360px) and (max-width: 768px) {
    width: 100%;
    margin-top: 200px;
   
    min-height: 100vh;
  }

  .cubo1 {
    display: grid;
    grid-template-columns: repeat(5, 15px); /* 5 colunas de 30px */
    grid-template-rows: repeat(5, 15px);    /* 5 linhas de 30px */
    gap: 5px; /* Espaço entre os círculos */
    transform: translateY(-20px);
    margin-left: 150px;
    

    @media (min-width: 360px) and (max-width: 768px) {
    
    
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
    gap: 10px; /* Espaço entre os círculos */
    transform: translateY(-20px);
    margin-left: 425px;
    
    @media (min-width: 1640px) {
   
    margin-left:550px;
   
    }

    @media (min-width: 360px) and (max-width: 768px) {
      margin-left:75px;
      margin-top: 60px;
   }
  }

  .dot {
    width: 5px;
    height: 5px;
    background-color: #ABB2BF;
    border-radius: 50%;
  }
`;