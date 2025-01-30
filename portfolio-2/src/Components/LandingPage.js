import React, { useEffect, useState } from 'react';
import './landing.css';
import LinkedIn from '../Images/linkedin2.png';
import GitHub from '../Images/github.png';

function LandingPage() {
  const [showTags, setShowTags] = useState(false);

  useEffect(() => {
    setShowTags(true); // Set to true on mount
  }, 1000);

  return (
    <div className='main-overal-scroller'>
      <div>
        <div className='title-subtitle'>
          <div className='home4-title'>WELCOME TO MY PORTFOLIO</div>
          <div className='list-of-links'>
            <ul>
              <li><a href="#section-1"><img className='image-icon' src={LinkedIn} alt="LinkedIn" /></a></li>
              <li><a href="#section-2"><img className='image-icon' src={GitHub} alt="GitHub" /></a></li>
              <li><a href="#section-3" className='image-icon Portfolio'>V.10</a></li>
            </ul>
          </div>
          <div className='line-divider' />
          <div className='home4-sub-title'>
            <div>PRITESH PAREKH</div>
          </div>
        </div>

        {/* Tag List Animation - Now mounts immediately */}
        <div className={`tag-list ${showTags ? 'reveal' : ''}`}>
          {[{
            duration: 31902,
            direction: "normal",
            tags: ['Front-End', 'Back-End', 'Web Development', 'React.JS', 'UI/UX']
          }, {
            duration: 38520,
            direction: "reverse",
            tags: ['Java', 'Python', 'JavaScript', 'HTML & CSS', 'Animation', 'SQL']
          }, {
            duration: 34898,
            direction: "normal",
            tags: ['Project Management', 'Audit', 'Technical Oversight', 'Secure Programming', 'Best Practices']
          }, {
            duration: 33276,
            direction: "reverse",
            tags: ['HTML', 'CSS', 'React', 'Next.js']
          }, {
            duration: 31872,
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
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
