import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1b1e23;
  min-height: 100vh;
  padding: 20px;
  position: relative;
  transform: translateY(-200px);
  
`;

export const Title = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 15px;
  color: white;
  display: flex;
  align-items: center;

  span {
    color: #d9a400; /* Cor amarela */
  }
  p{
    font-size: 32px;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 600px;
  background-color: #d9a400;
  margin-left: 10px;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 50px;
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
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  width: 300px;
  padding: 10px;
`;

export const CardSubtitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  color: #ABB2BF;
  text-align: center;
  width: 300px;
  padding: 10px;
  border: solid 1px #ABB2BF;
`;

export const CardText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #ABB2BF;
  text-align: center;
  flex: 1;
  margin-bottom: 15px;
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
`;
