import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        Header
      </header>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
