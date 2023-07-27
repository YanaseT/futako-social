import React from 'react';
import About from './pages/About';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './pages/Home';
import Header from './ui/header';

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />}/>
        </Routes>
    </div>
  );
}

export default App;
