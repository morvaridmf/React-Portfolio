import React from 'react';
import "./about.scss"
import CV from "../../assets/cv-morvarid.pdf";
import pic from "../../assets/photo.jpeg";
// import Fade from 'react-reveal/Fade';
import { Zoom } from 'react-reveal';
import AboutList from './AboutList';
import { useState, useEffect } from 'react';
import AboutInfo from './AboutInfo';
import AboutEducation from './AboutEducation';


export default function About() {
  // const [item, setItem] = useState("1");
  // const [setInfo] = useState("");

  // const data = [
  //   {
  //     id: "1",
  //     title: <ion-icon name="chevron-back-circle-outline"></ion-icon>
  //   },
  //   {
  //     id: "2",
  //     title: <ion-icon name="chevron-forward-circle-outline"></ion-icon>
  //   }
  // ]

  // useEffect(() => {
  //   switch (item) {
  //     case "1":
  //       setInfo(AboutInfo)
  //       break;
  //     case "2":
  //       setInfo(AboutEducation)

  //     default: setInfo(AboutInfo)

  //       break;
  //   }
  // }, [item])



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
          {/* <div className='about--right-top'>
            <ul>
              {data.map(d => (
                <AboutList id={d.id} active={d.id === item} setItem={setItem} title={d.title} />
              ))}
            </ul>
          </div> */}

          <div className='about--right-bottom'>
            <div className='about--right-bottom-left'>
              <AboutInfo />
            </div>
            {/* <div className='about--right-bottom-right'>
              <AboutEducation />
            </div> */}
            {/*<p>Qui anim commodo officia sint voluptate culpa anim velit quis irure consequat officia ipsum fugiat. Enim deserunt qui do laborum ullamco dolor eiusmod occaecat et officia eu deserunt ex enim. Pariatur pariatur anim pariatur anim irure consequat laborum est duis aliquip fugiat id veniam ullamco..</p>
            <button><a download="" href={CV}>Download CV</a></button>*/}
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
