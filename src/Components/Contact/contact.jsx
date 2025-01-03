import React, { useState, useContext } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


import { themeContext } from "../../Context";


const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();



    emailjs.sendForm('Yservice_isbdf2j', 'template_2nmf6mk', form.current, '89mY-CKrGBOfKj-9W')
      .then((result) => {
        console.log(result.text);
        setDone(true);
        form.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='contact-form'>
      <div className='w-left'>
        <div className='awesome'>
          <span style={{ color: darkMode ? 'white' : '' }}>Get
            In Touch</span>
          <span>Contact Me</span>
          <span style={{ fontSize: '20px' }}> I’d love to hear from you and explore how we can work together to create something amazing. Feel free to reach out and let’s connect! </span>
          <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
        </div>
      </div>
      <div className='c-right'>
        <form ref={form} onSubmit={sendEmail}>

          <input type="text" name="user_name" className="user" placeholder="Name" />
          <input type="email" name="user_email" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />


          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>

      </div>
    </div>
  )
}

export default Contact
