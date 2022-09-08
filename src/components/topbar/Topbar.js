import React from 'react';
import "./topbar.scss"

export default function Topbar() {
  return (
    <div className='topbar' id='topbar'>
      <div className='topbar--left'>
        <a href='#home' className='topbar--logo'><span>Morvarid</span> Mahmoudi far</a>
      </div>
      <div className='topbar--center'>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>

      </div>
      <div className='topbar--right'>
        <a href='mailto:morvaridmahmoudi@gmail.com'><ion-icon name="mail-outline"></ion-icon></a>
        {/* <a href='https://api.whatsapp.com/send?phone+393202253374'><ion-icon name="logo-whatsapp"></ion-icon></a> */}
        <a href='#'><ion-icon name="logo-whatsapp"></ion-icon></a>
      </div>
    </div>
  )
}
