import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import TweetItem from './TweetItem';

class TweetList extends Component {
    componentDidMount() {
        this.props.loadData()
    }

    render() {
        let tweets = this.props.tweets
        let that = this
        let myTweets = []
        tweets.forEach(tweet => {
            if (tweet.author._id === that.props.profile._id) {
                myTweets.push(tweet)
            }
        });

        return (
            <div>
                <Route path='/profile' render={() => myTweets.map(tweet => <TweetItem value={tweet} key={tweet._id} />)}/>
                <Route path='(/|/login|/signup)' exact render={() => this.props.tweets.map(tweet => <TweetItem value={tweet} key={tweet._id} />)} />
            </div>
        );
    }
}

const mapState = state => ({
    tweets: state.tweets,
    profile: state.user.profile
})

const mapDispatch = dispatch => ({
    loadData: () => dispatch.tweets.loadData()
})

export default withRouter(connect(mapState, mapDispatch)(TweetList));