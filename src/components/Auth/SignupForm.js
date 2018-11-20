import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { baseUrl } from '../../config'

class SignupForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            repeatPassword: '',
            validForm: false
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleRepeatPasswordChange = this.handleRepeatPasswordChange.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
    }


    formUpdate(updateValue) {
        let prevState = this.state

        // prevState = { username: '', password: '' }

        let formContent = {
            ...prevState,
            ...updateValue
        }

        // formContent = { username: 'new user', password: '', hello: 'world' } // pass by value es6

        formContent.validForm = formContent.username && formContent.password && formContent.password === formContent.repeatPassword
        this.setState(formContent)

    }

    handleUsernameChange(e) {
        this.formUpdate({ username: e.target.value })
    }

    handlePasswordChange(e) {
        this.formUpdate({ password: e.target.value })
    }

    handleRepeatPasswordChange(e) {
        this.formUpdate({ repeatPassword: e.target.value })
    }

    handleSignup() {
        let that = this
        axios.post(baseUrl + '/auth/signup', this.state)
            .then(res => {
                console.log(res.data)
                res.data.token && that.props.handleUserUpdate({
                    token: res.data.token,
                    profile: res.data.profile
                })
            })
    }

    render() {
        return (
            <div className="col-2of5 bg-white profile user-auth">
                <h3>Log in to Web Tweet</h3>
                <form id="signup-form">
                    <input className="input-auth" type="text" placeholder="Username" onChange={this.handleUsernameChange} />
                    <input className="input-auth" type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                    <input className="input-auth" type="password" placeholder="Repeat password" onChange={this.handleRepeatPasswordChange} />
                    <button className="btn-primary" type="button" onClick={this.handleSignup} disabled={this.state.validForm ? '' : 'disabled'}>Sign up</button>
                </form>
                <h6 className="">Have an account? <Link to="/login">Log in</Link></h6>
            </div>
        )
    }
}

export default SignupForm