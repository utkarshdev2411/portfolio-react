import React from 'react'
import './intro.css'
import Github from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"

import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/me-coding2.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Floatingdiv from '../FloatingDiv/floatingdiv'
import {motion} from 'framer-motion'
import { themeContext } from "../../Context";
import { Link } from "react-scroll";






const intro = () => {
    const transition={duration:2,type:'spring'}

    

    
    return (
        <div className='intro' id='intro'>
            <div className='i-left'>
                <div className='i-name'>
                <span  >Hy! I  Am</span>
                <span>Utkarsh Sharma</span>
                <span>Full stack developer with high level experience with multiple prjects to showcase my talents.</span>

                </div>
                <Link to="contact" smooth={true} spy={true}><button className='i-button button'>Hire me</button>
</Link>
                <div className='i-icons'>

                 <a href=''><img src={Github} /></a>
                 <a href=''><img src={LinkedIn}/></a>
                 <a href=''><img src={Instagram}/></a>
                    
                    
                    
                </div>
            </div>
            <div className='i-right'>
                <img src={Vector1} alt='' />
                <img src={Vector2} alt='' />
                <img src={boy} alt='' />
                <motion.img 
                initial={{left:'-36%'}}
                whileInView={{left:'-24%'}}
                transition={transition}
                src={glassesimoji} alt=''/>

                <motion.div 
                  initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
                style={{top: '-4%', left:'68%'}}><Floatingdiv image={crown} text1='Web' text2='Developer'/></motion.div>
                
                <motion.div
                 initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
                 style={{top: '18rem', left:'0rem'}}><Floatingdiv image={thumbup} text1='Full Stack' text2=''/></motion.div>
                
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div className='blur' style={{ background: '#C1F5FF',top:'17rem',height:'21rem',left:'-9rem'}}></div>

  
            
            </div>
         

        </div>
    )
}

export default intro
