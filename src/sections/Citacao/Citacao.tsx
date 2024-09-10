import { Autor, Citacao, ContainerCitacao, HorizontalAspas, HorizontalLineInferior, HorizontalLineInferiorCont, HorizontalLineInferiorMenor, HorizontalLineSuperior, HorizontalLineSuperiorCont, InferiorAspas, VerticalLineDireito, VerticalLineDireitoMenor, VerticalLineEsquerdo, VerticalLineEsquerdoMenor, } from '../../sections/Citacao/Citacao.styles';

const CitacaoComponent = () => {
  return (
    <>
    <ContainerCitacao>
      <VerticalLineEsquerdo/>
      <HorizontalLineSuperior />
      <HorizontalAspas>❝</HorizontalAspas>
      <HorizontalLineSuperiorCont />
      <Citacao>A única maneira de fazer<span className='textCitacao'> um excelente trabalho é </span>amar o que você faz.</Citacao>
      <HorizontalLineInferior />
      <InferiorAspas>❞</InferiorAspas>
      <HorizontalLineInferiorCont />
      <VerticalLineDireito/>
    </ContainerCitacao>
    <VerticalLineEsquerdoMenor/>
      <Autor>- Steve Jobs</Autor>
      <HorizontalLineInferiorMenor/>
      <VerticalLineDireitoMenor/>
    
      
    </> 
  );
};

export default CitacaoComponent;