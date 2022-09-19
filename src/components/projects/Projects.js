import React from 'react';
import "./projects.scss"
import ProjectsList from './ProjectsList';
import { useState } from 'react';
import { FirstThree, SecondThree, ThirdThree } from './data';

export default function Projects() {
  const [item, setItem] = useState("mory");
  const [card, setCard] = useState([])

  const data = [
    {
      id: "1",
      title: <ion-icon name="radio-button-off-outline"></ion-icon>
    },
    {
      id: "2",
      title: <ion-icon name="radio-button-off-outline"></ion-icon>
    },
    {
      id: "3",
      title: <ion-icon name="radio-button-off-outline"></ion-icon>
    },
    {
      id: "4",
      title: <ion-icon name="radio-button-off-outline"></ion-icon>
    },
  ]
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
          <div className="projects--item">
            <img src='https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png' alt='' />
            <p>hdshdkjsdhkshdkajahdkjad</p>
            <button>GitHub</button>
          </div>

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
