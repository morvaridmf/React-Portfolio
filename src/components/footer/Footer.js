import React from 'react';
import "./footer.scss";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"


export default function Footer() {
  return (
    <div className='footer' id='footer'>
      <h3>Morvarid Mahmoudi far</h3>
      <div className='footer--icon'>
        <a className='icon linkedin' href='https://www.linkedin.com/in/morvarid-mahmoudifar-4a840756/' target="blank"><AiFillLinkedin></AiFillLinkedin></a>
        <a className='icon github' href='https://github.com/morvaridmf?tab=repositories' target="blank"><AiFillGithub></AiFillGithub></a>
      </div>

    </div>
  )
}
