import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2c3036;
  height: 80vh; 
  padding: 20px;
  position: relative;
  transform: translateY(-190px);
  margin-top: -153px;
 
  @media (min-width: 360px) and (max-width: 768px) {
     min-height: 100vh; 
     
   }


  @media (min-width: 1640px) {
    transform: translateY(-390px);
    height: 600px;
    margin-bottom: -300px;
  }


  @media (min-width: 992px) and (max-width: 1280px) {
    margin-top: -10px;
   
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

  @media (min-width: 360px) and (max-width: 768px) {
    position: relative; /* Ajusta a posição para relativa */
    top: 0;
    left: 0;
    transform: none;
    width: 100%; /* O título agora ocupa 100% da largura */
    justify-content: center; /* Centraliza o conteúdo internamente */
    margin-top: -150px; /* Ajusta o espaçamento superior conforme necessário */
   
    }

    @media (min-width: 992px) and (max-width: 1280px) {
    margin-top: 100px;
  }

  span {
    color: #A8990F; /* Cor amarela */
  }

  p {
    font-size: 32px;

    @media (min-width: 360px) and (max-width: 768px) {
      font-size: 24px; 
      
    }
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 200px;
  background-color: #A8990F;
  margin-left: 10px;

  @media (min-width: 360px) and (max-width: 768px) {
    width: 60%; /* O traço agora ocupa toda a largura disponível */
    
      
    }
`;

export const Main = styled.div`
  display: flex;
  justify-content: center; /* Centraliza os containers horizontalmente */
  align-items: center; /* Alinha os containers verticalmente */
  width: 100%; /* Ocupa 100% da largura disponível */
  transform: translateY(30px);
  margin-top: -90px;

  @media (min-width: 360px) and (max-width: 768px) {
    flex-direction: column; /* Alinha os elementos em uma única coluna */
    margin-top: 20px; /* Ajusta o espaçamento superior */
  }

  @media (min-width: 1640px) {
    margin-top: -20px;
   
  }

`;

export const ContainerEsquerdo = styled.div`
  width: 65%; /* Ocupa 50% da largura */
  padding: 20px; /* Padding opcional para espaçamento interno */
  

  @media (min-width: 360px) and (max-width: 768px) {
      margin-top: 100px;
      width: 100%;
    }

    @media (min-width: 992px) and (max-width: 1280px) {
   padding: 0;
   
  }
  .paragrafo{
  font-size: 16px;
  color: #ABB2BF;
  margin-top: -100px;
  text-align: justify;

 
 }

 .recuo-paragrafo{
  margin-left: 35px;
 }
`;

export const ContainerDireito = styled.div`
  width: 50%; /* Ocupa 50% da largura */
  padding: 20px; /* Padding opcional para espaçamento interno */
 
  @media (min-width: 992px) and (max-width: 1280px) {
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin-right: 190px;
    width: 100%;
  }


  @media (min-width: 360px) and (max-width: 768px) {
      margin-top: 100px;
      margin-left: -320px;
      /* transform: translateX(-150px); */
      width: 100%;
      
    }
  
  .contato{
  width: 60%; /* Ocupa 50% da largura */
  padding: 20px; /* Padding opcional para espaçamento interno */
  border: 1px solid #ABB2BF;
  transform:translateX(185px);

  @media (min-width: 360px) and (max-width: 768px) {
      width: 100%;
      margin-left: -25px;
      padding-bottom: 50px;
    }

  @media (min-width: 992px) and (max-width: 1280px) {
    
   
  }
  }

  .emailContainer {
    display: flex; /* Exibe o ícone e o email lado a lado */
    align-items: center; /* Alinha o ícone e o email verticalmente */
    margin-top: 10px; /* Espaçamento superior opcional */
  }

  .emailIcon, .telefone, .whatsapp {
    margin-top: 10px;
    margin-right: 10px; /* Espaçamento entre o ícone e o email */
    color: #ABB2BF; /* Cor do ícone */
    font-size: 20px; /* Tamanho do ícone */
  }

  .telefone{
    font-size: 16px;
  }

  .whatsapp{
    font-size: 16px;
  }

  .email{
  font-size: 16px;
  color: #ABB2BF;
  margin-top: 10px;
  text-align: left;
  /* text-align: justify; */
 }


 .TituloMensagem{
  font-size: 16px;
  font-weight:500;
  color: #fff;
  text-align: justify;
 }
`;
