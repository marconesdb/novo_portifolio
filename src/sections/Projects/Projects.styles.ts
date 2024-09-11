import styled from 'styled-components';



export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2c3036;
  min-height: 100vh;
  padding: 20px;
  position: relative;
  transform: translateY(-200px);
  

  /* Responsividade */
  @media (min-width: 360px) and (max-width: 768px) {
    transform: translateY(0); /* Remove a translação em telas menores */
    padding: 10px;
  }
`;

export const Title = styled.div`
  
  width: 80%; /* Garante que o título ocupe a largura total */
  padding: 15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Garante alinhamento do título e linha */
  span {
    color: #A8990F; /* Cor amarela */
  }
  p{
    font-size: 32px;
  }


  /* Responsividade */
  @media (min-width: 360px) and (max-width: 768px) {
    p {
      font-size: 24px;
    }
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 600px;
  background-color: #A8990F;
  margin-left: 10px;

  /* Responsividade */
  @media (min-width: 360px) and (max-width: 768px) {
    /* width: calc(100% - 30px); */
     /* Reduz o tamanho da linha para caber no espaço com margem */
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 50px;

  /* Responsividade */
  @media (min-width: 360px) and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); /* Um cartão por linha */
    gap: 15px; /* Reduz o espaço entre os cartões */
  }
`;

export const Card = styled.div`
  background-color: #1b1e23;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: white;
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: solid 1px #ABB2BF;

  /* Responsividade */
  @media (min-width: 360px) and (max-width: 768px) {
    width: 100%; /* Ajusta a largura para 100% em telas menores */
    height: auto; /* Permite que a altura se ajuste dinamicamente */
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;


  /* Responsividade */
  @media (min-width: 360px) and (max-width: 768px) {
    height: 150px; /* Reduz a altura da imagem em dispositivos menores */
  }
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  width: 300px;
  padding: 10px;


  /* Responsividade */
  @media (min-width: 360px) and (max-width: 768px) {
    width: 100%; /* Ajusta a largura para 100% */
    font-size: 20px; /* Reduz o tamanho da fonte */
  }
`;

export const CardSubtitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  color: #ABB2BF;
  text-align: center;
  width: 300px;
  padding: 10px;
  border: solid 1px #ABB2BF;

  /* Responsividade */
  @media (min-width: 360px) and (max-width: 768px) {
    width: 100%; /* Ajusta a largura para 100% */
  }
`;

export const CardText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #ABB2BF;
  text-align: center;
  flex: 1;
  margin-bottom: 15px;

  /* Responsividade */
  @media (min-width: 360px) and (max-width: 768px) {
    font-size: 12px; /* Reduz o tamanho da fonte */
  }
`;

export const CardButtons = styled.div`
  display: flex;
  gap: 20px;
  padding: 15px;

  a {
    text-decoration: none;  /* Remove sublinhado do link */
  }

  button {
    background-color: #1b1e23;
    border: solid 1px #ABB2BF;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;  /* Espaço entre o ícone e o texto */
    transition: background-color 0.3s;

    &:hover {
      /* background-color: #d9a400; */
      background-color: #1b1e23;
      color: white;
      border: solid #d9a400;
    }

    svg {
      font-size: 18px;  /* Tamanho do ícone */
    }
  }

  /* Responsividade */
  @media (min-width: 360px) and (max-width: 768px) {
    flex-direction: column; /* Empilha os botões verticalmente */
    gap: 10px; /* Reduz o espaçamento entre os botões */
    justify-content: center; /* Centraliza os botões horizontalmente */
    align-items: center; /* Centraliza os botões verticalmente */
  }
`;
