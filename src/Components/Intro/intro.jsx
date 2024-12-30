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
import Developer from '../../img/Developer.webp';

const Intro = () => {
    const transition = { duration:2, type: 'spring' ,bounce:0.3};
    const levitate = {
        y: [0, -10, 0], // Move up and down
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
        },
    };

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
                <motion.img
                    initial={{ right: '0%' }}
                    whileInView={{ right: '100%' }}
                    transition={transition}
                    src={Developer} alt=''
                />



                <motion.img
                    initial={{ top:'0%', right: '0%' }}
                    whileInView={{ right: '80%', top: '-10%' }}
                    transition={transition}
                    animate={levitate}
                    src={glassesimoji} alt=''
                />
                <motion.div
                    initial={{ right: "0" }}
                    whileInView={{ right: "25%" }}
                    transition={transition}
                    className="floating-div"
                    animate={levitate}

                >
                    <Floatingdiv image={crown} text1='Full-Stack' text2='Developer' />
                </motion.div>
                <motion.div
                    initial={{ right: "0%" ,top:'80%'}}
                    whileInView={{ right: "100%" }}
                    transition={transition}
                    animate={levitate}
                    className="floating-div"

                >
                    <Floatingdiv image={thumbup} text1='GenAI' text2='Developer' />
                </motion.div>
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div className='blur' style={{ background: '#C1F5FF', top: '17rem', height: '10rem', left: '-9rem' }}></div>
            </div>
        </div>
    );
}

export default Intro;
