import fotoPerfil from '../../assets/images/Marcone.png'
import Quadrado from '../../assets/images/Quadrado.png'
import { Container, ContentWrapper, TextSection, ImageSection, Title, Subtitle, ContactButton, Image, ImageQuadrado, PortfolioTag, QuoteContainer, QuoteText, QuoteAuthor } from './Home.styles';

const Home = () => (
  <Container>
    <ContentWrapper>
      <TextSection>
        <Title>
          Marcone S. de Brito é <span>Analista de Sistemas</span> e <span>Desenvolvedor Front-end</span>.
          <br />
        </Title>
        <Subtitle>"Escrevo códigos, dando vida a ideias e contribuindo para transformar a Web com bytes de informação."</Subtitle>
        <ContactButton>Fale comigo !!</ContactButton>
        <QuoteContainer>
          <QuoteText>“Creativity is intelligence having fun.”</QuoteText>
          <QuoteAuthor>- Albert Einstein</QuoteAuthor>
        </QuoteContainer>
      </TextSection>
      <ImageSection>
        <Image src={fotoPerfil} alt="Foto - Marcone" />
        <PortfolioTag>
          <ImageQuadrado src={Quadrado} alt="Quadrado" />
          <p>Atualmente trabalhando em projetos</p><p> <span> Sociais</span></p>
        </PortfolioTag>
      </ImageSection>
    </ContentWrapper>
  </Container>
);

export default Home;
