import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../img/webdxd.png'

class Nav extends Component {
    render() {
        return (
            <nav className="nav-bar">
                <div className="container nav-container">
                    <ul>
                        <li><Link to="/"><img className="logo" src={logo} alt="webdxd" /></Link></li>
                        <li><Link to="/">Home</Link></li>                      
                    </ul>
                    <div>
                        {this.props.token ? <Link to="/profile"><img className="avatar-sm" src="img/avatar.jpg" alt="avatar" /></Link> : <Link to="/login">Login</Link>}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;