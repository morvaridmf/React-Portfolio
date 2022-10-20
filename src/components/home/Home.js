import React, { useContext } from 'react';
import "./home.scss";
import Slide from 'react-reveal/Slide';
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { IoIosArrowDown } from "react-icons/io"
import Fade from 'react-reveal/';
import { ThemeContext } from "../../contex/ThemeContex"


export default function Home() {
  const { theme } = useContext(ThemeContext)


  return (
    <div className={theme === "dark" ? "home" : "home-light"} id='home'>
      <div className={theme === "dark" ? "home--top" : "home--top-light"}>
        <div className={theme === "dark" ? "home--text" : "home--text-light"}>
          <div>
            <Fade Left>
              <span />
              <h3>Hi, I'm Morvarid</h3>
            </Fade>
          </div>
          <div>
            <Slide right>
              <h1>Full stack JavaScript developer</h1>
            </Slide>
          </div>
        </div>
        <div className={theme === "dark" ? "home--icon" : "home--icon-light"} >
          <a href='https://www.linkedin.com/in/morvarid-mahmoudifar-4a840756/' target="blank" ><AiFillLinkedin className={theme === "dark" ? "icon" : "icon-light"} ></AiFillLinkedin></a>
          <a href='https://github.com/morvaridmf?tab=repositories' target="blank"><AiFillGithub className={theme === "dark" ? "icon" : "icon-light"} ></AiFillGithub></a>
        </div>
      </div>
      <div className={theme === "dark" ? "home--arrow" : "home--arrow-light"}>
        <a className='arrow' href="#about"><IoIosArrowDown className='icon' /></a>
      </div>
    </div>
  )
}
