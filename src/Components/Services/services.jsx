import React from 'react'
import './services.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import skillsData from './skills.json'

const Services = () => {
    const transition = {
        duration: 0.2,
        type: "spring",
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                duration: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className='services' ref={ref}>
            <div className='awesome'>
                <span>Technical</span>
                <span>Experience</span>
                <a href=''><button className='button s-button'>Download CV</button></a>
            </div>
            {/* <div className='blur s-blur2' style={{ background: "var(--purple)" }}></div> */}
            <motion.div 
                className='cards'
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {skillsData.skills.map(skill => (
                    <motion.div 
                        key={skill.id} 
                        className='card'
                        whileHover={{ scale: 1.05 }}
                        transition={transition}
                        variants={cardVariants}
                    >
                        <img src={skill.path} alt={skill.placeholder} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Services