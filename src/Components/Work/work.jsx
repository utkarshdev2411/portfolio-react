import React from 'react'
import Upwork from '../../img/mongodb.png'
import Fiverr from '../../img/node.png'
import Shopify from '../../img/react.png'
import Facebook from '../../img/express.png'
import Amazon from '../../img/oauth.png'
import { Link } from 'react-scroll'
import { motion } from "framer-motion";
import chatgpt from '../../img/Skills/chatgpt .png'


import './work.css'

const work = () => {
    return (
        <div className='works'>
            <div className='work-class'>
                <span>In-Demand Skillset</span>
                <span>MERN Stack  </span>
                <span>Generative AI </span>

                <spane>
                    <span>
                        As a Full-stack Developer and GenAI Specialist, my industry-tailored tech stack, including MongoDB, Express.js, React, Node.jsis optimized for high performance and scalability. I specialize in building purpose-driven solutions, leveraging cutting-edge technologies like Generative AI, Langchain, and RESTful APIs, to deliver innovative, future-ready applications that align with the latest industry demands.
                    </span>


                </spane>

                <Link to="contact" smooth={true} spy={true}>
                    <button className="button s-button">Hire Me</button>
                </Link>
                <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
            </div>

            <div className='rotator'>
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
                            <img src={chatgpt} alt='' />
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


            {/* Right Side*/}

        </div>
    )
}

export default work
