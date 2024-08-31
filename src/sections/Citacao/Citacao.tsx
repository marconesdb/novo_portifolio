import React from 'react';
import { Autor, Citacao, ContainerCitacao, HorizontalAspas, HorizontalLineInferior, HorizontalLineInferiorCont, HorizontalLineInferiorMenor, HorizontalLineSuperior, HorizontalLineSuperiorCont, InferiorAspas, TracoVerticalDireito, TracoVerticalEsquerdo, VerticalLineDireito, VerticalLineDireitoMenor, VerticalLineEsquerdo, VerticalLineEsquerdoMenor, } from '../../sections/Citacao/Citacao.styles';

const CitacaoComponent: React.FC = () => {
  return (
    <>
    <ContainerCitacao>
      <VerticalLineEsquerdo/>
      <HorizontalLineSuperior />
      <HorizontalAspas>❝</HorizontalAspas>
      <HorizontalLineSuperiorCont />
      <Citacao>Olá Mundo!</Citacao>
      <HorizontalLineInferior />
      <InferiorAspas>❞</InferiorAspas>
      <HorizontalLineInferiorCont />
      <VerticalLineDireito/>
    </ContainerCitacao>
    <VerticalLineEsquerdoMenor/>
      <Autor>- Dr. Who</Autor>
      <HorizontalLineInferiorMenor/>
      <VerticalLineDireitoMenor/>
    {/*  */}
      
    </> 
  );
};

export default CitacaoComponent;
