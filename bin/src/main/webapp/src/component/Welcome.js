import React from 'react'
import {Jumbotron} from "react-bootstrap";

export default class Welcome extends React.Component{
    render() {
        return (
            <Jumbotron className="bg-dark text-white">
                <h1>Welcome Project Management System</h1>
                <p>
                    Welcome to my project Mr Silas , my name is Jerry Amvane and my student ID is 220010692.
                </p>
            </Jumbotron>
        )
    }
}