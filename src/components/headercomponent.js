import React, { Component } from 'react';

import { Link } from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top pb-2">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/NextPage2" className="nav-link">Page2</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/NextPage3" className="nav-link">Page3</Link>
                            </li>
                        </ul>
                    </div>   
                </nav> 
            </div>
        )
    }
}

export default Header;
