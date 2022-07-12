import React,{ useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeTogler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);

    return(
        <div
        onClick={() =>{
            setThemeMode(themeMode === "light" ? "dark" : "light")
        }}
        >
            <span><button>{themeMode === "light" ? "Dark Mode" : "Light Mode"}</button></span>   
        </div>
    )
};

export default ThemeTogler;