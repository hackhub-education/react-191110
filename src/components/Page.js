import React, { Component } from 'react';
import axios from 'axios';
import { baseUrl } from '../config'

import TweetList from './Tweets/TweetList'
import TweetPost from './Tweets/TweetPost'
import SideBar from './Sidebar'
import Nav from './Nav';

class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tweets: [],
            author: {
                avatarUrl: 'https://ucarecdn.com/8c34b406-c767-4858-91e2-cb1e45ad231f/',
                username: 'yan',
                name: 'Yan Hong',
            },
            profile: {},
            token: ''
        }
        this.handleNewPost = this.handleNewPost.bind(this)
        this.handleUserUpdate = this.handleUserUpdate.bind(this)
    }

    handleUserUpdate(user) {
        this.setState({
            ...user
        })
    }

    handleLogout() {
        this.setState({
            token: '',
            profile: {}
        })
    }

    componentDidMount() {
        axios.get(baseUrl + '/tweet')
            .then(res => {
                const tweets = res.data.tweets
                this.setState({ tweets })
            })
    }

    handleNewPost(newPost) {
        let tweets = this.state.tweets
        tweets.unshift(newPost)
        this.setState({
            tweets
        })
    }


    render() {
        return (
            <div>
                <Nav token={this.state.token} />
                <div className="container">
                    <SideBar profile={this.state.profile} handleUserUpdate={this.handleUserUpdate} handleLogout={this.handleLogout} token={this.state.token} />
                    <div className="col-3of5 bg-white">
                        {this.state.token ? <TweetPost handleNewPost={this.handleNewPost} token={this.state.token}  /> : ''}
                        <TweetList tweets={this.state.tweets} />
                    </div>
                </div>
            </div>

        );
    }
}

export default Page;