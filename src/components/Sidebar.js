import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';

import LoginForm from './Auth/LoginForm'
import SignupForm from './Auth/SignupForm'
import Profile from './Profile/Profile'
import ProfileForm from './Profile/ProfileForm'

class SideBar extends Component {

    handleAuth(Component) {
        return this.props.token ? Component : <Redirect to='/login' />
    }

    handleIsAuth(Component) {
        if (this.props.token) {
            if (this.props.profile.location && this.props.profile.bio) {
                return <Redirect to ='/' />
            } else {
                return <Redirect to='/profile/edit' />
            }
        } else {
            return Component
        }
    }

    render() {
        return (
            <div>
                <Route path='(/|/profile)' exact render={() => (this.handleAuth(<Profile profile={this.props.profile} handleLogout={this.props.handleLogout}/>)) } />
                <Route path='/profile/edit' render={() => (this.handleAuth(<ProfileForm profile={this.props.profile} token={this.props.token} handleUserUpdate={this.props.handleUserUpdate} />)) } />
                <Route path='/login' render={() => (this.handleIsAuth(<LoginForm handleUserUpdate={this.props.handleUserUpdate}/>))} />
                <Route path='/signup' render={() => (this.handleIsAuth(<SignupForm handleUserUpdate={this.props.handleUserUpdate}/>))} />
            </div>
        )
    }
}

export default SideBar