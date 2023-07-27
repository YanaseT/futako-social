import React from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

//ヘッダーの共通コンポーネント
const Header = () => {
    //i18nの利用
    const { t } = useTranslation();
    return (
        <div>
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

export default Header;