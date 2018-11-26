import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

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
                        {this.props.token ? <Link to="/profile"><img className="avatar-sm" src={this.props.profile.avatarUrl} alt="avatar" /></Link> : <Link to="/login">Login</Link>}
                    </div>
                </div>
            </nav>
        );
    }
}

const mapState = state => ({
    profile: state.user.profile,
    token: state.user.token
})


export default withRouter(connect(mapState, null)(Nav));