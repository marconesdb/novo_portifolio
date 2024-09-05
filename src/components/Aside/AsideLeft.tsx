import React from 'react';
import { AsideLeft as StyledAsideLeft, VerticalLine, ImageContainer, RetanguloEsquerdoInferior, Cubo } from './AsideLeft.styles';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';  // Importando os ícones do react-icons
import { SvgLink } from '../Header/Header.styles';

const AsideLeft: React.FC = () => {
  return (
    <StyledAsideLeft>
      {/* Traço vertical */}
      <VerticalLine />

      {/* Contêiner para os ícones */}
      <ImageContainer>
        <SvgLink href="https://novo-portifolio-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
          {/* Adicione aqui o ícone desejado para o seu portfólio, se necessário */}
        </SvgLink>
        <SvgLink href="https://wa.me/5538992182727" target="_blank">
          <FaWhatsapp size={30} color="#fff" /> {/* Ícone do WhatsApp */}
        </SvgLink>
        <SvgLink href="https://github.com/marconesdb" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} color="#fff" /> {/* Ícone do GitHub */}
        </SvgLink>
        <SvgLink href="https://www.linkedin.com/in/marconesb/" target="_blank">
          <FaLinkedin size={30} color="#fff" /> {/* Ícone do LinkedIn */}
        </SvgLink>
      </ImageContainer>

      <RetanguloEsquerdoInferior />
      <Cubo>
        <div className='cubo1'>
          {/* Criação do cubo */}
          {[...Array(25)].map((_, index) => (
            <div key={index} className="dot"></div>
          ))}
        </div>
      </Cubo>

      <Cubo>
        <div className='cubo2'>
          {/* Criação do cubo */}
          {[...Array(20)].map((_, index) => (
            <div key={index} className="dot"></div>
          ))}
        </div>
      </Cubo>
    </StyledAsideLeft>
  );
};

export default AsideLeft;
