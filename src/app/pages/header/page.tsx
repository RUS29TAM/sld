import React from 'react';
import styles from './header.module.css'
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <Link href={'/'}>ГЛАВНАЯ</Link>
                <Link href={'/'}>КОНТАКТЫ</Link>
                <Link href={'/'}>ИНФО</Link>
            </nav>
        </header>
    );
};

export default Header;