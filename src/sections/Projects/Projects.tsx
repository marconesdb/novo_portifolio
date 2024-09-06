import { 
  Container, 
  Title, 
  Line, 
  Cards, 
  Card, 
  CardImage, 
  CardTitle, 
  CardText, 
  CardButtons, 
  CardSubtitle 
} from './Projects.styles';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image1 from '../../assets/images/img-projetos/Laços de Amor 1.png'
import Image2 from '../../assets/images/img-projetos/Image.png'
import Image3 from '../../assets/images/img-projetos/Karine Cevalles 2.png'

type Project = {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  githubLink: string;
  externalLink: string;
};

const projects: Project[] = [
  {
    image: Image1,
    subtitle: "HTML SCSS Python Flask",
    title: "Nome do Projeto 1",
    description: "Este é o texto descritivo do projeto. Você pode adicionar mais detalhes aqui.",
    githubLink: "https://github.com/seu-usuario/seu-repositorio1",
    externalLink: "https://seu-site.com/projeto1"
  },
  // Adicione mais projetos aqui

  {
    image: Image2,
    subtitle: "HTML SCSS Python Flask",
    title: "Nome do Projeto 1",
    description: "Este é o texto descritivo do projeto. Você pode adicionar mais detalhes aqui.",
    githubLink: "https://github.com/seu-usuario/seu-repositorio1",
    externalLink: "https://seu-site.com/projeto1"
  },
  {
    image: Image3,
    subtitle: "HTML SCSS Python Flask",
    title: "Nome do Projeto 1",
    description: "Este é o texto descritivo do projeto. Você pode adicionar mais detalhes aqui.",
    githubLink: "https://github.com/seu-usuario/seu-repositorio1",
    externalLink: "https://seu-site.com/projeto1"
  },

  {
    image: "https://via.placeholder.com/300x200",
    subtitle: "HTML SCSS Python Flask",
    title: "Nome do Projeto 1",
    description: "Este é o texto descritivo do projeto. Você pode adicionar mais detalhes aqui.",
    githubLink: "https://github.com/seu-usuario/seu-repositorio1",
    externalLink: "https://seu-site.com/projeto1"
  },
  {
    image: "https://via.placeholder.com/300x200",
    subtitle: "HTML SCSS Python Flask",
    title: "Nome do Projeto 1",
    description: "Este é o texto descritivo do projeto. Você pode adicionar mais detalhes aqui.",
    githubLink: "https://github.com/seu-usuario/seu-repositorio1",
    externalLink: "https://seu-site.com/projeto1"
  },
  {
    image: "https://via.placeholder.com/300x200",
    subtitle: "HTML SCSS Python Flask",
    title: "Nome do Projeto 1",
    description: "Este é o texto descritivo do projeto. Você pode adicionar mais detalhes aqui.",
    githubLink: "https://github.com/seu-usuario/seu-repositorio1",
    externalLink: "https://seu-site.com/projeto1"
  },
];

function ProjectCard({ image, subtitle, title, description, githubLink, externalLink }: Project) {
  return (
    <Card>
      <CardImage src={image} alt={`Imagem do ${title}`} />
      <CardSubtitle>{subtitle}</CardSubtitle>
      <CardText>
        <CardTitle>{title}</CardTitle>
        {description}
      </CardText>
      <CardButtons>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button>
            <FaGithub /> Github
          </button>
        </a>
        <a href={externalLink} target="_blank" rel="noopener noreferrer">
          <button>
            <FaExternalLinkAlt /> Page
          </button>
        </a>
      </CardButtons>
    </Card>
  );
}

function Projects() {
  return (
    <Container>
      <Title>
        <span>#</span>
        <p>Projetos</p>
        <Line />
      </Title>
      <Cards>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
          
        ))}
      </Cards>
    </Container>
  );
}

export default Projects;
