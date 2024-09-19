import React from 'react';
import { CuboDireito, RetanguloDireito, RetanguloDireitoInferior, AsideRight as StyledAsideRight } from './AsideRight.styles';

const AsideRight: React.FC = () => {
  return (
    <StyledAsideRight>
       <RetanguloDireito>
      </RetanguloDireito>
      <RetanguloDireitoInferior>
      </RetanguloDireitoInferior>
      <CuboDireito>
      <div className='cubo1'>
        {/* Criação do cubo */}
        {[...Array(20)].map((_, index) => (
        <div key={index} className="dot"></div>
        ))}
      </div>
       
      
      </CuboDireito>
    </StyledAsideRight>
  );
};

export default AsideRight;
