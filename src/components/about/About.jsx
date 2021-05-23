import React from 'react'
import './About.scss'
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
//import Image from 'react-bootstrap/Image'
import { init } from 'ityped';
import {useEffect,useRef} from 'react';
export default function About() {
    const textRef=useRef();
    useEffect( ()=>{
        init(textRef.current,{
            showCursor:false,
            strings: [" Computer Science Student"," Code Enthusiast", " and also a confectioner"],
        })
    },[])
    return (
        <div className="about" id="about">
            <div className="left">
                <br/>
                <br/>
                <div className="imgContainer">
                    <img src="assets/about.jpeg" rounded/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I am</h2>
                    <h1>Gabriela Zărnescu</h1>
                    <h3>
                        <span ref={textRef} />
                    </h3>
                </div>
            
            </div>
            
        </div>
    )
}
