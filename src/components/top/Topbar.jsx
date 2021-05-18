import React from 'react';
import './Topbar.scss';
import HomeIcon from '@material-ui/icons/Home'
export default function Topbar() {
    return (
        <div className="topbar" id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#about" className="logo">
                        <HomeIcon/>
                    </a>
                </div>
                <div className="right">

                </div>
            </div>
        </div>
    )
}
