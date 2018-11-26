import React, { Component } from 'react';
import moment from 'moment'
import { Route } from 'react-router-dom'
import TweetDelete from './TweetDelete';

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
                    <Route path='/profile' render={() => <TweetDelete _id={this.props.value._id} />} />
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