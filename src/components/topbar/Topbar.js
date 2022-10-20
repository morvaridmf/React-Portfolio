import React from 'react';
import "./topbar.scss"
import { useState, useContext } from "react"
import TopbarList from './TopbarList';
import Menu from '../menu/Menu';
import Button from "../Button/Button"
import { IoMdMail } from "react-icons/io"
import { BsWhatsapp } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdClose } from "react-icons/md"
import { ThemeContext } from "../../contex/ThemeContex"



export default function Topbar({ menuOpen, setMenuOpen }) {

  const { theme } = useContext(ThemeContext)


  const [item, setItem] = useState("Home");

  const hamburgerIcon = <GiHamburgerMenu
    onClick={() => setMenuOpen(!menuOpen)}
    className="icon" />;

  const closeIcon = <MdClose
    onClick={() => setMenuOpen(!menuOpen)}
    className="icon" />;

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
    <div id='topbar' className={theme === "dark" ? "topbar" : "topbar-light"} >
      <div className={theme === "dark" ? "topbar--left" : "topbar--left-light"}>
        <a href='#home' className='topbar--logo'><span>Morvarid</span> Mahmoudi far</a>
      </div>
      <div className={theme === "dark" ? "topbar--center" : "topbar--center-light"}>
        <ul>
          {data.map(d => (
            <TopbarList title={d.title} active={d.id === item} setItem={setItem} id={d.id} address={d.address} />
          ))}

        </ul>

      </div>
      <div className={theme === "dark" ? "topbar--right" : "topbar--right-light"} >
        <Button />
        <div className={theme === "dark" ? "topbar--contact" : "topbar--contact-light"}>
          <a href='mailto:morvaridmahmoudi@gmail.com'><IoMdMail className="icon" /></a>
          <a href='https://api.whatsapp.com/send?phone+393202253374'><BsWhatsapp className="icon" /></a>
        </div>
        <div className={theme === "dark" ? "topbar--hamburger" : "topbar--hamburger-light"}>
          {menuOpen ? closeIcon : hamburgerIcon}
          <div className={!menuOpen ? "topbar--menu" : "active"}>
            <Menu closeMenu={closeMenu} />
          </div>

        </div>
      </div>
    </div >
  )
}
