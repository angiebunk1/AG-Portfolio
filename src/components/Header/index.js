import React, { useState } from 'react';
import Navigation from './Navigation';

function Header() {

  const [categories] = useState([
    { name: 'about me' },
    { name: 'portfolio' },
    { name: 'resume' },
    { name: 'contact me' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
           ANGIE GUSTAFSON
        </a>
      </h2>
      <nav>
        <Navigation>
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        </Navigation>
      </nav>
    </header>
  );
}

export default Header;