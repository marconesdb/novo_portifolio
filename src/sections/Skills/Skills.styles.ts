import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2c3036;
  min-height: 100vh;
  padding: 20px;
  position: relative;
  transform: translateY(-200px);
 

 /* Responsividade */
 @media (min-width: 360px) and (max-width: 768px) {
    transform: translateY(0); /* Remove a translação em telas menores */
    padding: 10px;
    
  }
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
    color: #A8990F; /* Cor amarela */
  }
  p{
    font-size: 32px;
  }

  /* Responsividade */
  @media (min-width: 360px) and (max-width: 768px) {
    margin-top: 70px;
    left: 50%;
    transform: translateX(-50%); /* Centraliza horizontalmente */
    p {
      font-size: 24px;
    }
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 280px;
  background-color: #A8990F;
  margin-left: 10px;

 /* Responsividade */
 @media (min-width: 360px) and (max-width: 768px) {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center; /* Certifica-se de que os elementos internos estejam centralizados */
    margin-left: 0;          /* Remove o espaçamento à esquerda */
    left: 0%;
    transform: translateX(5%); /* Centraliza horizontalmente */
  }
`;

export const MainContainer = styled.div`
  display: flex; /* Alinha os containers em uma linha */
  width: 100%;
   /* Distribui o espaço entre os containers */
  /* justify-content: space-between; */
  margin-top: 100px;
  transform: translateY(-70px);


  /* Responsividade */
  @media (min-width: 360px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
  }
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

  /* Responsividade */
  @media (min-width: 360px) and (max-width: 768px) {
    justify-content: center;
    margin-top: 20px;
    margin-left: 45px;
    .quadrado1 {
      width: 80px;
      height: 80px;
      margin-left: 50px;
    }

    .cubo1{
      
    }
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
    margin-left: 30px;
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

/* Responsividade */
@media (min-width: 360px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    .quadrado2 {
      width: 60px;
      height: 50px;
      transform: translateX(-80px);
    }

    .cubo2{
      margin-top: 25px;
      transform: translateX(20px);
    }
  }
`;


export const IconeLogo = styled.div`
  
  display: flex; /* Flexbox para alinhar os retângulos lado a lado */
  flex-direction: row; /* Direção da flexbox em linha para alinhar os elementos horizontalmente */
  gap: 10px; /* Espaço entre os retângulos, ajuste conforme necessário */
  margin-right: 20px;
  margin-top: -120px;
  margin-left: 15px;


  .RetanguloInferior{
   border: solid 1px #A8990F;
   width: 55px;
   height: 100px;
   transform: translateY(80px);
   margin-left: 1px;
  }


  .RetanguloInferiorMenor{
   border: solid 1px #A8990F;
   width: 40px;
   height: 35px;
   transform: translateY(32px);
   margin-left: 14px;
   margin-top: 1px;
  }

  .RetanguloSuperior{
   border: solid 1px #A8990F;
   width: 55px;
   height: 100px;
   transform: translateY(-51px);
   margin-left: 55px;
  }

  .RetanguloSuperiorMenor{
   border: solid 1px #A8990F;
   width: 40px;
   height: 35px;
   transform: translateY(0px);
   margin-left: -1px;
   margin-top: 30px; 
  }


  /* Responsividade */
  @media (min-width: 360px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: -50px;
    gap: 5px;
  }
`;

export const SkillsContainer = styled.div`
  
  gap: 10px; /* Espaço entre os itens */
  width: 40%; /* Ajuste o tamanho do container */
  max-width: 600px;
  margin-left: 50px;
  transform: translateX(95px);
  transform: translateY(20px);
  
  @media (min-width: 1640px) {
   
    transform: translateX(190px) !important;
  }

  .Skill-1 {
    /* background-color: #2b2e33; */
    color: white;
    padding: 0px;
    text-align: center;
    border: solid 1px #ABB2BF;
    width: 150px; 
    height: 150px; 
    margin-top: 160px;

    @media (min-width: 1640px) {
    width: 200px;
    transform: translateX(-125px);
    margin-left: 5px;
    }
  }

  .p-1{
    border-bottom: solid 1px #ABB2BF;
    width: 148px;
    margin-right: 35px;
    font-weight: 500;
    font-size: 16px;

    @media (min-width: 1640px) {
    width: 198px;
    }
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

    @media (min-width: 1640px) {
    width: 240px;
    transform: translateY(-200px);
    transform: translateX(-80px);
    margin-top: -150px;
    }
  }

  .p-2{
    border-bottom: solid 1px #ABB2BF;
    width: 148px;
    margin-right: 35px;
    font-weight: 500;
    font-size: 16px;


    @media (min-width: 1640px) {
    width: 238px;
    }
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

    @media (min-width: 1640px) {
    width: 270px;
    /* transform: translateY(-200px); */
    /* transform: translateX(-80px); */
    margin-top: 150px;
        
    }
  }


  .p-3{
    border-bottom: solid 1px #ABB2BF;
    width: 208px;
    margin-right: 35px;
    font-weight: 500;
    font-size: 16px;

    @media (min-width: 1640px) {
    width: 268px;
    }
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

    @media (min-width: 1640px) {
      width: 240px;
      transform: translateX(-80px) translateY(-350px) !important; /* Forçar a aplicação */
       
    }
  }

  .p-4{
    border-bottom: solid 1px #ABB2BF;
    width: 148px;
    margin-right: 35px;
    font-weight: 500;
    font-size: 16px;


    
    @media (min-width: 1640px) {
    width: 238px;
    }
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

    @media (min-width: 1640px) {
    width: 270px; 
    height: 210px; 
    margin-top: -10px;
    }
    }

  .p-5{
    border-bottom: solid 1px #ABB2BF;
    width: 208px;
    margin-right: 35px;
    font-weight: 500;
    font-size: 16px;

    
    @media (min-width: 1640px) {
    width: 268px;
    }
  }

  .p-texto{
    color: #ABB2BF;
    font-size: 16px;
    padding: 10px;
  }

  /* Responsividade */
  @media (min-width: 360px) and (max-width: 768px) {
    width: 80%;
    transform: translateX(0);
    
    .Skill-1, .Skill-2, .Skill-3, .Skill-4, .Skill-5 {
      width: 100%;
      height: auto;
      margin-top: 20px;
    }

    .p-1, .p-2, .p-3, .p-4, .p-5 {
      width: 100%;
      font-size: 14px;
    }

    .p-texto {
      font-size: 14px;
      padding: 5px;
    }
  }
`;



