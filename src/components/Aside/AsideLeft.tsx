import React from 'react';
import { AsideLeft as StyledAsideLeft, VerticalLine, ImageContainer, RetanguloEsquerdoInferior,  } from './AsideLeft.styles';
import Github from '../../assets/images/Github.svg'
import WhatsApp from '../../assets/images/WhatsApp.svg'
import Linkedin from '../../assets/images/Linkedin.svg'
import { SvgImage, SvgLink } from '../Header/Header.styles';



const AsideLeft: React.FC = () => {
  return (
    <StyledAsideLeft>
      {/* Traço vertical */}
      <VerticalLine />

      {/* Contêiner para as imagens */}
      <ImageContainer>
             <SvgLink href="https://novo-portifolio-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
              </SvgLink>
              <SvgLink href="https://wa.me/5538992182727" target="_blank">
                <SvgImage src={WhatsApp} alt="WhatsApp" />
              </SvgLink>
              <SvgLink href="https://github.com/marconesdb" target="_blank" rel="noopener noreferrer">
                <SvgImage src={Github} alt="Github" />
              </SvgLink>
              <SvgLink href="https://www.linkedin.com/in/marconesb/" target="_blank">
                <SvgImage src={Linkedin} alt="Linkedin" />
              </SvgLink>
      </ImageContainer>

      <RetanguloEsquerdoInferior>
      </RetanguloEsquerdoInferior>
    </StyledAsideLeft>
  );
};

export default AsideLeft;
