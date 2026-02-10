import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sections from './components/Sections';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Sections />
      </main>
    </div>
  );
}

export default App;
