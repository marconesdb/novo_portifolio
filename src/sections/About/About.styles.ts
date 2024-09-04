import { styled } from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1b1e23;
  min-height: 100vh;
  padding: 20px;
  position: relative;
  transform: translateY(-400px);
 
`;


export const Title = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 15px;
  color: white;
  display: flex;
  align-items: center;
  margin-top: 100px;
  transform: translateY(-300px);

  span {
    color: #d9a400; /* Cor amarela */
  }
  p{
    font-size: 32px;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 325px;
  background-color: #d9a400;
  margin-left: 10px;
`;

export const ContainerAbout = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  justify-content: space-between; /* Separa os containers esquerdo e direito */
  align-items: stretch; /* Garante que ambos os containers tenham a mesma altura */
   transform: translateY(-200px);
`;


export const ContainerEsquerdo = styled.div`
  width: 50%;
  padding: 0px;


  .texto-titulo{
  font-size: 16px;
  color: #ABB2BF;
  
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
 

  .cubo1 {
    display: grid;
    grid-template-columns: repeat(5, 15px); /* 5 colunas de 30px */
    grid-template-rows: repeat(5, 15px);    /* 5 linhas de 30px */
    gap: 5px; /* Espaço entre os círculos */
    transform: translateY(-20px);
    margin-left: 150px;
    
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
  }

  .dot {
    width: 5px;
    height: 5px;
    background-color: #ABB2BF;
    border-radius: 50%;
  }
`;