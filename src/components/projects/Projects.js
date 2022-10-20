import React from 'react';
import "./projects.scss"
import ProjectsList from './ProjectsList';
import { useState, useEffect } from 'react';
import { all, ReduxType, ReactNative, ReactProject } from './Portfolio';

export default function Projects() {
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
    <div className='projects' id='projects'>
      <div className='projects--top'>
        <h1>Projects</h1>
      </div>
      <div className='projects--center'>
        <div className='projects--list'>
          <ul>
            {data.map(d => (
              <ProjectsList id={d.id} active={d.id === item} setItem={setItem} title={d.title} />
            ))}

          </ul>
        </div>
        <div className="projects--container">

          {card.map(d => (
            <div className="projects--item">
              <div className='project--item-image'>
                <span>{d.image}</span>
                <a href={d.address} target="blank" ><p>{d.des}</p></a>

              </div>
              <button><a href={d.github} target="blank" >GitHub</a></button>
            </div>
          ))
          }

        </div>
      </div>
      <div className='projects--bottom'>
        <div className='projects--arrow'>
          <a className='arrow' href="#contact"><ion-icon name="chevron-down-outline" ></ion-icon></a>
        </div>

      </div>
    </div>
  )
}
