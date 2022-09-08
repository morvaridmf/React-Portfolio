import React from 'react';
import "./menu.scss";

export default function Menu() {
    return (
        <div className='menu'>
            <ul>
                <li className='menu--home'><a href='#home'>Home</a></li>
                <li className='menu--about'><a href='#about'>About</a></li>
                <li className='menu--skills'><a href='#skills'>Skills</a></li>
                <li className='menu--projects'><a href='#projects'>Projects</a></li>
                <li className='menu--contact'><a href='#contact'>Contact</a></li>
            </ul>
        </div>
    )
}
