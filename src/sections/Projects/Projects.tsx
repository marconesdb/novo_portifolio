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
  CardSubtitle, 
  SectionProjetos
} from './Projects.styles';


import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image1 from '../../assets/images/img-projetos/Laços de Amor 1.png'
import Image2 from '../../assets/images/img-projetos/Image.png'
import Image3 from '../../assets/images/img-projetos/Karine Cevalles 2.png'
import Image4 from '../../assets/images/img-projetos/Trabalhadores.png'
import Image5 from '../../assets/images/img-projetos/Landpage.png'
import Image6 from '../../assets/images/img-projetos/Calculadora.png'

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
    subtitle: "HTML, Tailwind.CSS e Javascript",
    title: "Laços de Amor",
    description: "Este é um site feito voluntáriamente para a Instituição Laços de Amor.",
    githubLink: "https://github.com/marconesdb/site-lacosdeamor",
    externalLink: "https://site-lacosdeamor.vercel.app/"
  },
  // Adicione mais projetos aqui

  {
    image: Image2,
    subtitle: "HTML, Tailwind.CSS e React.JS",
    title: "Solar de Jesus",
    description: "Este é um site feito voluntáriamente para a Instituição de Caridade Solar de Jesus.",
    githubLink: "https://github.com/marconesdb/solardejesus-ecommerce",
    externalLink: "https://solardejesus-ecommerce.vercel.app/"
  },
  {
    image: Image3,
    subtitle: "HTML, Tailwind.CSS e Javascript",
    title: "Karina Cevalles",
    description: "Protótipo de um site para a Advogada Karine Cevalles.",
    githubLink: "https://github.com/marconesdb/site-karinaCevalles",
    externalLink: "https://site-karina-cevalles.vercel.app/"
  },

  {
    image: Image4,
    subtitle: "HTML, Tailwind.CSS e Javascript",
    title: "T. da Última Hora",
    description: "Protótipo de um site para a Instituição de Caridade Trabalhadores da Última Hora",
    githubLink: "https://github.com/marconesdb/SiteTrabalhadoresDaUltimaHora",
    externalLink: "https://marconesdb.github.io/SiteTrabalhadoresDaUltimaHora/"
  },
  {
    image: Image5,
    subtitle: "HTML e CSS",
    title: "Tom's Jazz School",
    description: "Exemplo de uma LandPage",
    githubLink: "https://github.com/marconesdb/landPageOneBitCode",
    externalLink: "https://marconesdb.github.io/landPageOneBitCode/"
  },
  {
    image: Image6,
    subtitle: "HTML,CSS,javascript",
    title: "Cal. Científica",
    description: "Exemplo de uma Calculadora Científica",
    githubLink: "https://github.com/marconesdb/CalculadoraCientifica",
    externalLink: "https://marconesdb.github.io/CalculadoraCientifica/"
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
    <Container id="projetos">
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
