import React, { Component } from 'react';
import { Nav, NavbarBrand, NavItem } from 'react-bootstrap';
import styled from 'styled-components';
import NavLink from 'react-bootstrap/NavLink';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavBar from 'react-bootstrap/Navbar';
import { Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';

const Styles = styled.div`
    .navbar{
        background-color: #000000;
    }

    .navbar-brand, .navbar-nav, .nav-link, .link{
        color: white;

        &:hover{
            color: red;
        }
    }
`;

export default class NavigationBar extends Component {
    render() {
        return (
            <Styles>
                <NavBar expand="lg">
                    <NavbarBrand><NavLink to="/">Bootstrap 4 Life</NavLink></NavbarBrand>
                    <NavbarToggle aria-controls="basic-navbar-nav" />
                    <NavbarCollapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavItem><NavLink to="/">Home</NavLink></NavItem>
                            <NavItem><NavLink to="/about">About</NavLink></NavItem>
                            <NavItem><NavLink to="/contact">Contact</NavLink></NavItem>
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


