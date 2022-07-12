import React,{ useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../Color";



const HeroSection = () => {
    const theme = useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme];

    return(
        <div
            style={{
                padding: "1rem",
                backgroundColor: `${currentTheme.backgroundColor}`,
                color: `${currentTheme.textColor}`,
                textAlign: "center"
            }}
        >
            <h1>Context Api Theme toggler</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cumque mollitia asperiores voluptate quos veritatis sit corrupti nam aut, doloribus accusamus voluptatum ipsum saepe impedit similique quod obcaecati porro. Corrupti dolores deleniti harum quasi.</p>
            <button
                style={{
                    backgroundColor: "#26ae60",
                    padding: "10px 150px",
                    fontSize: "20px",
                    color: "#FFF",
                    border: `${currentTheme.border}`
                }}
            >Click Me</button>
        </div>
    )
};

export default HeroSection;