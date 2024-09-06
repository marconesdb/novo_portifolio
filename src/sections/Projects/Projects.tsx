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
import Image4 from '../../assets/images/img-projetos/Trabalhadores.png'
import Image5 from '../../assets/images/img-projetos/Landpage.png'

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
    title: "Laços de Amor",
    description: "Este é o texto descritivo do projeto. Você pode adicionar mais detalhes aqui.",
    githubLink: "https://github.com/marconesdb/site-lacosdeamor",
    externalLink: "https://site-lacosdeamor.vercel.app/"
  },
  // Adicione mais projetos aqui

  {
    image: Image2,
    subtitle: "HTML SCSS Python Flask",
    title: "Solar de Jesus",
    description: "Este é o texto descritivo do projeto. Você pode adicionar mais detalhes aqui.",
    githubLink: "https://github.com/marconesdb/solardejesus-ecommerce",
    externalLink: "https://solardejesus-ecommerce.vercel.app/"
  },
  {
    image: Image3,
    subtitle: "HTML SCSS Python Flask",
    title: "Karina Cevalles",
    description: "Este é o texto descritivo do projeto. Você pode adicionar mais detalhes aqui.",
    githubLink: "https://github.com/marconesdb/site-karinaCevalles",
    externalLink: "https://site-karina-cevalles.vercel.app/"
  },

  {
    image: Image4,
    subtitle: "HTML SCSS Python Flask",
    title: "T. da Última Hora",
    description: "Este é o texto descritivo do projeto. Você pode adicionar mais detalhes aqui.",
    githubLink: "https://github.com/marconesdb/SiteTrabalhadoresDaUltimaHora",
    externalLink: "https://marconesdb.github.io/SiteTrabalhadoresDaUltimaHora/"
  },
  {
    image: Image5,
    subtitle: "HTML SCSS Python Flask",
    title: "Tom's Jazz School",
    description: "Este é o texto descritivo do projeto. Você pode adicionar mais detalhes aqui.",
    githubLink: "https://github.com/marconesdb/landPageOneBitCode",
    externalLink: "https://marconesdb.github.io/landPageOneBitCode/"
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
