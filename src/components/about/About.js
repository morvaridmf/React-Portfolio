import React from 'react';
import "./about.scss"
import CV from "../../assets/cv-morvarid.pdf";
import pic from "../../assets/photo.jpeg"

export default function About() {
  return (
    <div className='about' id='about'>
      <div className='about--left'>
        <img src={pic} alt=""></img>

      </div>
      <div className='about--right'>
        <h1>About</h1>
        <p>Qui anim commodo officia sint voluptate culpa anim velit quis irure consequat officia ipsum fugiat. Enim deserunt qui do laborum ullamco dolor eiusmod occaecat et officia eu deserunt ex enim. Pariatur pariatur anim pariatur anim irure consequat laborum est duis aliquip fugiat id veniam ullamco. Dolore ipsum ad reprehenderit duis voluptate. Culpa consequat voluptate aliquip dolor et.</p>
        <button><a download="" href={CV}>Download CV</a></button>

        <div className='about--arrow'>
          <a className='arrow' href="#skills"><ion-icon name="chevron-down-outline" ></ion-icon></a>
        </div>
      </div>
    </div>
  )
}
