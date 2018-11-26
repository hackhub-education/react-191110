import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ProfileAction extends Component {

    render() {
        return (
            <div className="profile-action">
                <Link className="btn-border space-top" to="/profile/edit">Edit profile</Link>
                <Link className="btn-border space-top" to="/login" onClick={this.props.logout}>Log out</Link>
            </div>
        )
    }
}

const mapDispatch = dispatch => ({
    logout: () => dispatch.user.logout(),
})

export default connect(null, mapDispatch)(ProfileAction)