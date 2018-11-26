import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class ProfileForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatarUrl: props.profile.avatarUrl,
            name: props.profile.name,
            bio: props.profile.bio,
            location: props.profile.location,
            isSaved: false
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleBioChange = this.handleBioChange.bind(this)
        this.saveProfile = this.saveProfile.bind(this)
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleLocationChange(e) {
        this.setState({
            location: e.target.value
        })
    }

    handleBioChange(e) {
        this.setState({
            bio: e.target.value
        })
    }

    saveProfile() {
        this.props.updateProfile({
            token: this.props.token,
            profile: this.state,
            history: this.props.history
        })
    }

    render() {
        let profile = this.props.profile
        return (
            <div className="col-2of5 bg-white">
                <form className="profile" action="profile.html">
                    <div className="relative img-edit">
                        <img className="avatar" src={this.state.avatarUrl} alt="avatar" />
                        <input className="hidden" type="file" />
                        <img className="avatar-upload" src="img/upload.png" alt="upload-img" />
                    </div>
                    <input className="input-profile" type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="Full name" />
                    <h5>@{profile.username}</h5>
                    <input className="input-profile" type="text" value={this.state.location} onChange={this.handleLocationChange} placeholder="Location" />
                    <textarea className="input-profile" placeholder="Personal description" value={this.state.bio} onChange={this.handleBioChange}></textarea>
                    {this.state.isSaved ? <Redirect to="/profile" /> : <button className="btn-primary space-top" onClick={this.saveProfile} type="button">Save</button>}
                    <Link to="/profile"><button className="btn-border space-top" type="button">Cancel</button></Link>
                </form>
            </div>
        )
    }
}

const mapState = state => ({
    profile: state.user.profile,
    token: state.user.token
})

const mapDispatch = dispatch => ({
    updateProfile: (user) => dispatch.user.updateProfile(user)
})

export default withRouter(connect(mapState, mapDispatch)(ProfileForm));






