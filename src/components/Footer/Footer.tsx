import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'; // Importando os ícones
import { SvgLink } from '../Header/Header.styles';
import Logo from '../../assets/images/Logo.svg';

import {
  FooterContainer,
  LeftSection,
  RightSection,
  ImagesContainer,
  CenterSection,
  FirstParagraph,
  SecondParagraph,
  ThirdParagraph,
  ImageContainer,
  LeftSectionContent,
  ParagraphContainer,
  CentralParagraph,
  ParagraphSocialNetworks,
  LogoImage,
  FooterContent,
} from './Footer.styles';

// Função para obter o ano atual
const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LeftSection>
          <LeftSectionContent>
            <ImageContainer>
              <LogoImage src={Logo} alt="Logo" />
            </ImageContainer>
            <ParagraphContainer>
              <FirstParagraph>Marcone S. de Brito</FirstParagraph>
              <SecondParagraph>marconebritt@gmail.com</SecondParagraph>
            </ParagraphContainer>
          </LeftSectionContent>
          <ThirdParagraph>Analista de Sistemas e Desenvolvedor Front-end</ThirdParagraph>
        </LeftSection>

        <CenterSection>
          <CentralParagraph>
            &copy; Copyright {getCurrentYear()}. Desenvolvido por: Marcone S. de Brito
          </CentralParagraph>
        </CenterSection>

        <RightSection>
          <ParagraphSocialNetworks>Redes Sociais</ParagraphSocialNetworks>
          <ImagesContainer>
            <SvgLink href="https://wa.me/5538992182727" target="_blank">
              <FaWhatsapp size={30} color="#fff" />  {/* Ícone WhatsApp */}
            </SvgLink>
            <SvgLink href="https://github.com/marconesdb" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} color="#fff" />  {/* Ícone GitHub */}
            </SvgLink>
            <SvgLink href="https://www.linkedin.com/in/marconesb/" target="_blank">
              <FaLinkedin size={30} color="#fff" />  {/* Ícone LinkedIn */}
            </SvgLink>
          </ImagesContainer>
        </RightSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
