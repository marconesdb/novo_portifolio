import { Citacao, ContainerCitacao, DivCitacao } from '../../sections/Citacao/Citacao.styles';

const CitacaoComponent = () => {
  return (
    <>
    <ContainerCitacao className='ContainerCitacao'>
      
      <DivCitacao>
      <Citacao><span className='aspasSuperior'>❝</span>A única maneira de fazer <span className='textCitacao'> um excelente trabalho é </span> amar o que você faz.<span className='aspasInferior'>❞</span><span className='autor'>- Steve Jobs</span></Citacao>
      </DivCitacao>
    
    </ContainerCitacao>
   
      
    </> 
  );
};

export default CitacaoComponent;