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
  margin-top: 100px;

  span {
    color: #d9a400; /* Cor amarela */
  }
  p{
    font-size: 32px;
  }
`;

export const Line = styled.div`
  height: 2px;
  width: 280px;
  background-color: #d9a400;
  margin-left: 10px;
`;

export const MainContainer = styled.div`
  display: flex; /* Alinha os containers em uma linha */
  width: 100%;
   /* Distribui o espaço entre os containers */
  /* justify-content: space-between; */
  margin-top: 100px;
  transform: translateY(-70px);
`;

export const ImagensSuperiorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 125px;
  
  img {
    width: 48%; /* Ajusta a largura das imagens para que fiquem lado a lado */
    height: auto;
  }

  .cubo1 {
    display: grid;
    grid-template-columns: repeat(5, 15px); /* 5 colunas de 30px */
    grid-template-rows: repeat(5, 15px);    /* 5 linhas de 30px */
    gap: 5px; /* Espaço entre os círculos */
    margin-left: 10px;
    margin-top: 40px;
  }

  .dot {
    width: 5px;
    height: 5px;
    background-color: #ABB2BF;
    border-radius: 50%;
  }

  .quadrado1{
    border: solid 1px #ABB2BF;
    width: 110px;
    height: 110px;
    margin-right: 50px;
    transform: translateY(-10px);
    transform: translateX(-10px);
  }
`;

export const ImagensInferiorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  
  img {
    width: 32%; /* Ajusta a largura das imagens para que fiquem lado a lado */
    height: auto;
    margin-left: 30px;
    margin-right:40px;
    transform: translateY(20px);
  }

  .cubo2 {
    display: grid;
    grid-template-columns: repeat(5, 15px); /* 5 colunas de 30px */
    grid-template-rows: repeat(5, 15px);    /* 5 linhas de 30px */
    gap: 5px; /* Espaço entre os círculos */
    transform: translateY(-20px);
    margin-left: 10px;
    margin-right: 60px;
  }

  .dot {
    width: 5px;
    height: 5px;
    background-color: #ABB2BF;
    border-radius: 50%;
  }

  .quadrado2{
    border: solid 1px #ABB2BF;
    width: 80px;
    height: 60px;
    margin-top: 50px;
    transform: translateX(-10px);
  }
`;

export const SkillsContainer = styled.div`
  
  gap: 10px; /* Espaço entre os itens */
  width: 40%; /* Ajuste o tamanho do container */
  max-width: 600px;
  margin-left: 50px;
  transform: translateX(95px);
  transform: translateY(20px);
  


  .Skill-1 {
    /* background-color: #2b2e33; */
    color: white;
    padding: 0px;
    text-align: center;
    border: solid 1px #ABB2BF;
    width: 150px; 
    height: 150px; 
    margin-top: 160px;
  }

  .p-1{
    border-bottom: solid 1px #ABB2BF;
    width: 148px;
    margin-right: 35px;
    font-weight: 500;
    font-size: 16px;
  }

  .Skill-2 {
    /* background-color: #2b2e33; */
    color: white;
    padding: 0px;
    text-align: center;
    border: solid 1px #ABB2BF;
    width: 150px; 
    height: 150px; 
    transform: translateX(-195px);
    transform: translateY(-150px);
    margin-left: 170px;
  }

  .p-2{
    border-bottom: solid 1px #ABB2BF;
    width: 148px;
    margin-right: 35px;
    font-weight: 500;
    font-size: 16px;
  }


  .Skill-3 {
    /* background-color: #2b2e33; */
    color: white;
    padding: 0px;
    text-align: center;
    border: solid 1px #ABB2BF;
    width: 210px; 
    height: 210px; 
    align-items: center;
    justify-content: center;
    transform: translateX(-195px);
    transform: translateY(-300px);
    margin-left: 340px;
  }


  .p-3{
    border-bottom: solid 1px #ABB2BF;
    width: 208px;
    margin-right: 35px;
    font-weight: 500;
    font-size: 16px;
  }

  .Skill-4 {
    /* background-color: #2b2e33; */
    color: white;
    padding: 0px;
    text-align: center;
    border: solid 1px #ABB2BF;
    width: 150px; 
    height: 150px; 
    transform: translateX(-195px);
    transform: translateY(-340px);
    margin-left: 170px;
  }

  .p-4{
    border-bottom: solid 1px #ABB2BF;
    width: 148px;
    margin-right: 35px;
    font-weight: 500;
    font-size: 16px;
  }


  .Skill-5 {
    /* background-color: #2b2e33; */
    color: white;
    padding: 0px;
    text-align: center;
    border: solid 1px #ABB2BF;
    width: 210px; 
    height: 210px; 
    transform: translateY(-430px);
    margin-left: 340px;
    }

  .p-5{
    border-bottom: solid 1px #ABB2BF;
    width: 208px;
    margin-right: 35px;
    font-weight: 500;
    font-size: 16px;
  }

 


`;
