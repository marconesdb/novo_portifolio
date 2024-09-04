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
        <p  className='p-1'> Sou um desenvolvedor Front-end e Analista de Sistemas, entusiasta de tecnologia, com uma sólida formação acadêmica e ampla experiência prática. Possuo pós-graduação em Big Data, Ciência de Dados, Machine Learning e Inteligência Artificial, e estou localizado em Montes Claros - MG, Brasil.  
        <p className='p-1'>Tenho experiência na criação de sites responsivos e na transformação de ideias em experiências web modernas e envolventes. Meu foco é desenvolver interfaces intuitivas e acessíveis, garantindo uma navegação fluida e agradável para os usuários.</p>
        <p className='p-2'>Nos últimos anos, trabalhei com uma variedade de clientes, ajudando-os a construir uma presença online sólida e eficiente. Além de dominar HTML, CSS e JavaScript, estou constantemente atualizando meus conhecimentos em tecnologias emergentes e frameworks como React, para oferecer soluções inovadoras e de alta qualidade.</p>
        
        <p className='p-2'>Minha paixão pelo desenvolvimento web vai além da codificação; também me esforço para entender as necessidades dos usuários e criar designs que ofereçam valor real. Estou comprometido com a melhoria contínua, sempre buscando aprender novas habilidades e técnicas para entregar resultados excepcionais em cada projeto.</p>
        </p>

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
