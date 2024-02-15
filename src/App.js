import React from 'react';

import { About, Header, Skills, Work, Assignments } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className='app'>
    <Navbar />
    <Header />
    <About />
    <Skills />
    <Work />
    <Assignments />
  </div>
);

export default App;
