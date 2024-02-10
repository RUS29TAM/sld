import React from 'react';
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <a href={''}>Home</a>
                <a href={''}>Contacts</a>
                <a href={''}>Info</a>
            </nav>
        </header>
    );
};

export default Header;