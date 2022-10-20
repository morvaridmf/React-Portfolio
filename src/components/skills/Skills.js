import React, { useContext } from 'react';
import "./skills.scss";
import { SiRedux } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { DiMongodb } from "react-icons/di"
import { SiPostgresql } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"
import { AiFillHtml5 } from "react-icons/ai"
import { IoLogoJavascript } from "react-icons/io"
import { DiCss3 } from "react-icons/di"
import { SiSass } from "react-icons/si"
import { IoIosArrowDown } from "react-icons/io"
import { ThemeContext } from "../../contex/ThemeContex"


export default function Skills() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme === "dark" ? "skills" : "skills-light"} id='skills'>
      <div className={theme === "dark" ? "skills--top" : "skills--top-light"}>
        <h1>Tech Skills</h1>

      </div>
      <div className={theme === "dark" ? "skills--center" : "skills--center-light"}>
        <div className={theme === "dark" ? "left" : "left-light"}>
          <div>
            <AiFillHtml5 className={theme === "dark" ? "react-icons" : "react-icons-light"} />
            <p>Html</p>
          </div>
          <div>
            <IoLogoJavascript className={theme === "dark" ? "react-icons" : "react-icons-light"} />
            <p>JavaScript</p>
          </div>
          <div>
            <DiCss3 className={theme === "dark" ? "react-icons" : "react-icons-light"} />
            <p>Css</p>
          </div>
          <div>
            <SiSass className={theme === "dark" ? "react-icons" : "react-icons-light"} />
            <p>Sass</p>
          </div>
          <div>
            <FaReact className={theme === "dark" ? "react-icons" : "react-icons-light"} />
            <p>React</p>
          </div>
          <div>
            <SiRedux className={theme === "dark" ? "react-icons" : "react-icons-light"} />
            <p>Redux</p>
          </div>



        </div>
        <div className={theme === "dark" ? "right" : "right-light"}>
          <div>
            <FaNodeJs className={theme === "dark" ? "react-icons" : "react-icons-light"} />
            <p>Node.js</p>
          </div>
          <div>
            <SiExpress className={theme === "dark" ? "react-icons" : "react-icons-light"} />
            <p>Express.js</p>
          </div>
          <div>
            <DiMongodb className={theme === "dark" ? "react-icons" : "react-icons-light"} />
            <p>MongoDB</p>
          </div>
          <div>
            <SiPostgresql className={theme === "dark" ? "react-icons" : "react-icons-light"} />
            <p>PostgreSQL</p>
          </div>

        </div>

      </div>
      <div className={theme === "dark" ? "skills--bottom" : "skills--bottom-light"}>
        <div className={theme === "dark" ? "skills--arrow" : "skills--arrow-light"}>
          <a className='arrow' href="#projects"><IoIosArrowDown className="icon" /></a>
        </div>

      </div>
    </div>
  )
}
