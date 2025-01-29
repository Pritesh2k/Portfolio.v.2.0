import React from 'react'
import './landing.css'

import LinkedIn from '../Images/linkedin2.png'
import GitHub from '../Images/github.png'

function LandingPage() {
  return (
    <div className='main-overal-scroller'>
                <div>
                    <div className='title-subtitle'>
                        <div className='home4-title'>
                            WELCOME TO MY PORTFOLIO
                        </div>
                        <div className='list-of-links'>
                            <ul>
                                <li><img className='image-icon' src={LinkedIn} /></li>
                                <li><img className='image-icon' src={GitHub} /></li>
                                <li className='image-icon Portfolio'>V1</li>
                            </ul>
                        </div>
                        <div className='line-divider' />
                        <div className='home4-sub-title'>
                            PRITESH PAREKH
                        </div>
                    </div>

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
  )
}

export default LandingPage