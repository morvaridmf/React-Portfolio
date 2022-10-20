import React, { useContext } from 'react';
import { ThemeContext } from "../../contex/ThemeContex"
import "./button.scss"
import ReactSwitch from 'react-switch';


export default function Button() {

    const { toggleTheme, theme } = useContext(ThemeContext)

    return (
        <div className='button'>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} height={20}
                width={50} onColor="#C2A978"
            />
        </div>
    )
}
