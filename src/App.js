import React, { useState } from 'react';
// import About from './components/About';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  const [categories] = useState([
    {
      name: 'about me',
      description: 'Photo and bio of Angie Gustafson',
    },
    { name: 'portfolio', description: 'featured projects' },
    { name: 'resume', description: 'professional resume' },
    { name: 'contact', description: 'contact form and info' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
<div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
        {!contactSelected ? (
          <>
            <Navigation currentCategory={currentCategory}></Navigation>
          </>
        ) : (
        //   <ContactForm></ContactForm>
         )}
      </main>
    </div>
  );
}

export default App;
