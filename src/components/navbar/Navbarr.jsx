import React, {Component} from 'react'
import            './Navbar.scss'
import {Collapse,
        Navbar,
         NavbarToggler,
         Nav,
        NavItem,
        Container} from 'reactstrap';
class Navbarr extends Component {
    state = {
        isOpen: false 
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
render() {
    return (
        <div className="navbar" id="navbar">
            <Navbar  light expand="sm" className="navbar">
                <Container>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav  navbar>
                        <a href="#work">
                        <NavItem className="navigation">What I do</NavItem>
                        </a>
                        <a href="#education">
                        <NavItem className="navigation" >Education</NavItem>
                        </a>
                        <a href="#projects">
                        <NavItem className="navigation">Projects</NavItem>
                        </a>
                        <a href="#contact">
                        <NavItem className="navigation">Contact</NavItem>
                        </a>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
}
export default Navbarr;


