import React from "react";
import Navbar from "../NavBar/navbar";
import Intro from "../Intro/intro"
import Skills from "../Skills/skills";
import Projects from "../Projects/projects";
import Experience from "../Experience/experience";
import Contact from "../Contact/contact";

const Frontpage = () => {
    return (
        <div>
            <Navbar/>
            <Intro/>
            <Skills/>
            <Projects/>
            <Experience/>
            <Contact/>
        </div>
    )
};

export default Frontpage;


