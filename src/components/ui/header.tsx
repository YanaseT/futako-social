import React from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

//ヘッダーの共通コンポーネント
const Header = () => {
    //i18nの利用
    const { t } = useTranslation();
    return (
        <div>
            <AppBar position="static" style={{ backgroundColor: "#E75480" }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Futako social
                    </Typography>
                    <Button color="inherit" component={Link} to="/">{t('home')}</Button>
                    <Button color="inherit" component={Link} to="/about">{t('about')}</Button>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
    }

export default Header;