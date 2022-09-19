import React from 'react';
import "./topbar.scss"
import { useState } from "react"
import TopbarList from './TopbarList';


export default function Topbar({ menuOpen, setMenuOpen }) {

  const [item, setItem] = useState("Home")

  const data = [
    {
      id: "1",
      title: "Home",
      address: "#home"
    },
    {
      id: "2",
      title: "About",
      address: "#about"
    },
    {
      id: "3",
      title: "Skills",
      address: "#skills"
    },
    {
      id: "4",
      title: "Projects",
      address: "#projects"
    },
    {
      id: "5",
      title: "Contact",
      address: "#contact"
    }

  ]


  return (
    <div id='topbar' className='topbar' >
      <div className='topbar--left'>
        <a href='#home' className='topbar--logo'><span>Morvarid</span> Mahmoudi far</a>
      </div>
      <div className='topbar--center'>
        <ul>
          {data.map(d => (
            <TopbarList title={d.title} active={d.id === item} setItem={setItem} id={d.id} address={d.address} />
          ))}

        </ul>

        {/* <ul>
          <li className='topbar--active'><a className='topbar--active' href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul> */}

      </div>
      <div className='topbar--right' >
        <div className='topbar--contact'>
          <a href='mailto:morvaridmahmoudi@gmail.com'><ion-icon name="mail-outline"></ion-icon></a>
          {/* <a href='https://api.whatsapp.com/send?phone+393202253374'><ion-icon name="logo-whatsapp"></ion-icon></a> */}
          <a href='#'><ion-icon name="logo-whatsapp"></ion-icon></a>
        </div>
        <div className={'topbar--hamburger ' + (menuOpen && "active")} onClick={() => setMenuOpen(!menuOpen)} >
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
        </div>
      </div>
    </div>
  )
}
