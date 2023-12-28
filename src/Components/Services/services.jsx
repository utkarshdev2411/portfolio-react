import React from 'react'
import './services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/card'
import '../Card/card.css'
import { motion } from 'framer-motion'
// import { motion } from 'framer-motion/dist/framer-motion'

// import { useInsertionEffect } from 'react'




const services = () => {
    const transition = {
        duration: 1,
        type: "spring",
    };
    return (
        <div className='services'  >

            <div className='awesome' >
                <span>My Awesome</span>
                <span>services</span>
                <spane>
                Turning ideas into vibrant realities with creativity and dedication. <br/>Committed to exceeding expectations and making your vision shine!
                    .</spane>

                <a href=''><button className='button s-button'>Download CV</button></a>
                <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
            </div>

            <div className='cards'>
                <motion.div

                    initial={{ left: "25rem" }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}

                    style={{ left: '18rem'}}>
                    <Card 
                        emoji={HeartEmoji }
                        heading={"Extra Skills"}
                        detail={"CMS(content management system) ,Canva"}
                    /></motion.div>
                <motion.div

                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                    style={{ left: '-3rem', top: '12rem' }}><Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"HTML , Css ,  Javasacript , Bootstrap"}
                    /></motion.div>
                <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                    style={{ left: '14rem', top: '17rem' }}><Card
                        emoji={Humble}
                        heading={"MERN"}
                        detail={"MongoDB , Express , React , Node.js"}
                    /></motion.div>
                <div className='blur s-blur2' style={{ background: "var(--purple)" }}></div>
            </div>


        </div>

    )
}

export default services
