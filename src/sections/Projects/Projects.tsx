import React from 'react';
import { Container, Title, Line, Cards, Card, CardImage, CardTitle, CardText, CardButtons, CardSubtitle } from './Projects.styles';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';  // Importação dos ícones

const Projects: React.FC = () => {
  return (
    <Container>
      <Title>
        <span>#</span>
        <p>Projetos</p>
        <Line />
      </Title>
      <Cards>
         {/* Card 1 */}
        <Card>
          <CardImage src="https://via.placeholder.com/300x200" alt="Imagem do Projeto 1" />
          <CardSubtitle>HTML SCSS Python Flask</CardSubtitle>
          <CardText>
            <CardTitle>Nome do Projeto</CardTitle>
            Este é o texto descritivo do projeto. Você pode adicionar mais detalhes aqui.
          </CardText>
          <CardButtons>
            <a href="https://github.com/seu-usuario/seu-repositorio" target="_blank" rel="noopener noreferrer">
              <button>
                <FaGithub /> Github
              </button>
            </a>
            <a href="https://seu-site.com" target="_blank" rel="noopener noreferrer">
              <button>
                <FaExternalLinkAlt /> Page
              </button>
            </a>
          </CardButtons>
        </Card>
        {/* Card 2 */}
        <Card>
          <CardImage src="https://via.placeholder.com/300x200" alt="Imagem do Projeto 1" />
          <CardSubtitle>HTML SCSS Python Flask</CardSubtitle>
          <CardText>
            <CardTitle>Nome do Projeto</CardTitle>
            Este é o texto descritivo do projeto. Você pode adicionar mais detalhes aqui.
          </CardText>
          <CardButtons>
            <a href="https://github.com/seu-usuario/seu-repositorio" target="_blank" rel="noopener noreferrer">
              <button>
                <FaGithub /> Github
              </button>
            </a>
            <a href="https://seu-site.com" target="_blank" rel="noopener noreferrer">
              <button>
                <FaExternalLinkAlt /> Page
              </button>
            </a>
          </CardButtons>
        </Card>
         {/* Card 3 */}
         <Card>
          <CardImage src="https://via.placeholder.com/300x200" alt="Imagem do Projeto 1" />
          <CardSubtitle>HTML SCSS Python Flask</CardSubtitle>
          <CardText>
            <CardTitle>Nome do Projeto</CardTitle>
            Este é o texto descritivo do projeto. Você pode adicionar mais detalhes aqui.
          </CardText>
          <CardButtons>
            <a href="https://github.com/seu-usuario/seu-repositorio" target="_blank" rel="noopener noreferrer">
              <button>
                <FaGithub /> Github
              </button>
            </a>
            <a href="https://seu-site.com" target="_blank" rel="noopener noreferrer">
              <button>
                <FaExternalLinkAlt /> Page
              </button>
            </a>
          </CardButtons>
        </Card>
        {/* Card 4 */}
        <Card>
          <CardImage src="https://via.placeholder.com/300x200" alt="Imagem do Projeto 1" />
          <CardSubtitle>HTML SCSS Python Flask</CardSubtitle>
          <CardText>
            <CardTitle>Nome do Projeto</CardTitle>
            Este é o texto descritivo do projeto. Você pode adicionar mais detalhes aqui.
          </CardText>
          <CardButtons>
            <a href="https://github.com/seu-usuario/seu-repositorio" target="_blank" rel="noopener noreferrer">
              <button>
                <FaGithub /> Github
              </button>
            </a>
            <a href="https://seu-site.com" target="_blank" rel="noopener noreferrer">
              <button>
                <FaExternalLinkAlt /> Page
              </button>
            </a>
          </CardButtons>
        </Card>
        {/* Card 5 */}
        <Card>
          <CardImage src="https://via.placeholder.com/300x200" alt="Imagem do Projeto 1" />
          <CardSubtitle>HTML SCSS Python Flask</CardSubtitle>
          <CardText>
            <CardTitle>Nome do Projeto</CardTitle>
            Este é o texto descritivo do projeto. Você pode adicionar mais detalhes aqui.
          </CardText>
          <CardButtons>
            <a href="https://github.com/seu-usuario/seu-repositorio" target="_blank" rel="noopener noreferrer">
              <button>
                <FaGithub /> Github
              </button>
            </a>
            <a href="https://seu-site.com" target="_blank" rel="noopener noreferrer">
              <button>
                <FaExternalLinkAlt /> Page
              </button>
            </a>
          </CardButtons>
        </Card>
         {/* Card 6 */}
         <Card>
          <CardImage src="https://via.placeholder.com/300x200" alt="Imagem do Projeto 1" />
          <CardSubtitle>HTML SCSS Python Flask</CardSubtitle>
          <CardText>
            <CardTitle>Nome do Projeto</CardTitle>
            Este é o texto descritivo do projeto. Você pode adicionar mais detalhes aqui.
          </CardText>
          <CardButtons>
            <a href="https://github.com/seu-usuario/seu-repositorio" target="_blank" rel="noopener noreferrer">
              <button>
                <FaGithub /> Github
              </button>
            </a>
            <a href="https://seu-site.com" target="_blank" rel="noopener noreferrer">
              <button>
                <FaExternalLinkAlt /> Page
              </button>
            </a>
          </CardButtons>
        </Card>
      </Cards>
    </Container>
  );
};

export default Projects;
