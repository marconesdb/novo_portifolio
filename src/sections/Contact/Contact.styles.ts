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
  margin-top: -165px;
  
  @media (min-width: 1640px) {
    transform: translateY(-390px);
    height: 600px;
    margin-bottom: -300px;
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

  span {
    color: #A8990F; /* Cor amarela */
  }

  p {
    font-size: 32px;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 200px;
  background-color: #A8990F;
  margin-left: 10px;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center; /* Centraliza os containers horizontalmente */
  align-items: center; /* Alinha os containers verticalmente */
  width: 100%; /* Ocupa 100% da largura disponível */
  transform: translateY(30px);
  margin-top: -90px;

  @media (min-width: 1640px) {
    margin-top: -20px;
   
  }

`;

export const ContainerEsquerdo = styled.div`
  width: 50%; /* Ocupa 50% da largura */
  padding: 20px; /* Padding opcional para espaçamento interno */
  

  .paragrafo{
  font-size: 16px;
  color: #ABB2BF;
  margin-top: -100px;
  text-align: justify;
 }
`;

export const ContainerDireito = styled.div`
  width: 50%; /* Ocupa 50% da largura */
  padding: 20px; /* Padding opcional para espaçamento interno */
 

  .contato{
  width: 60%; /* Ocupa 50% da largura */
  padding: 20px; /* Padding opcional para espaçamento interno */
  border: solid 1px #fff;
  transform:translateX(185px)
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
