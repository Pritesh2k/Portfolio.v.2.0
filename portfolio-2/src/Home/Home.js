import React, { useEffect, useRef, useState } from 'react';

import '../Home/home.css';
import LandingImage from '../Images/LandingPage2.jpg';

import LandingPage from '../Components/LandingPage';

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
                <img className="landing-image-main" src={LandingImage} alt="Landing" />
            </div>
            <div>
                <LandingPage />
            </div>
        </div>
    );
}

export default Home