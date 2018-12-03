import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactFilestack from 'filestack-react';

class TweetPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ''
        }
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handlePost = this.handlePost.bind(this)
        this.handleImage = this.handleImage.bind(this)
    }

    handleTextChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    handlePost() {
        this.props.addTweet({...this.state, token: this.props.token})
        this.setState({
            content: '',
            imageUrl: ''
        })
    }

    handleImage(res) {
        this.setState({
            imageUrl: res.filesUploaded[0].url
        })
    }

    render() {
        return (
            <div className="tweet">
                <form action="#">
                    <div className="row">
                        <img className="avatar-sm v-top" src={this.props.profile.avatarUrl} alt="avatar" />
                        <textarea className="input-tweet" placeholder="What's up?" onChange={this.handleTextChange} value={this.state.content}></textarea>
                    </div>
                    <div className="row tweet-actions"> 
                        <div>
                        <ReactFilestack
                            apikey="A08VS2cspQalbXwHGF9Ewz"
                            onSuccess={this.handleImage}
                            render={({ onPick }) => (
                                <button className="btn-clear" type="button" onClick={ onPick }>
                                    <i className="far fa-image"></i>
                                </button>
                              )}
                        />
                         { this.state.imageUrl && <img className="upload-sm" src={this.state.imageUrl} alt="thumb-img" />}
                        </div>
                        <button className="btn-primary" onClick={this.handlePost} type="button">Post</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapState = state => ({
    token: state.user.token,
    profile: state.user.profile
})

const mapDispatch = dispatch => ({
    addTweet: (data) => dispatch.tweets.addData(data)
})

export default connect(mapState, mapDispatch)(TweetPost);