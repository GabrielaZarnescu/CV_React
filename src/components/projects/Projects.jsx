import React from 'react'
import './Projects.scss'
import TouchAppIcon from '@material-ui/icons/TouchApp';
import { Launch } from '@material-ui/icons';
export default function Projects() {
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <br/>
            <h2> Online Jewelry Store &nbsp; &nbsp;
                <a href="https://github.com/FlaviaZaharia/Selene-Jewelry-App">
                <TouchAppIcon/>
                </a>
                
            </h2>
            <span>Implemented using MERN Stack( MongoDB, Express, React, Node)</span>
            <br/>
            <h2>Java project for the Software Engineering Fundamentals Laboratory &nbsp; &nbsp;
                <a href="https://github.com/FlaviaZaharia/Proiect-FIS-JOSMA">
                <TouchAppIcon/>
                </a>
                
            </h2>
            <span>Implemented using Maven and JavaFx</span>
            
        </div>
    )
}
