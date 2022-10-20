import React, { useContext } from 'react';
import "./menu.scss";
import { ThemeContext } from "../../contex/ThemeContex"


export default function Menu({ closeMenu }) {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={theme === "dark" ? "menu" : "menu-light"}>
            <ul>
                <li className='menu--home' onClick={closeMenu}><a href='#home' >Home</a></li>
                <li className='menu--about' onClick={closeMenu}><a href='#about'>About</a></li>
                <li className='menu--skills' onClick={closeMenu}><a href='#skills'>Skills</a></li>
                <li className='menu--projects' onClick={closeMenu}><a href='#projects'>Projects</a></li>
                <li className='menu--contact' onClick={closeMenu}><a href='#contact'>Contact</a></li>
            </ul>
        </div>
    )
}
