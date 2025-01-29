import React, { useEffect, useRef, useState } from 'react';

import '../Home/home.css';
import LandingImage from '../Images/LandingPage2.jpg';

import LinkedIn from '../Images/linkedin2.png'
import GitHub from '../Images/github.png'

function Home() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(prev => !prev); // Toggle the state on click
    };

    const imageRef = useRef(null);

    useEffect(() => {
        const image = imageRef.current;
        if (!image) return;

        const duration = 5000; // 5 seconds
        const startScale = 1;
        const endScale = 1.5;
        let startTime = null;
        let animationFrame;

        const easeInOut = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        const animateZoom = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;

            if (progress < 1) {
                const scale = startScale + (endScale - startScale) * easeInOut(progress);
                image.style.transform = `scale(${scale})`;
                animationFrame = requestAnimationFrame(animateZoom);
            } else {
                image.style.transform = `scale(${endScale})`;
            }
        };

        animationFrame = requestAnimationFrame(animateZoom);

        return () => cancelAnimationFrame(animationFrame); // Cleanup on unmount
    }, []);

    return (
        <div className="home4-container">
            <div className="landing-image">
                <img ref={imageRef} className="landing-image-main" src={LandingImage} alt="Landing" />
            </div>
            <div>
                <div className='title-subtitle'>
                    <div className='home4-title'>
                        WELCOME TO MY PORTFOLIO
                    </div>
                    <div className='list-of-links'>
                        <ul>
                            <li><img className='image-icon' src={LinkedIn}/></li>
                            <li><img className='image-icon' src={GitHub}/></li>
                            <li className='image-icon Portfolio'>V1</li>
                        </ul>
                    </div>
                    <div className='line-divider' />
                    <div className='home4-sub-title'>
                        PRITESH PAREKH
                    </div>
                </div>

                {/* <div className={`Link-container ${isActive ? 'active' : ''}`}>
                    <a className='arrow' onClick={handleClick}>🔗</a>
                    <div>
                        <ul className='link-list'>
                            <li id='Github'><img className='icon-img' src={GitHub}/></li>
                            <li id='linkedIn'><img className='icon-img' src={LinkedIn}/></li>
                            <li id='Portfolio'><div className='icon-img v-1'><h1>V1.0</h1></div></li>
                        </ul>
                    </div>
                </div> */}

                {/* Tag List Animation */}
                <div className="Tag-list-container">
                    <div className="tag-list">
                        {/* Multiple loop sliders with adjusted durations */}
                        {[{
                            duration: 31902, // Slower
                            direction: "normal",
                            tags: ['Front-End', 'Back-End', 'Web Development', 'React.JS', 'UI/UX']
                        }, {
                            duration: 38520, // Slower
                            direction: "reverse",
                            tags: ['Java', 'Python', 'JavaScript', 'HTML & CSS', 'Animation', 'SQL']
                        }, {
                            duration: 34898, // Slower
                            direction: "normal",
                            tags: ['Porject Management', 'Audit', 'Technical Oversight', 'Secure Programming', 'Best Practises']
                        }, {
                            duration: 33276, // Slower
                            direction: "reverse",
                            tags: ['HTML', 'CSS', 'React', 'Next.js']
                        }, {
                            duration: 31872, // Slower
                            direction: "normal",
                            tags: ['Next.js', 'React', 'webdev', 'Typescript']
                        }].map((slider, index) => (
                            <div className="loop-slider" style={{ "--duration": `${slider.duration}ms`, "--direction": slider.direction }} key={index}>
                                <div className="inner">
                                    {slider.tags.concat(slider.tags).map((tag, i) => (
                                        <div className="tag" key={i}><span>#</span>{tag}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className="fade"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home