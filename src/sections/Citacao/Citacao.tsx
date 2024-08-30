import React from 'react';
import { Citacao, ContainerCitacao, HorizontalAspas, HorizontalLineInferior, HorizontalLineInferiorCont, HorizontalLineSuperior, HorizontalLineSuperiorCont, InferiorAspas } from '../../sections/Citacao/Citacao.styles';

const CitacaoComponent: React.FC = () => {
  return (
 
    <ContainerCitacao>
      <HorizontalLineSuperior />
      <HorizontalAspas>❝</HorizontalAspas>
      <HorizontalLineSuperiorCont />
      <Citacao>Olá Mundo!</Citacao>
      <HorizontalLineInferior />
      <InferiorAspas>❞</InferiorAspas>
      <HorizontalLineInferiorCont />
      </ContainerCitacao>
     
  );
};

export default CitacaoComponent;
