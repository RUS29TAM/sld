'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface ThemeProviderProps {
    children: ReactNode;
}

interface ThemeContextProps {
    isDarkTheme: boolean;
    toggleTheme: () => void;
    selectedTopic: string;
    setSelectedTopic: (topic: string) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [selectedTopic, setSelectedTopic] = useState<string>('economy');
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false); // Стартовое значение

    useEffect(() => {
        // Проверяем тему в localStorage после монтирования
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') || 'light';
            setIsDarkTheme(savedTheme === 'dark');
            document.body.classList.toggle('darkTheme', savedTheme === 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = isDarkTheme ? 'light' : 'dark';
        setIsDarkTheme(!isDarkTheme);
        localStorage.setItem('theme', newTheme);
        document.body.classList.toggle('darkTheme');
    };

    const contextValue: ThemeContextProps = {
        isDarkTheme, toggleTheme,
        selectedTopic, setSelectedTopic,
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
