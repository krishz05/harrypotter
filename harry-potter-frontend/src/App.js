import React from 'react';
import CharacterList from './components/characterList';
import RavenclawList from './components/RavenclawList';
import StaffList from './components/staffList';
import SpellsList from './components/spellsList';
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>⚡ Harry Potter World</h1>
        <p>Explore the characters, houses, spells, and staff of Hogwarts!</p>
      </header>

      <main>
        <div className="section">
          <h2>All Characters</h2>
          <CharacterList />
        </div>

        <div className="section">
          <h2>Ravenclaw House</h2>
          <RavenclawList />
        </div>

        <div className="section">
          <h2>Hogwarts Staff</h2>
          <StaffList />
        </div>

        <div className="section">
          <h2>Spells</h2>
          <SpellsList />
        </div>
      </main>
    </>
  );
}

export default App;
