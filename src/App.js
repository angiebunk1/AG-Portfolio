import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation'
import Section from './components/Section'

function App() {

  const [sections] = useState([
    { name: 'About me' },
    { name: 'Portfolio' },
    { name: 'Resume' },
    { name: 'Contact me' }
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);
 

  return (
    <div>
      <header>
        <Header>
          <Navigation 
          sections={sections}
          setCurrentSection={setCurrentSection} 
          currentSection={currentSection}
          ></Navigation>
        </Header>
      </header>
      <main>
        <Section currentSection={currentSection}></Section>
      </main>
      <Footer></Footer>
    </div>

  );
}

export default App;
