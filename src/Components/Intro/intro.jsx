import React from 'react';
import './intro.css';
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/me-coding2.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Floatingdiv from '../FloatingDiv/floatingdiv';
import { motion } from 'framer-motion';
import { Link } from "react-scroll";

const Intro = () => {
    const transition = { duration: 2, type: 'spring' };

    return (
        <div className='intro' id='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span>Hello! I am</span>
                    <span>Utkarsh Sharma</span>
                    <span>Highly skilled Full Stack Developer and GenaAI expert.</span>
                </div>
                <Link to="contact" smooth={true} spy={true}>
                    <button className='i-button button'>Hire me</button>
                </Link>
                <div className='i-icons'>
                    <a href='https://github.com/utkarshdev2411'><img src={Github} alt="GitHub" /></a>
                    <a href='https://www.linkedin.com/in/utkarshdev2411/'><img src={LinkedIn} alt="LinkedIn" /></a>
                    <a href='https://www.instagram.com/utkarshdev2411/'><img src={Instagram} alt="Instagram" /></a>
                </div>
            </div>

            <div className='i-right'>
                <div className='i-vector'>
                <img src={Vector1} alt='' />
                <img src={Vector2} className='vector2' alt='' />
                <img src={boy} alt='' />
                </div>
                
            

                    {/* <motion.img 
                        initial={{ right: '0%' }}
                        whileInView={{ left: '40%' }}
                        transition={transition}
                        src={glassesimoji} alt=''
                    />
                <motion.div 
                    initial={{ left: "100%" }}
                    whileInView={{ left: "80%" }}
                    transition={transition}
                    className="floating-div"
                    
                >
                    <Floatingdiv image={crown} text1='Full-Stack' text2='Developer' />
                </motion.div>
                <motion.div
                    initial={{ left: "100%" }}
                    whileInView={{ left: "50%" }}
                    transition={transition}
                    className="floating-div"
                    
                >
                    <Floatingdiv image={thumbup} text1='Generative AI' text2='Developer' />
                </motion.div> */}
                {/* <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div className='blur' style={{ background: '#C1F5FF', top: '17rem', height: '21rem', left: '-9rem' }}></div> */}
            </div>
        </div>
    );
}

export default Intro;
