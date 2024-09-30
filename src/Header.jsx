// src/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Formula E</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;