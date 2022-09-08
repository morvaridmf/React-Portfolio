import React from 'react';
import "./contact.scss";
import { useRef } from 'react';
import emailjs from 'emailjs-com';


export default function Contact() {

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hyju9il', 'template_jy5y8at', form.current, 'UiTVDoA9Cq45y7MTM')
    e.target.reset()
  };
  return (
    <div className='contact' id='contact'>
      <div className='contact--top'>
        <h1>Contact</h1>
      </div>
      <div className='contact--bottom'>
        <form ref={form} onSubmit={sendEmail}>
          <div className='contact--name'>
            <input type="text" placeholder='Name' className='name' name='name' />
            <input type="email" placeholder='Email' className='email' name='email' />
          </div>
          <input type="text" placeholder='Subject' className='subject' name='subject' />
          <textarea type="text" placeholder='Message' className='message' name='message' />
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}
