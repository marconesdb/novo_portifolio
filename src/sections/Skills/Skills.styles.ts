import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1b1e23;
  min-height: 100vh;
  padding: 20px;
  position: relative;
  transform: translateY(-200px);
`;

export const Title = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 15px;
  color: white;
  display: flex;
  align-items: center;

  span {
    color: #d9a400; /* Cor amarela */
  }
  p{
    font-size: 32px;
  }
`;

export const Line = styled.div`
  height: 2px;
  width: 350px;
  background-color: #d9a400;
  margin-left: 10px;
`;

export const MainContainer = styled.div`
  display: flex; /* Alinha os containers em uma linha */
  width: 100%;
   /* Distribui o espaço entre os containers */
  /* justify-content: space-between; */
  
  transform: translateY(-70px);
`;

export const ImagensSuperiorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  
  img {
    width: 48%; /* Ajusta a largura das imagens para que fiquem lado a lado */
    height: auto;
  }

  .cubo1 {
    display: grid;
    grid-template-columns: repeat(5, 20px); /* 5 colunas de 30px */
    grid-template-rows: repeat(5, 20px);    /* 5 linhas de 30px */
    gap: 5px; /* Espaço entre os círculos */
    margin-left: 20px;
  }

  .dot {
    width: 5px;
    height: 5px;
    background-color: #ABB2BF;
    border-radius: 50%;
  }

  .quadrado1{
    border: solid #ABB2BF;
    width: 140px;
    height: 140px;
    margin-left: 150px;
    transform: translateY(-70px);
  }
`;

export const ImagensInferiorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  
  img {
    width: 32%; /* Ajusta a largura das imagens para que fiquem lado a lado */
    height: auto;
    margin-left: 40px;
    margin-right: 60px;
    transform: translateY(20px);
  }

  .cubo2 {
    display: grid;
    grid-template-columns: repeat(5, 20px); /* 5 colunas de 30px */
    grid-template-rows: repeat(5, 20px);    /* 5 linhas de 30px */
    gap: 5px; /* Espaço entre os círculos */
    transform: translateY(-20px);
    margin-left: 30px;
    margin-right: 50px;
  }

  .dot {
    width: 5px;
    height: 5px;
    background-color: #ABB2BF;
    border-radius: 50%;
  }

  .quadrado2{
    border: solid #ABB2BF;
    width: 80px;
    height: 60px;
   
    transform: translateY(70px);
    transform: translateX(40px);
  }
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Define 3 colunas */
  grid-template-rows: repeat(2, auto);   /* Define 2 linhas */
  gap: 10px; /* Espaço entre os itens */
  width: 40%; /* Ajuste o tamanho do container */
  max-width: 600px;

  div {
    /* background-color: #2b2e33; */
    color: white;
    padding: 10px;
    text-align: center;
    border: solid #ABB2BF;
  }
`;
