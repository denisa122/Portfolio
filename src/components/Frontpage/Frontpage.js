import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../NavBar/navbar";
import Intro from "../Intro/intro";
import Skills from "../Skills/skills";
import Projects from "../Projects/projects";
import Experience from "../Experience/experience";
import Contact from "../Contact/contact";

const Frontpage = () => {
    const location = useLocation();
    const projectsRef = useRef(null);

    useEffect(() => {
        if (location.state && location.state.scrollPosition === 'projects') {
            projectsRef.current.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo(0, 0);
        }
    }, [location.state]);

    return (
        <div>
            <Navbar/>
            <Intro/>
            <Skills/>
            <div ref={projectsRef}>
                <Projects />
            </div>
            <Experience/>
            <Contact/>
        </div>
    );
};

export default Frontpage;