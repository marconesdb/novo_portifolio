import React from 'react';
import Github from '../../assets/images/Github.svg';
import Linkedin from '../../assets/images/Linkedin.svg';
import WhatsApp from '../../assets/images/WhatsApp.svg';
import { SvgImage, SvgLink } from '../Header/Header.styles';
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
        <ThirdParagraph>Analista de Sistemas e Desenvolvedor Front-end </ThirdParagraph>
      </LeftSection>

      <CenterSection>
        <CentralParagraph>&copy; Copyright 2024. Desenvolvido por: Marcone S. de Brito</CentralParagraph>
      </CenterSection>

      <RightSection>
        <ParagraphSocialNetworks>Redes Sociais</ParagraphSocialNetworks>
        <ImagesContainer>
          <SvgLink href="https://wa.me/5538992182727" target="_blank">
            <SvgImage src={WhatsApp} alt="WhatsApp" />
          </SvgLink>
          <SvgLink href="https://github.com/marconesdb" target="_blank" rel="noopener noreferrer">
            <SvgImage src={Github} alt="Github" />
          </SvgLink>
          <SvgLink href="https://www.linkedin.com/in/marconesb/" target="_blank">
            <SvgImage src={Linkedin} alt="Linkedin" />
          </SvgLink>
        </ImagesContainer>
      </RightSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
