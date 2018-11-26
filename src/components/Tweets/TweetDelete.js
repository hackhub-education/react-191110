import React, { Component } from 'react';
import { connect } from 'react-redux'

class TweetDelete extends Component {

    handleDelete() {
        this.props.removeData({ id: this.props._id, token: this.props.token})
    }

    render() {
        return (
            <button onClick={this.handleDelete.bind(this)} className="btn-clear tweet-del"><i className="far fa-trash-alt"></i></button>
        );
    }
}

const mapState = state => ({
    token: state.user.token,
})

const mapDispatch = dispatch => ({
    removeData: (data) => dispatch.tweets.removeData(data)
})

export default connect(mapState, mapDispatch)(TweetDelete);