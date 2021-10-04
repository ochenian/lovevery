import React from 'react';
import logo from './logo.svg';
import './App.css';
import Breadcrumbs from './components/Breadcrumbs';

function App() {
  return (
    <div className='App'>
      <Breadcrumbs items={['Home', 'Play Kits', 'The Sensory Playkit']} />
    </div>
  );
}

export default App;
