import React, { Component } from 'react';
import { Nav, NavbarBrand, NavItem } from 'react-bootstrap';
import styled from 'styled-components';
import NavLink from 'react-bootstrap/NavLink';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavBar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

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
                    <NavbarBrand href="/">Bootstrap 4 Life</NavbarBrand>
                    <NavbarToggle aria-controls="basic-navbar-nav" />
                    <NavbarCollapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavItem><NavLink href="/">Home</NavLink></NavItem>
                            <NavItem><NavLink href="/about">About</NavLink></NavItem>
                            <NavItem><NavLink href="/contact">Contact</NavLink></NavItem>
                        </Nav>
                    </NavbarCollapse>
                </NavBar>
            </Styles>
        );
    }
}


