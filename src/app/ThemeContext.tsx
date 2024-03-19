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
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => {
            // Инвертируем текущую тему и сохраняем ее в localStorage
            const newTheme = !prevTheme;
            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
            return newTheme;
        });

        document.body.classList.toggle('darkTheme');
    };

    const contextValue: ThemeContextProps = {
        isDarkTheme,
        toggleTheme,
    };

    useEffect(() => {
        // Устанавливаем класс темы при загрузке страницы
        if (isDarkTheme) {
            document.body.classList.add('darkTheme');
        } else {
            document.body.classList.remove('darkTheme');
        }
    }, [isDarkTheme]);

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
