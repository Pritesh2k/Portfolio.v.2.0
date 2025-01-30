import React, { useEffect, useRef, useState } from 'react';
import '../Home/home.css';
import LandingImage from '../Images/LandingPage2.jpg';
import LandingPage from '../Components/LandingPage';

function Home() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => setIsActive(prev => !prev); // Toggle the state on click

    const imageRef = useRef(null);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);

    useEffect(() => {
        const image = imageRef.current;
        if (!image) return;

        const duration = 4000; // 5 seconds
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

    useEffect(() => {
        let scrollY = 0;
        let isScrolling = false;

        const handleScroll = () => {
            if (!isScrolling) {
                isScrolling = true;
                requestAnimationFrame(() => {
                    const newScrollY = window.scrollY;

                    // Apply transformations to each section based on scroll position
                    if (section1Ref.current) {
                        section1Ref.current.style.transform = `translateY(${newScrollY * 0.5}px)`;
                    }

                    isScrolling = false;
                });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="home4-container">
            <div className="landing-image">
                <img ref={imageRef} className="landing-image-main" src={LandingImage} alt="Landing" />
            </div>
            <div className="section-1 section">
                <LandingPage />
            </div>
            
            {/* New Sections Below */}
            <div className="section-2 section">
                <h2>About Us</h2>
                <p>This is the About Us section. You can add content here.</p>
            </div>

            <div className="section-3 section">
                <h2>Our Services</h2>
                <p>This is the Our Services section. Add your service details here.</p>
            </div>

            <div className="section-4 section">
                <h2>Contact Us</h2>
                <p>This is the Contact Us section. You can include contact information here.</p>
            </div>

        </div>
    );
}

export default Home;