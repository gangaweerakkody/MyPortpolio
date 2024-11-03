// App.js
import React from 'react';
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import { Typography } from '@mui/material';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
