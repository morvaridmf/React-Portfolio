import React from 'react';
import "./projects.scss"
import ProjectsList from './ProjectsList';
import { useState, useEffect, useContext } from 'react';
import { all, ReduxType, ReactNative, ReactProject } from './Portfolio';
import { IoIosArrowDown } from "react-icons/io"
import { ThemeContext } from "../../contex/ThemeContex"


export default function Projects() {
  const { theme } = useContext(ThemeContext)

  const [item, setItem] = useState("1");
  const [card, setCard] = useState([])

  const data = [
    {
      id: "1",
      title: "All"
    },
    {
      id: "2",
      title: "React"
    },
    {
      id: "3",
      title: "React-Native"
    },
    {
      id: "4",
      title: "Redux / TypeScript"
    }
  ]

  useEffect(() => {
    switch (item) {
      case "1":
        setCard(all)
        break;
      case "2":
        setCard(ReactProject)
        break;
      case "3":
        setCard(ReactNative)
        break;
      case "4":
        setCard(ReduxType)
        break;


      default: setCard(all)
        break;
    }

  }, [item])

  return (
    <div className={theme === "dark" ? "projects" : "projects-light"} id='projects'>
      <div className={theme === "dark" ? "projects--top" : "projects--top-light"}>
        <h1>Projects</h1>
      </div>
      <div className={theme === "dark" ? "projects--center" : "projects--center-light"}>
        <div className={theme === "dark" ? "projects--list" : "projects--list-light"}>
          <ul>
            {data.map(d => (
              <ProjectsList id={d.id} active={d.id === item} setItem={setItem} title={d.title} />
            ))}

          </ul>
        </div>
        <div className={theme === "dark" ? "projects--container" : "projects--container-light"}>

          {card.map(d => (
            <div className={theme === "dark" ? "projects--item" : "projects--item-light"}>
              <div className={theme === "dark" ? "project--item-image" : "project--item-image-light"}>
                <span >{d.image}</span>
                <a href={d.address} target="blank" ><p>{d.des}</p></a>
              </div>
              <button><a href={d.github} target="blank" >GitHub</a></button>
            </div>
          ))
          }

        </div>
      </div>
      <div className={theme === "dark" ? "projects--bottom" : "projects--bottom-light"}>
        <div className={theme === "dark" ? "projects--arrow" : "projects--arrow-light"}>
          <a className='arrow' href="#contact"><IoIosArrowDown className='icon' /></a>
        </div>

      </div>
    </div>
  )
}
