import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary fixed-top">
                <Link className="navbar-brand" exact to="/">Home</Link>
                <Link className="navbar-brand" to="/about">About</Link>
            </nav>
        )
    }
}
