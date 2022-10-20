import React, { useContext } from 'react';
import "./contact.scss";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../contex/ThemeContex"



export default function Contact() {
  const { theme } = useContext(ThemeContext)

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hyju9il', 'template_jy5y8at', form.current, 'UiTVDoA9Cq45y7MTM')
    e.target.reset()
  };
  return (
    <div className={theme === "dark" ? "contact" : "contact-light"} id='contact'>
      <div className={theme === "dark" ? "contact--top" : "contact--top-light"}>
        <h1>Contact</h1>
      </div>
      <div className={theme === "dark" ? "contact--bottom" : "contact--bottom-light"}>
        <form ref={form} onSubmit={sendEmail}>
          <div className={theme === "dark" ? "contact--name" : "contact--name-light"}>
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
