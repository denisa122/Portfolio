import React from 'react';
import './skills.css';

import codingSkill from "../../assets/skill1.png";
import personSkill from "../../assets/skill2.png";
import growSkill from "../../assets/skill4.png";

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>About me</span>
        <span className='skillDescription'>
        Let me introduce myself!
        I hold an AP Degree in Computer Science, and I am currently on a path of furthering my knowledge through a Top Up Bachelor’s program in Web Development, at Erhvervsakademi SydVest. <br></br><br></br>
        My educational journey has been diverse: from delving into the subjects of both front-end and back-end development, to shaping seamless user experiences, to designing and implementing robust databases.
        </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={codingSkill} alt="coding icon" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Technical Proficiency</h2>
                    <p>
                    In my journey as a front-end developer, I’ve cultivated proficiency in core web technologies such as HTML, CSS and JavaScript. 
                    Furthermore, I've delved into back-end development, using languages like C#, Java, and PHP. My exposure to RESTful APIs, databases like MongoDB and SQL, 
                    and frameworks such as React.js and ASP.NET MVC has broadened my technical repertoire.
                    </p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={personSkill} alt="person icon" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Interpersonal Skills</h2>
                    <p>
                    Effective communication lies at the heart of successful collaboration, and I pride myself on my ability to foster meaningful connections within multidisciplinary teams. 
                    Adaptable by nature, I embrace change as an opportunity for growth and thrive in environments that demand quick decision-making and agile thinking.
                    I tackle every task with determination and a solution-oriented approach.
                    </p> 
                </div>
            </div>
            <div className='skillBar'>
                <img src={growSkill} alt="progress icon" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Continuous Growth and Development</h2>
                    <p>
                    My journey in web development is an ongoing evolution, marked by a continuous pursuit of growth and learning. 
                    Currently enrolled in a web development course, I'm eager to deepen my understanding and refine my skills, confident that each new challenge brings valuable insights and expertise.
                    </p> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills