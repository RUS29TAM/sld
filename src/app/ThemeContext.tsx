'use client'
import {createContext, useContext, useState, ReactNode, useEffect} from 'react';
interface ThemeProviderProps {
    children: ReactNode;
}

interface ThemeContextProps {
    isDarkTheme: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
        // Проверяем, сохранена ли тема в localStorage

        if (typeof window !== 'undefined' && window.localStorage) {
            // Проверяем, доступен ли localStorage в браузере
            const savedTheme = localStorage.getItem('theme');
            return savedTheme === 'dark';
        } else {
            // Возвращаем значение по умолчанию, если localStorage не доступен
            const savedTheme = localStorage.getItem('theme');
            return savedTheme === 'light';
        }
    });

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                document.body.classList.toggle('darkTheme', savedTheme === 'dark');
            }
        }
    }, []); // Вызываем эффект только при монтировании компонента

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
        const newTheme = isDarkTheme ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        document.body.classList.toggle('darkTheme');
    };

    const contextValue: ThemeContextProps = {
        isDarkTheme,
        toggleTheme,
    };


    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};
