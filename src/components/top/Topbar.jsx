import React from 'react';
import Navbarr from '../navbar/Navbarr';
import './Topbar.scss';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import HomeIcon from '@material-ui/icons/Home';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import ComputerRoundedIcon from '@material-ui/icons/ComputerRounded';
export default function Topbar() {
    return (
        <div className="topbar" id="topbar">
            <div className="container">
                <a href="#about" className="item">
                    <HomeIcon className="icon"/>
                    <span></span>
                </a>
                <a href="#work" className="item">
                    <WorkRoundedIcon className="icon"/>
                    <span>What I do</span>
                </a>
                <a href="#education" className="item">
                    <SchoolRoundedIcon className="icon"/>
                    <span>Education</span>
                </a>
                <a href="#projects" className="item">
                    <ComputerRoundedIcon className="icon"/>
                    <span>Projects</span>
                </a>
                <a href="#contact" className="item">
                    <MailRoundedIcon className="icon"/>
                    <span>Contact</span>
                </a>
            </div>
        </div>
    )
}
