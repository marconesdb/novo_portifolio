import fotoPerfil from '../../assets/images/Marcone.png'
// import Quadrado from '../../assets/images/Quadrado.png'
import ImgFundo from '../../assets/images/Logo.png'
import { Container, ContentWrapper, TextSection, ImageSection, Title, Subtitle, ContactButton, Image, ImageQuadrado, PortfolioTag, QuoteContainer, QuoteText, QuoteAuthor, ImageFundo } from './Home.styles';


const Home = () => (
  <Container>
    <ContentWrapper>
      <TextSection>
        <Title>
          Marcone S. de Brito é <span>Analista de Sistemas</span> e <span>Desenvolvedor Front-end</span>.
          <br />
        </Title>
        <Subtitle>“Transformo ideias em realidade, codificando a Web com bytes de inovação.”</Subtitle>
        <a href="https://wa.me/5538992182727" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <ContactButton>Fale comigo !!</ContactButton>
        </a>
      
      </TextSection>
      <ImageSection>
        <ImageFundo src={ImgFundo} alt="Quadrado" />
        <div>
          <Image src={fotoPerfil} alt="Foto - Marcone" />
          <PortfolioTag>
            <ImageQuadrado>
            </ImageQuadrado>
            <p>Atualmente trabalhando em projetos <p><span>Sociais.</span></p></p>
          </PortfolioTag>
        </div>
      </ImageSection>
    </ContentWrapper>
    <QuoteContainer>
          <QuoteText>“Creativity is intelligence having fun.”</QuoteText>
          <QuoteAuthor>- Albert Einstein</QuoteAuthor>
        </QuoteContainer>
  </Container>
);

export default Home;
