'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextProps {
    isDarkTheme: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
        // Здесь можно добавить логику сохранения текущей темы (например, в localStorage)
        document.body.classList.toggle('dark-theme');
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
