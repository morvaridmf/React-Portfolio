
import React, { useState, createContext } from "react"

export const ThemeContext = createContext();

const ThemeContexProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark")
    const toggleTheme = () => {
        setTheme((cur) => cur === "dark" ? "!dark" : "dark")

    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContexProvider;