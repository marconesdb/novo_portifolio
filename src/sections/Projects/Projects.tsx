// components/Home/Home.tsx
import React from 'react';
import {Container, Title, Line, Cards, Card} from './Projects.styles'
const Projects: React.FC = () => {
  return (
    <Container>
      <Title>
      <span>#projects</span>
      <Line />
      </Title>
      <Cards>
      <Card>Card 1</Card>
      <Card>Card 2</Card>
      <Card>Card 3</Card>
      <Card>Card 4</Card>
      <Card>Card 5</Card>
      <Card>Card 6</Card>
      </Cards>
    </Container>
  );
};

export default Projects;




