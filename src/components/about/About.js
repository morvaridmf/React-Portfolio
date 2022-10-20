import React, { useContext } from 'react';
import "./about.scss"
import pic from "../../assets/photo.jpeg";
import { Zoom } from 'react-reveal';
import AboutInfo from './AboutInfo';
import { IoIosArrowDown } from "react-icons/io"
import { ThemeContext } from "../../contex/ThemeContex"


export default function About() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme === "dark" ? "about" : "about-light"} id='about'>
      <div className={theme === "dark" ? "about--top" : "about--top-light"}>
        <h1>About</h1>
      </div>
      <div className={theme === "dark" ? "about--center" : "about--center-light"}>

        <div className={theme === "dark" ? "about--left" : "about--left-light"}>
          <Zoom Left>
            <img src={pic} alt=""></img>
          </Zoom>
        </div>
        <div className={theme === "dark" ? "about--right" : "about--right-light"}>


          <div className={theme === "dark" ? "about--right-bottom" : "about--right-bottom-light"}>
            <div className={theme === "dark" ? "about--right-bottom-left" : "about--right-bottom-left-light"}>
              <AboutInfo />
            </div>
          </div>

        </div>
      </div>
      <div className={theme === "dark" ? "about--bottom" : "about--bottom-light"}>
        <div className={theme === "dark" ? "about--arrow" : "about--arrow-light"}>
          <a className='arrow' href="#skills"><IoIosArrowDown className='icon' /></a>
        </div>
      </div>
    </div>
  )
}
