import { useState , useEffect} from 'react';

export const useDarkMode = () => {
    
    const [theme, setTheme] = useState('light');

    //local storage to store the theme so the theme doesnt change when going to different pages.
    const setMode = mode => {
        window.localStorage.setItem('theme', mode);
        setTheme(mode);
    }

    const toggleTheme = () => {
        theme === 'light' ? setMode('dark') : setMode('light');
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme ? setTheme(localTheme) : setMode('light')
    }, [])

    return [theme, toggleTheme]
}