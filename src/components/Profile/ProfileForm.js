import React, { Component } from 'react';
import axios from 'axios';
import { baseUrl } from '../../config'
import { Link, Redirect } from 'react-router-dom'

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
        let that = this
        axios.put(baseUrl + '/profile', this.state, {
            headers: {
                Authorization: 'Bearer ' + this.props.token
            }
        }).then(res => {
            that.props.handleUserUpdate({profile: res.data.profile})
            that.setState({
                isSaved: true
            })
        })
    }

    render() {
        return (
            <div className="col-2of5 bg-white">
                <form className="profile" action="profile.html">
                    <div className="relative img-edit">
                        <img className="avatar" src={this.state.avatarUrl} alt="avatar" />
                        <input className="hidden" type="file" />
                        <img className="avatar-upload" src="img/upload.png" alt="upload-img" />
                    </div>
                    <input className="input-profile" type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="Full name" />
                    <h5>@{this.props.username}</h5>
                    <input className="input-profile" type="text" value={this.state.location} onChange={this.handleLocationChange} placeholder="Location" />
                    <textarea className="input-profile" placeholder="Personal description" value={this.state.bio} onChange={this.handleBioChange}></textarea>
                    {this.state.isSaved ? <Redirect to="/profile" /> : <button className="btn-primary space-top" onClick={this.saveProfile} type="button">Save</button>}
                    <Link to="/profile"><button className="btn-border space-top" type="button">Cancel</button></Link>
                </form>
            </div>
        )
    }
}

export default ProfileForm






