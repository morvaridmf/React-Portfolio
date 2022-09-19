import React from 'react';
import "./skills.scss";

export default function Skills() {
  return (
    <div className='skills' id='skills'>
      <div className='skills--top'>
        <h1>Tech Skills</h1>

      </div>
      <div className='skills--center'>
        <div className='left'>
          <div>
            <ion-icon name="logo-html5"></ion-icon>
            <p>Html</p>
          </div>
          <div>
            <ion-icon name="logo-javascript"></ion-icon>
            <p>JavaScript</p>
          </div>
          <div>
            <ion-icon name="logo-css3"></ion-icon>
            <p>Css</p>
          </div>
          <div>
            <ion-icon name="logo-sass"></ion-icon>
            <p>Sass</p>
          </div>
          <div>
            <ion-icon name="logo-react"></ion-icon>
            <p>React</p>
          </div>
          <div>
            <ion-icon name="logo-react"></ion-icon>
            <p>Redux</p>
          </div>



        </div>
        <div className='right'>
          <div>
            <ion-icon name="logo-nodejs"></ion-icon>
            <p>Node.js</p>
          </div>
          <div>
            <ion-icon name="logo-nodejs"></ion-icon>
            <p>Express.js</p>
          </div>
          <div>
            <ion-icon name="logo-nodejs"></ion-icon>
            <p>MongoDB</p>
          </div>
          <div>
            <ion-icon name="logo-nodejs"></ion-icon>
            <p>PostgreSQL</p>
          </div>

        </div>

      </div>
      <div className='skills--bottom'>
        <div className='skills--arrow'>
          <a className='arrow' href="#projects"><ion-icon name="chevron-down-outline" ></ion-icon></a>
        </div>

      </div>
    </div>
  )
}
