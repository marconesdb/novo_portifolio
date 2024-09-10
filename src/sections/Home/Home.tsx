// Home.tsx
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

const Home = () => {
  return (
    <Container id="inicio">
      <ContentWrapper>
        <TextSection>
          <Title>
            Marcone S. de Brito é <br></br>
            <span> Analista de Sistemas</span> e <span>Desenvolvedor</span> <span className='TextoFront-end'>Front-end.</span>
          </Title>
          <Subtitle>“Transformo ideias em realidade, codificando a Web com bytes de inovação.”</Subtitle>
          <ContactButton href="https://wa.me/5538992182727" target="_blank" rel="noopener noreferrer">
            Fale comigo!
          </ContactButton>
        </TextSection>
        <ImageSection>
          <Logo>
            <div>
              <div className='retanguloInferior'>
                <div className='retanguloInferiorMenor'></div>
              </div>
              <div className='retanguloSuperior'>
                <div className='retanguloSuperiorMenor'></div>
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
  );
};

export default Home;