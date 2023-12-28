import React from 'react'
import Upwork from '../../img/mongodb.png'
import Fiverr from '../../img/node.png'
import Shopify from '../../img/react.png'
import Facebook from '../../img/express.png'
import Amazon from '../../img/oauth.png'
import { Link } from 'react-scroll'
import { motion } from "framer-motion";


import './work.css'

const work = () => {
    return (
        <div className='works'>
            <div className='awesome'>
                <span>In-Demand Skillset</span>
                <span>MERN Stack </span>
                <spane>
                As a MERN stack developer, my industry-tailored <br/> tech stack, featuring MongoDB, Express.js, React, <br/>and Node.js, is finely tuned for optimal performance. <br/> I specialize in delivering purpose-driven solutions <br/> that precisely align with current industry demands.

                    </spane>

                <Link to="contact" smooth={true} spy={true}>
                    <button className="button s-button">Hire Me</button>
                </Link>
                <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
            </div>


            {/* Right Side*/}
            <motion.div
                initial={{ rotate: 45 }}
                whileInView={{ rotate: 0 }}
                viewport={{ margin: "-40px" }}
                transition={{ duration: 3.5, type: "spring" }}
                className='w-right'>
                <div className='w-mainCircle'>
                    <div className='secCircle'>
                        <img src={Upwork} alt='' />
                    </div>
                    <div className='secCircle'>
                        <img src={Fiverr} alt='' />
                    </div>
                    <div className='secCircle'>
                        <img src={Amazon} alt='' />
                    </div>
                    <div className='secCircle'>
                        <img src={Shopify} alt='' />
                    </div>
                    <div className='secCircle'>
                        <img src={Facebook} alt='' />
                    </div>
                </div>
                {/* Background Circles*/}
                <div className='w-backCircle blueCircle'></div>
                <div className='w-backCircle yellowCircle'></div>





            </motion.div>
        </div>
    )
}

export default work
