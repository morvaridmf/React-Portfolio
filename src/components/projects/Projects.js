import React from 'react';
import "./projects.scss"
import ProjectsList from './ProjectsList';
import { useState, useEffect } from 'react';
import { FirstThree, SecondThree, ThirdThree } from './Portfolio';
import back from "../../assets/back.jpg"

export default function Projects() {
  const [item, setItem] = useState("1");
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
    }
  ]

  useEffect(() => {
    switch (item) {
      case "1":
        setCard(FirstThree)
        break;
      case "2":
        setCard(SecondThree)
        break;
      case "3":
        setCard(ThirdThree)
        break;


      default: setCard(FirstThree)
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
              {/* <img src={d.image} alt='' /> */}
              <div className='project--item-image'>
                {/* <img src={back} /> */}
                <span>{d.image}</span>
                <a href={d.address} target="blank" ><p>{d.des}</p></a>

              </div>
              {/* <button><a href={d.address} target="blank" >GitHub</a></button> */}
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
