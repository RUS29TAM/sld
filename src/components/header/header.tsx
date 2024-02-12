import React from 'react';
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <a href={''}>ГЛАВНАЯ</a>
                <a href={''}>КОНТАКТЫ</a>
                <a href={''}>ИНФО</a>
            </nav>
        </header>
    );
};

export default Header;