import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Work.scss'
import LocationOnIcon from '@material-ui/icons/LocationOn';
export default function Work() {
    return (
        <div className="work" id="work">
            <div className="left">
                <h2> Professional Experience</h2>
                <br/>
                <ul>
                    <li>
                        <span>02/2021-present - Otelu Rosu, Romania</span>
                        <h3>Manager - SC Delicatesele Gabrielei SRL</h3>
                    </li>
                    <br/>
                    <li>
                        <span>02/2021-present - Otelu Rosu, Romania</span>
                        <h3>Confectioner - SC Delicatesele Gabrielei SRL</h3>
                    </li>
                </ul>

            </div>
            <div className="right">
            </div>
        </div>
    )
}
