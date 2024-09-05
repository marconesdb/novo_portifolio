// components/Home/Home.tsx
import React from 'react';
import { Container, ContainerDireito, ContainerEsquerdo, Line, Main, Title } from './Contact.styles';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <Container>
       <Title>
          <span>#</span>
          <p>Contato</p>
          <Line />
        </Title>
        <Main>
       <ContainerEsquerdo>
        <p className='paragrafo'>
        Estou interessado em oportunidades de freelance. No entanto, se você tiver outra solicitação ou pergunta, não hesite em entrar em contato comigo
        </p>
       </ContainerEsquerdo>
       <ContainerDireito>
        <div className='contato'>
          <p className='TituloMensagem'>Envie-me uma mensagem:</p>
          <div className='emailContainer'>
              <FaEnvelope className='emailIcon' />
              <p className='email'>marconebritt@gmail.com</p>
          </div>
          <div className='emailContainer'>
              <FaPhone className='telefone' /> {/* Ícone de Telefone */}
              <p className='telefone'>+55 38 99218-2727</p>
          </div>

          <div className='emailContainer'>
              <FaWhatsapp className='whatsapp' /> {/* Ícone de WhatsApp */}
              <p className='email'>+55 38 99913-8667</p>
          </div>
        </div>
       </ContainerDireito>

        </Main>
    </Container>
  );
};

export default Contact;
