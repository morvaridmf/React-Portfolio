import React from 'react';
import "./footer.scss";


export default function Footer() {
  return (
    <div className='footer' id='footer'>
      <h3>Morvarid Mahmoudi far</h3>
      <div className='footer--icon'>
        <a className='icon linkedin' href='https://www.linkedin.com/in/morvarid-mahmoudifar-4a840756/' target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
        <a className='icon github' href='https://github.com/morvaridmf?tab=repositories' target="_blank"><ion-icon name="logo-github"></ion-icon></a>
      </div>

    </div>
  )
}
