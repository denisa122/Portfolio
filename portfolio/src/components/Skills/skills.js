import React from 'react';
import './skills.css';

import codingSkill from "../../assets/skill1.png";
import personSkill from "../../assets/skill2.png";
import growSkill from "../../assets/skill4.png";

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>About me</span>
        <span className='skillDescription'>I am a team player, the kind of person who is always there to give a hand and who tries to help to the best of my abilities in every situation. My friends describe me as a cheerful, loyal person who always gives great advice and comes up with a crazy solution for everything!</span> /** Change this */
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={codingSkill} alt="coding icon" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Coding skills</h2>
                    <p>As an aspiring front-end developer, I have become familiar with the programming languages HTML, CSS and Javascript. Throughout my studies, 
                        I have also had experience with back-end development of projects using C, C# or Java as the programming language.</p>  /** Change this */
                </div>
            </div>
            <div className='skillBar'>
                <img src={personSkill} alt="person icon" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Personal skills</h2>
                    <p>I like to think that I am a person who knows how to communicate well, especially when working in a team made of people with different characters. Working on my previous projects has shown me that I can adapt quickly to change 
                        and I have no trouble making important decisions when I need to. I always strive for the best possible result and my strong will often pushes me out of my comfort zone.</p> /** Change this */
                </div>
            </div>
            <div className='skillBar'>
                <img src={growSkill} alt="progress icon" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>A work in progress</h2>
                    <p>I am currently taking a web development course, which I believe will help me improve my skills and gain new knowledge - therefore making me more confident in my front-end skills.
                        In the future, I would like to explore my artistic side more by, for example, taking an illustration course and later using it to create more unique web pages.</p> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills