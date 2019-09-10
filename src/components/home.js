import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="container">

                <h1>ola</h1>
                <Link to="/about">sobre</Link>
            </div>

        );
    }
}
