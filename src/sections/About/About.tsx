import React from 'react';

import {Container, ContainerAbout, ContainerDireito, ContainerEsquerdo, Line, Title} from '../About/About.styles';
import { ContactButton } from '../Home/Home.styles';

const About: React.FC = () => {
  return (
    <Container>
       <Title>
          <span>#</span>
          <p>about-me</p>
          <Line />
        </Title>
    <ContainerAbout>
    <ContainerEsquerdo>
      <p className='texto-titulo'>Olá, eu sou o Marcone S. de Brito! </p>
        <p  className='p-1'> I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 

        <p className='p-2'>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p></p>

         {/* Direcionar para a página que tem o curriculo online em HTML e CSS */}
      <a href="https://wa.me/5538992182727" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <ContactButton>Leia mais →</ContactButton>
      </a>
    </ContainerEsquerdo>
    <ContainerDireito>
    <div className='cubo1'>
        {/* Criação do cubo */}
        {[...Array(25)].map((_, index) => (
        <div key={index} className="dot"></div>
        ))}
    </div>

    <div className='cubo2'>
        {/* Criação do cubo */}
        {[...Array(25)].map((_, index) => (
        <div key={index} className="dot"></div>
        ))}
    </div>
    </ContainerDireito>
    </ContainerAbout>
    </Container>
  );
};

export default About;
