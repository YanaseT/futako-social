import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <ul>
          <li><Link to="/">{t('header.home')}</Link></li>
          <li><Link to="/about">{t('header.about')}</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
