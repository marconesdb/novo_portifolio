import React from 'react';
import LogoM from '../../assets/images/logo-medium.png'
import { 
  Container, 
  ImagensInferiorContainer, 
  ImagensSuperiorContainer, 
  Line, 
  MainContainer, 
  SkillsContainer, 
  Title 
} from './Skills.styles';

const Skills: React.FC = () => {
  return (
    <>
      <Container>
        <Title>
          <span>#</span>
          <p>skills</p>
          <Line />
        </Title>
        <MainContainer>
          <div>
            <ImagensSuperiorContainer>
              <div className='cubo1'>
                {/* Criação do cubo */}
                {[...Array(25)].map((_, index) => (
                  <div key={index} className="dot"></div>
                ))}
              </div>
              <div className='quadrado1'>
              </div>
            </ImagensSuperiorContainer>
            <ImagensInferiorContainer>
              <img src={LogoM} alt="Logo" />
              <div className='cubo2'>
                {/* Criação do cubo */}
                {[...Array(25)].map((_, index) => (
                  <div key={index} className="dot"></div>
                ))}
              </div>
              <div className='quadrado2'>
              </div>
             
            </ImagensInferiorContainer>
          </div>
          <SkillsContainer>
            {/* Adicione seus itens de habilidades (skills) aqui */}
            <div className='Skill-1'><p className='p-1'>Linguagens</p><p className='p-texto'>TypeScript, Javascript</p></div>
            <div className='Skill-2'><p className='p-2'>Databases</p><p className='p-texto'>MySQL, PostgreSQL</p></div>
            <div className='Skill-3'><p className='p-3'>Outros</p><p className='p-texto'>HTML, CSS, EJS, SCSS</p></div>
            <div className='Skill-4'><p className='p-4'>Ferramentas</p><p className='p-texto'>Vscode, Insomnia, Figma, Font Awesome </p></div>
            <div className='Skill-5'><p className='p-5'>Frameworks</p><p className='p-texto'>Tailwind.CSS, Bootstrap, React.JS, </p></div>
            {/* <div className='Skill-6'>Skill 6</div> */}
          </SkillsContainer>
        </MainContainer>
      </Container>
    </>
  );
};

export default Skills;
