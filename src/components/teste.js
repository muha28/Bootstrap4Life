import React, { Component } from 'react';
import { Nav, NavbarBrand, NavItem, Button } from 'react-bootstrap';
import styled from 'styled-components';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavBar from 'react-bootstrap/Navbar';
import { NavLink, Route, } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';

const Styles = styled.div`
    .navbar{
        background-color: #000000;
    }
    .navbar-brand, .navbar-nav, .nav-link, .link, {
        color: white;
        margin: 10px;
        }
    .navbar-brand:hover{
        color:white;
    }
    }
`;

export default class TesteNavBar extends Component {
    render() {
        return (
            <Styles>
                <NavBar expand="lg">
                    <NavbarBrand href="/">Bootstrap 4 Life</NavbarBrand>
                    <NavbarToggle aria-controls="basic-navbar-nav" />
                    <NavbarCollapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Button variant="outline-light"><NavItem><NavLink exact to="/">Home</NavLink></NavItem></Button>
                            <Button variant="outline-light"><NavItem><NavLink exact to="/about" >About</NavLink></NavItem></Button>
                            <Button variant="outline-light"><NavItem><NavLink exact to="/contact">Contact</NavLink></NavItem></Button>
                        </Nav>

                    </NavbarCollapse>
                </NavBar>
                        <div className="content">
                            <Route path='/' exact={true} component={Home} />
                            <Route path='/about' component={About} />
                            <Route path='/contact' component={Contact} />
                        </div>
            </Styles>
        );
    }
}