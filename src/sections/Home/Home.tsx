// Home.tsx
import React from 'react';
import fotoPerfil from '../../assets/images/Marcone.png';

import { 
  Container, 
  ContentWrapper, 
  TextSection, 
  ImageSection, 
  Title, 
  Subtitle, 
  ContactButton, 
  Image, 
  ImageQuadrado, 
  PortfolioTag, 
  Logo, 
} from './Home.styles';

const Home = () => (
  <>
    <Container id="início">  {/* Adicionando um ID à seção */}
      <ContentWrapper>
        <TextSection>
          <Title>
            Marcone S. de Brito é <br /><span>Analista de Sistemas</span> e <span>Desenvolvedor Front-end</span>.
            <br />
          </Title>
          <Subtitle>“Transformo ideias em realidade, codificando a Web com bytes de inovação.”</Subtitle>
          <ContactButton as="a" href="https://wa.me/5538992182727" target="_blank" rel="noopener noreferrer">
            Fale comigo !!
          </ContactButton>
        </TextSection>
        <ImageSection>
          <Logo>
            <div>
              <div className='RetanguloInferior'>
                <div className='RetanguloInferiorMenor'></div>
              </div>
              <div className='RetanguloSuperior'>
                <div className='RetanguloSuperiorMenor'></div>
              </div>
            </div>
          </Logo>
          
          <div>
            <Image src={fotoPerfil} alt="Foto - Marcone" />
            <PortfolioTag>
              <ImageQuadrado />
              <p>Atualmente trabalhando em projetos <span>Sociais.</span></p>
            </PortfolioTag>
          </div>
        </ImageSection>
      </ContentWrapper>
    </Container>
  </>
);

export default Home;
