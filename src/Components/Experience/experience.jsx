import React, { useEffect, useRef } from 'react';
import './experience.css';

const Experience = () => {
    const experienceRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const children = entry.target.querySelectorAll('.achievement');
                    if (entry.isIntersecting) {
                        children.forEach((child) => child.classList.add('active'));
                    } else {
                        children.forEach((child) => child.classList.remove('active'));
                    }
                });
            },
            { threshold: 0.2 } // Trigger when 20% of the component is visible
        );

        if (experienceRef.current) {
            observer.observe(experienceRef.current);
        }

        return () => {
            if (experienceRef.current) {
                observer.unobserve(experienceRef.current);
            }
        };
    }, []);

    return (
        <div className='experience' id='experience' ref={experienceRef}>
            <div className='achievement'>
                <div className='circle'>3+</div>
                <span>Years</span>
                <span>
                    <strong>Experience</strong>
                </span>
            </div>

            <div className='achievement'>
                <div className='circle'>25+</div>
                <span>Completed</span>
                <span>
                    <strong>Projects</strong>
                </span>
            </div>

            <div className='achievement'>
                <div className='circle'>7+</div>
                <span>Collaborated</span>
                <span>Projects</span>
            </div>
            <div className='achievement'>
                <div className='circle'>8+</div>
                <span>Hackathons</span>
                <span>Particiapted</span>
            </div>
        </div>
    );
};

export default Experience;
