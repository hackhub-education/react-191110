import React, { Component } from 'react';
import { connect } from 'react-redux'

class TweetPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ''
        }
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handlePost = this.handlePost.bind(this)
    }

    handleTextChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    handlePost() {
        this.props.addTweet({content: this.state.content, token: this.props.token})
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div className="tweet">
                <form action="#">
                    <div className="row">
                        <img className="avatar-sm v-top" src="img/avatar.jpg" alt="avatar" />
                        <textarea className="input-tweet" placeholder="What's up?" onChange={this.handleTextChange} value={this.state.content}></textarea>
                    </div>
                    <div className="row tweet-actions">
                        <input className="hidden" type="file" />
                        <button className="btn-clear" type="button"><i className="far fa-image"></i></button>
                        <button className="btn-primary" onClick={this.handlePost} type="button">Post</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapState = state => ({
    token: state.user.token
})

const mapDispatch = dispatch => ({
    addTweet: (data) => dispatch.tweets.addData(data)
})

export default connect(mapState, mapDispatch)(TweetPost);