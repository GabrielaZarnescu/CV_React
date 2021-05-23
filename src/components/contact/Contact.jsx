import React from 'react'
import './Contact.scss'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import {useEffect,useRef,useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
export default function Contact() {
    
    return (
        <div className="contact" id="contact">
            <div className="left">
                <MailOutlineIcon className="icon"/>
            </div>
            <div className="right">
            <Container>
                <Row>
                    <Col>
                        <h1> Contact</h1>
                        <span> Phone number: <br/> (+40)758566545</span>
                        <br/>
                        <br/>
                        <span> E-mail: <br/>zarnescu_gabriela@yahoo.com</span>
                        <br/>
                        <br/>
                        <span> 
                            <a href="https://web.facebook.com/gabrielaazarnescu/">
                                <FacebookIcon className="icon" fontSize="large"/>
                            </a>
                        </span>
                    </Col>
                    
                </Row>
            </Container>
            </div>
        </div>
    )
}
