import React from 'react';
import "./projects.scss"

export default function Projects() {
  return (
    <div className='projects' id='projects'>
      <div className='projects--top'>
        <h1>Projects</h1>
      </div>
      <div className='projects--center'>
        <div className='projects--list'>
          <ul>
            <li className='active'>mory</li>
            <li>mARJAN</li>
            <li>lasse</li>
            <li>naralie</li>
          </ul>
        </div>
        <div className="projects--container">
          <div className="projects--item">
            <img src='https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png' alt='' />
            <p>hdshdkjsdhkshdkajahdkjad</p>

            <button>GitHub</button>
          </div>
          <div className="projects--item">
            <img src='https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png' alt='' />
            <p>hdshdkjsdhkshdkajahdkjad</p>
            <button>GitHub</button>
          </div> <div className="projects--item">
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
