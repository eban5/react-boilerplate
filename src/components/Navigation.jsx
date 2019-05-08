import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css";

export default class Navigation extends Component {
    render() {
        return (
            <div id="dashboard">
                <div className="menu">
                    <NavLink exact to="/home">Home</NavLink>
                    <NavLink exact to="/about">About</NavLink>
                </div>

            </div>
        )
    }
}
