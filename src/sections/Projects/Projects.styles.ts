import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1b1e23;
  min-height: 100vh; /* Muda para min-height para permitir expansão */
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
`;

export const Line = styled.div`
  height: 2px;
  width: 600px;
  background-color: yellow;
  margin-left: 10px;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 50px; /* Ajuste conforme necessário */
`;

export const Card = styled.div`
  background-color: #1b1e23;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  font-size: 18px;
  color: black;
  width: 300px;
  height: 400px; /* Ajuste conforme necessário */
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px #fff;
`;
