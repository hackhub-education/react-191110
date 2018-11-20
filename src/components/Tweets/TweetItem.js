import React, { Component } from 'react';
import moment from 'moment'

class TweetItem extends Component {
    render() {
        let author = this.props.value.author
        return (
            <div className="tweet">
                <div className="row">
                    <img className="avatar-sm" src={author.avatarUrl} alt="avatar" />
                    <h4><b>{author.name}</b></h4>
                    <h5>@{author.username}</h5>
                    <h5>{moment(this.props.value.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</h5>
                </div>
                <p>{this.props.value.content}
                    <br />
                    {this.props.value.imageUrl ? <img src={this.props.value.imageUrl} alt="tweet" /> : ''}
                </p>

            </div>
        );
    }
}

export default TweetItem;