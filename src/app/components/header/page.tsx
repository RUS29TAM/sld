import React from 'react';
import styles from './header.module.css'
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <Link href={'/pages/main'}>ГЛАВНАЯ</Link>
                <Link href={'/pages/contact'}>КОНТАКТЫ</Link>
                <Link href={'/pages/info'}>ИНФО</Link>
            </nav>
        </header>
    );
};

export default Header;