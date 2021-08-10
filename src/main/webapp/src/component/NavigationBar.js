import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class NavigationBar extends React.Component{
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
                    Project management System
                </Link>
                <Nav className="mr-auto">
                    <Link to={"/add"} className="nav-link">Add Project</Link>
                    <Link to={"/list"} className="nav-link">Projects List</Link>
                    <Link to={"/users"} className="nav-link">Users List</Link>
                </Nav>
            </Navbar>
        );
    }
}