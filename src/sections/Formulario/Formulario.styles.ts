import styled from 'styled-components';

export const Container = styled.section`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2c3036;
  height: 85vh; /* Altera para 100% da altura da viewport */
  padding: 0px;
  position: relative;
  margin-top: -192px;

  @media (min-width: 1640px) {
    transform: translateY(-200px);
    margin-top: 0px;
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center;      /* Centraliza verticalmente */
  width: 100%;              /* Ocupa 100% da largura disponível */
  transform: translateY(-230px);
  /* margin-top: -350px; */
 
  @media (min-width: 1640px) {
    /* Ajustes específicos para telas maiores */
    transform: translateY(-250px); /* Se necessário */
    margin-top: 0px;
  }
`;

export const FormularioWrapper = styled.div`
  .container {
    border: solid 1px #ABB2BF;
    padding: 20px;
    background-color: #2c3036;
    max-width: 600px;
    width: 100%;
    margin-top: 200px;
    
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #fff;
    font-weight: 500;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
   
    color: #fff;
   
    font-size: 16px;
  
  }

 

  .form-group:first-child {
    flex-direction: row;
    justify-content: space-between;
  }

  .form-item {
    display: flex;
    flex-direction: column;
    width: 48%; /* Ajuste para deixar um espaço entre os campos */
  }

  label {
    margin-bottom: 8px;
    /* font-weight: bold; */
  }

  input, textarea {
    padding: 10px;
    border: 1px solid #ABB2BF;
    background-color: #2c3036;
    font-size: 16px;
    font-family: 'Fira Code', sans-serif;
    color: #fff; /* Cor do texto no input */
    font-weight: 100;

    
  }


 
`;

export const EnviarButton = styled.button`
  padding: 8px 16px;  /* Reduz o padding para diminuir o tamanho do botão */
  border: 1px solid #A8990F;
  background: transparent;
  color: #fff;
  font-size: 14px;  /* Reduz o tamanho da fonte */
  cursor: pointer;
  margin-top: 20px;
  align-self: flex-start;  /* Alinha o botão à esquerda */
  
  &:hover {
    background-color: #A8990F;
    color: #1b1e23;
  }
`;

