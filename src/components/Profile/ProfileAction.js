import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileAction extends Component {

    render() {
        return (
            <div className="profile-action">
                <Link className="btn-border space-top" to="/profile/edit">Edit profile</Link>
                <Link className="btn-border space-top" to="/login" onClick={this.props.handleLogout}>Log out</Link>
            </div>
        )
    }
}

export default ProfileAction