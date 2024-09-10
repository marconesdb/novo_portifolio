import { styled } from "styled-components";

export const ContainerCitacao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #2c3036;
  min-height: 100vh;
  padding: 0 20px; /* Para evitar que o conteúdo toque as bordas em telas menores */
  font-family: 'Fira Code', sans-serif;
  color: #FFFFFF;
  
`;


export const DivCitacao = styled.div`
  width: 75%; /* Define a largura da Div */
  max-width: 800px; /* Limita a largura máxima */
  margin: 0 auto; /* Centraliza a div */
  padding: 20px; /* Espaçamento interno */
  border: 1px solid #ABB2BF;
  margin-top: -300px;
  text-align: center; /* Centraliza o texto da citação */
  

  .aspasSuperior, .aspasInferior {
    font-size: 40px;
    color: #ABB2BF;
    vertical-align: middle; /* Garante que as aspas fiquem alinhadas verticalmente com o texto */
  }

  .aspasSuperior{
  
    margin-right: 10px; /* Espaçamento à direita da aspas superior */
 
  }

  .aspasInferior{
    margin-left: 10px; /* Espaçamento à esquerda da aspas inferior */
  }
`;


export const Citacao = styled.div`
 color: #cccccc;
 display: inline-block;
 

.textCitacao{
  display: inline;
}
 

.autor{
    display: block; /* Faz com que o nome do autor fique em uma nova linha */
    margin-top: 15px; /* Espaçamento entre a citação e o nome do autor */
    font-size: 18px; /* Tamanho do texto do autor */
    font-style: italic; /* Deixa o nome do autor em itálico */
    color: #cccccc;/* Cor mais clara para o autor */
    text-align: right; /* Alinha o autor à direita */
  }

`;
