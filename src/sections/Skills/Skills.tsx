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
            <div>Skill 1</div>
            <div>Skill 2</div>
            <div>Skill 3</div>
            <div>Skill 4</div>
            <div>Skill 5</div>
            <div>Skill 6</div>
          </SkillsContainer>
        </MainContainer>
      </Container>
    </>
  );
};

export default Skills;
