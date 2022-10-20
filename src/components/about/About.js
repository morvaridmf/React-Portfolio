import React from 'react';
import "./about.scss"
import pic from "../../assets/photo.jpeg";
import { Zoom } from 'react-reveal';
import AboutInfo from './AboutInfo';


export default function About() {


  return (
    <div className='about' id='about'>
      <div className='about--top'>
        <h1>About</h1>
      </div>
      <div className='about--center'>

        <div className='about--left'>
          <Zoom Left>
            <img src={pic} alt=""></img>
          </Zoom>
        </div>
        <div className='about--right'>


          <div className='about--right-bottom'>
            <div className='about--right-bottom-left'>
              <AboutInfo />
            </div>
          </div>

        </div>
      </div>
      <div className='about--bottom'>
        <div className='about--arrow'>
          <a className='arrow' href="#skills"><ion-icon name="chevron-down-outline" ></ion-icon></a>
        </div>
      </div>
    </div>
  )
}
