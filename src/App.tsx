import React from 'react';
import Header from './components/Header/Header';
import AsideLeft from './components/Aside/AsideLeft';
import AsideRight from './components/Aside/AsideRight';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';
import { Container, FooterWrapper } from './components/Container/Container.styles';
import { ContentWrapper } from './components/ContentWrapper/ContentWrapper'; 
import { GlobalStyles } from './assets/styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
    <Container>
      {/* <AsideLeft /> */}
      <ContentWrapper>
        <Header />
        <MainContent />
      </ContentWrapper>
      {/* <AsideRight /> */}
     {/* <FooterWrapper>
      <Footer/>
      </FooterWrapper> */}
    </Container>
    <GlobalStyles/>
    </>
  );
};

export default App;
