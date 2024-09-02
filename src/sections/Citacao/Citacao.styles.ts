import { styled } from "styled-components";

export const ContainerCitacao = styled.div`
  text-align: center;
  background-color:#1b1e23;
/* 
  background-color: white; */
  margin-top: -50px;
  padding-bottom: 100px;
 
`;

// Traço horizontal à esquerda
export const HorizontalLineSuperior = styled.div`
  position: relative;
  width: 60px; /* Largura reduzida do traço à esquerda */
  height: 2px; /* Altura do traço */
  background-color: #ccc; /* Cor do traço */
  display: inline-block; /* Faz com que o traço respeite o espaço do contêiner */
  margin-left: 60px;
  @media (min-width: 1640px) {
  width: 54px;
}
`;

// Componente de aspa
export const HorizontalAspas = styled.div`
  position: relative;
  width: 50px; /* Largura do espaço onde as aspas ficam */
  height: 2px; /* Altura do traço */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px; /* Tamanho das aspas */
  color: #ccc; /* Cor das aspas */
  display: inline-block; /* Faz com que o traço respeite o espaço do contêiner */
  
 
`;

// Traço horizontal à direita
export const HorizontalLineSuperiorCont = styled.div`
  position: relative;
  width: 630px; /* Largura reduzida do traço à direita */
  height: 2px; /* Altura do traço */
  background-color: #ccc; /* Cor do traço */
  display: inline-block; /* Faz com que o traço respeite o espaço do contêiner */
  margin-right: 50px;
  @media (max-width: 1200px) {
    width: 481px;
  }

  @media (min-width: 1640px) {
  width: 585px;

}
`;

// Traço horizontal à direita
export const HorizontalLineInferior = styled.div`

  position: relative;
  width: 630px; /* Largura reduzida do traço à esquerda */
  height: 2px; /* Altura do traço */
  background-color: #ccc; /* Cor do traço */
  display: inline-block; /* Faz com que o traço respeite o espaço do contêiner */
  margin-left: 10px;

  @media (min-width: 1640px) {
  width: 580px;
  
}
`;


export const InferiorAspas = styled.div`
  position: relative;
  width: 50px; /* Largura do espaço onde as aspas ficam */
  height: 2px; /* Altura do traço */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px; /* Tamanho das aspas */
  color: #ccc; /* Cor das aspas */
  display: inline-block; /* Faz com que o traço respeite o espaço do contêiner */
  
  @media (min-width: 1640px) {
  padding-top: 20px;
}
`;

export const HorizontalLineInferiorCont = styled.div`
  position: relative;
  width: 60px; /* Largura reduzida do traço à direita */
  height: 2px; /* Altura do traço */
  background-color: #ccc; /* Cor do traço */
  display: inline-block; /* Faz com que o traço respeite o espaço do contêiner */

  @media (max-width: 1200px) {
    width: 51px;
  }

  @media (min-width: 1640px) {
    width: 60px;
}
`;

export const Citacao = styled.div`
 color: #fff;
 margin-top: 28px;
 margin-bottom: -35px;
 padding-bottom: 30px;

 @media (min-width: 1640px) {
 padding-top: 10px;
}
`;

export const VerticalLineDireito = styled.div`
 color: #fff;
 width: 2px; /* Largura do traço vertical */
 height: 94px; /* Altura do traço vertical */
 background-color: #ccc; /* Cor do traço */
 margin: 0 auto; /* Centraliza o traço horizontalmente */
 margin-right: 155px;
 transform: translateY(-99px); /* Sobe o traço 100px */

 @media (max-width: 1200px) {
  margin-right: 240px;
  }

  @media (min-width: 1640px) {
  margin-left: 1010px;
  height: 100px;
  transform: translateY(-106px); /* Sobe o traço 100px */

}
`;

export const VerticalLineEsquerdo = styled.div`
 color: #fff;
 width: 2px; /* Largura do traço vertical */
 height: 92px; /* Altura do traço vertical */
 background-color: #ccc; /* Cor do traço */
 margin: 0 auto; /* Centraliza o traço horizontalmente */
 margin-left: 166px;
 transform: translateY(133px); 

 @media (max-width: 1200px) {
  margin-left: 243px;
  }


  @media (min-width: 1640px) {
  margin-left: 322px;
  height: 98px;
  transform: translateY(140px);
}
   
`;

export const VerticalLineEsquerdoMenor = styled.div`
 color: #fff;
 width: 2px; /* Largura do traço vertical */
 height: 50px; /* Altura do traço vertical */
 background-color: #ccc; /* Cor do traço */
 margin: 0 auto; /* Centraliza o traço horizontalmente */
 margin-left: 732px;
 transform: translateY(-199px); /* Desce o traço 100px */

 @media (max-width: 1200px) {
  margin-right: 440px;
  }

  @media (min-width: 1640px) {
  margin-left: 809px;
  transform: translateY(-106px); /* Desce o traço 100px */
  height: 50px;
  }
`;


export const Autor = styled.div`
 color: #fff;
 margin-top: 30px;
 margin-bottom: -20px;
 transform: translateY(-265px); /* Sobe nome do Autor */
 margin-left: 760px;
 

 @media (min-width: 1640px) {
  margin-left: 845px;
  transform: translateY(-164px); /* Sobe nome do Autor */
}
`;

export const HorizontalLineInferiorMenor = styled.div`
position: relative;
width: 177px; /* Largura reduzida do traço à esquerda */
height: 2px; /* Altura do traço */
background-color: #ccc; /* Cor do traço */
display: inline-block; /* Faz com que o traço respeite o espaço do contêiner */
margin-left: 732px;
margin-bottom: 50px;
transform: translateY(-231px); /* Sobe o traço 100px */

@media (min-width: 1640px) {
  margin-left: 809px;
  transform: translateY(-129px); /* Sobe o traço 100px */
  width: 203px ;
}
`;


export const VerticalLineDireitoMenor = styled.div`
 color: #fff;
 width: 2px; /* Largura do traço vertical */
 height: 59px; /* Altura do traço vertical */
 background-color: #ccc; /* Cor do traço */
 margin: 0 auto; /* Centraliza o traço horizontalmente */
 margin-right: 155px;
 transform: translateY(-345px); /* Sobe o traço 100px */


 @media (min-width: 1640px) {
  margin-left: 1010px;
  transform: translateY(-244px); /* Sobe o traço 100px */
  height: 59px;
}
`;