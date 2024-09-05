import React from 'react';
import { Container, Main, FormularioWrapper, EnviarButton } from './Formulario.styles';


const Formulario: React.FC = () => {
  return (
    <Container>
      <Main>
        <FormularioWrapper>
          <div className="container">
            <h2>Fale comigo!</h2>
            <form action="#" method="POST">
              <div className="form-group">
                <div className="form-item">
                  <label htmlFor="nome">Nome:</label>
                  <input type="text" id="nome" name="nome" required placeholder="Digite seu nome" />
                </div>
                <div className="form-item">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required placeholder="Digite seu email" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="assunto">Assunto:</label>
                <input type="text" id="assunto" name="assunto" required placeholder="Digite um assunto" />
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea id="mensagem" name="mensagem" rows={5} required placeholder="Digite aqui sua mensagem..."></textarea>
              </div>

              <EnviarButton>Enviar</EnviarButton>
  
            </form>
          </div>
        </FormularioWrapper>
      </Main>
    </Container>
  );
};

export default Formulario;
