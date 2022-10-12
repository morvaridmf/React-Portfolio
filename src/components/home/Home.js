import React from 'react';
import "./home.scss";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/';


export default function Home() {
  return (
    <div className='home' id='home'>
      <div className='home--top'>
        <div className='home--text'>
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
        <div className='home--icon'>
          <a className='icon linkedin' href='https://www.linkedin.com/in/morvarid-mahmoudifar-4a840756/' target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
          <a className='icon github' href='https://github.com/morvaridmf?tab=repositories' target="_blank"><ion-icon name="logo-github"></ion-icon></a>
        </div>
      </div>
      <div className='home--arrow'>
        <a className='arrow' href="#about"><ion-icon name="chevron-down-outline" ></ion-icon></a>
      </div>
    </div>
  )
}
