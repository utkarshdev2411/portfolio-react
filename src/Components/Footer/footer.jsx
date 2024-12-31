import React from 'react';
import './footer.css';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';

const footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt=''/>
        <div className='f-content'>
            <div className='f-icons'>
                <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                  <Insta color='white' size='3rem'/>
                </a>
                <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                  <Facebook color='white' size='3rem'/>
                </a>
                <a href='https://www.github.com' target='_blank' rel='noopener noreferrer'>
                  <Github color='white' size='3rem'/>
                </a>
            </div>
            <span>Email: utkarshdev2411@gmail.com</span>
        </div>
    </div>
  );
}

export default footer;