import React from 'react';
import "./topbar.scss"
import { useState } from "react"
import TopbarList from './TopbarList';
import Menu from '../menu/Menu';




export default function Topbar({ menuOpen, setMenuOpen }) {

  const [item, setItem] = useState("Home");

  const hamburgerIcon = <ion-icon name="menu-outline"
    onClick={() => setMenuOpen(!menuOpen)}
    className="topbar--hamburger-icon" />;

  const closeIcon = <ion-icon name="close-outline"
    onClick={() => setMenuOpen(!menuOpen)}
    className="topbar--hamburger-icon" />;

  const closeMenu = () => {
    setMenuOpen(false)
  }

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

      </div>
      <div className='topbar--right' >
        <div className='topbar--contact'>
          <a href='mailto:morvaridmahmoudi@gmail.com'><ion-icon name="mail-outline"></ion-icon></a>
          <a href='https://api.whatsapp.com/send?phone+393202253374'><ion-icon name="logo-whatsapp"></ion-icon></a>
        </div>
        <div className=' topbar--hamburger'>
          {menuOpen ? closeIcon : hamburgerIcon}
          <div className={!menuOpen ? "topbar--menu" : "active"}>
            <Menu closeMenu={closeMenu} />
          </div>

        </div>
      </div>
    </div >
  )
}
