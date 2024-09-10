import { styled } from "styled-components";

export const ContainerCitacao = styled.div`
  text-align: center;
  background-color:#2c3036;
/* 
  background-color: white; */
  margin-top: -50px;
  padding-bottom: 100px;
  font-family: 'Fira Code', sans-serif; 
  color: #FFFFFF;
  
  @media (max-width: 360px) {
    padding: 20px; /* Ajuste de padding para garantir espaçamento em telas pequenas */
    margin-top: -50px; /* Ajusta a margem para evitar corte no topo */
  }

  /* @media (min-width: 360px) and (max-width: 768px) {
    margin-top: -30px;
    padding-bottom: 60px;
    
  } */
 
`;

// Traço horizontal à esquerda
export const HorizontalLineSuperior = styled.div`
  position: relative;
  width: 60px; /* Largura reduzida do traço à esquerda */
  height: 2px; /* Altura do traço */
  background-color: #ccc; /* Cor do traço */
  display: inline-block; /* Faz com que o traço respeite o espaço do contêiner */
  margin-left: 60px;


  @media (max-width: 360px) {
    margin-left: 5px;
    width: 48px;
  }

  /* @media (min-width: 360px) and (max-width: 768px) {
    width: 40px;
    
  } */

  @media (min-width: 1640px) {
  width: 65px;
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
  color: #ABB2BF;
  
  /* @media (min-width: 360px) and (max-width: 768px) {
    font-size: 30px;
  } */
`;

// Traço horizontal à direita
export const HorizontalLineSuperiorCont = styled.div`
  position: relative;
  width: 630px; /* Largura reduzida do traço à direita */
  height: 2px; /* Altura do traço */
  background-color: #ccc; /* Cor do traço */
  display: inline-block; /* Faz com que o traço respeite o espaço do contêiner */
  margin-right: 50px;

  
  @media (max-width: 360px) {
  
    width: 203px !important; /* Forçar a aplicação dessa largura */
    margin-right: 3px;
  }

  /* @media (min-width: 360px) and (max-width: 768px) {
    width: 50px;
    
  } */

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


  
  @media (max-width: 360px) {
  display: inline-block;
  width: 200px;
  margin-left: 0px;
 }
  /* @media (min-width: 360px) and (max-width: 768px) {
    width: 240px;
    margin-left: 20px;
  } */

  @media (min-width: 1640px) {
  width: 590px;
  
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
  color: #ABB2BF;
  
/* 
  @media (min-width: 360px) and (max-width: 768px) {
    font-size: 30px;
    padding-top: 10px;
  } */


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


  
  @media (max-width: 360px) {
  
  width: 15px ;
 }

  /* @media (min-width: 360px) and (max-width: 768px) {
    width: 40px;
  } */

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

.textCitacao{
  display: block;
}
 /* @media (min-width: 360px) and (max-width: 768px) {
    font-size: 16px;
    padding: 20px;
  } */


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


 @media (max-width: 360px) {
    margin-left: 5px; 
    transform: translateY(-140px);
    height: 135px;
    margin-right: 0px;
    margin-left: 310px;

  }
 /* @media (min-width: 360px) and (max-width: 768px) {
    height: 60px;
    margin-right: 80px;
    transform: translateY(10px);
  } */

 @media (max-width: 1200px) {
  margin-right: 240px;
  }

  @media (min-width: 1640px) {
  margin-left: 1020px;
  height: 120px;
  transform: translateY(-127px); /* Sobe o traço 100px */

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


 @media (max-width: 360px) {
  position: relative;
  top: 177px;
  transform: translateY(10px);
  height: 136px;
  transform: translateX(-234px);
  margin-left: 0px;
    
  }

 /* @media (min-width: 360px) and (max-width: 768px) {
    height: 60px;
    margin-left: 80px;
    transform: translateY(60px);
  } */

 @media (max-width: 1200px) {
  margin-left: 243px;

  }


  @media (min-width: 1640px) {
  margin-left: 320px;
  height: 124px;
  transform: translateY(165px);
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


 @media (max-width: 360px){
  
  transform: translateY(-162px);
  margin-left: 180px;
  height: 50px;
  
 }
 /* @media (min-width: 360px) and (max-width: 768px) {
    height: 30px;
    margin-left: 100px;
    transform: translateY(-100px);
  } */

 @media (max-width: 1200px) {
  margin-right: 440px;
  }

  @media (min-width: 1640px) {
  margin-left: 851px;
  transform: translateY(-226px); /* Desce o traço 100px */
  height: 50px;
  }
`;


export const Autor = styled.div`
 color: #fff;
 margin-top: 30px;
 margin-bottom: -20px;
 transform: translateY(-265px); /* Sobe nome do Autor */
 margin-left: 760px;
 
 @media (max-width: 360px) {
  margin-left: 195px;
  transform: translateY(-225px);
  }

 /* @media (min-width: 360px) and (max-width: 768px) {
    font-size: 14px;
    margin-left: 120px;
    transform: translateY(-150px);
  } */

 @media (min-width: 1640px) {
  margin-left: 875px;
  transform: translateY(-290px); /* Sobe nome do Autor */
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


@media (max-width: 360px){
  margin-left: 180px;
  transform: translateY(-194px); 
  width: 152px;
}

/* @media (min-width: 360px) and (max-width: 768px) {
    width: 100px;
    margin-left: 120px;
    transform: translateY(-130px);
  } */


@media (min-width: 1640px) {
  margin-left: 853px;
  transform: translateY(-259px); /* Sobe o traço 100px */
  width: 167px;
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

 @media (max-width: 360px) {
  margin-right: 28px;
  transform: translateY(-300px);
  height: 50px;
 }
/* @media (min-width: 360px) and (max-width: 768px) {
    height: 30px;
    margin-right: 100px;
    transform: translateY(-180px);
  } */


 @media (min-width: 1640px) {
  margin-left: 1020px;
  transform: translateY(-373px); /* Sobe o traço 100px */
  height: 59px;
}
`;