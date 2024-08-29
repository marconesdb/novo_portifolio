// components/MainContent/MainContent.tsx
import React from 'react';
import Home from '../../sections/Home/Home';
import Projects from '../../sections/Projects/Projects';
import SmallProjects from '../../sections/SmallProjects/SmallProjects';
import Skills from '../../sections/Skills/Skills';
import About from '../../sections/About/About';
import Contact from '../../sections/Contact/Contact';

const MainContent: React.FC = () => {
  return (
    <div>
      <Home/>
      <Projects/>
      <SmallProjects/>
      <Skills/>
      <About/>
      <Contact/>
    </div>
  );
};

export default MainContent;
