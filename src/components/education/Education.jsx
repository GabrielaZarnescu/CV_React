import React from 'react'
import './Education.scss'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { CheckOutlined } from '@material-ui/icons';
export default function Education() {
    return (
        <div className="education" id="education">
            <h1>Education and training</h1>
            <ul>
                <li>
                    <span>2018-present - Timisoara, Romania</span>
                    <h2>Bachelor Degree - Politehnica University of Timisoara, Faculty of Automation and Computer Science</h2>
                    <h3> Field of study:
                        <br/>
                        Information and Communication Technologies
                    </h3>
                </li>
                <br/><br/>
                <li>
                    <span>2014-2018 - Otelu Rosu, Romania</span>
                    <h2>Baccalaureate Diploma - "Liceul Bănățean" </h2>
                </li>
            </ul>
            <br/>
            <h1>Digital skills</h1>
            <ul className="skills">
                
                <li><CheckOutlined/>JavaScript, SCCS, HTML </li>
                <li><CheckOutlined/>Java</li>
                <li><CheckOutlined/>MERN Stack</li>
                <li><CheckOutlined/>C,C++</li>
            </ul>
        </div>
    )
}
