import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import TweetList from './Tweets/TweetList'
import TweetPost from './Tweets/TweetPost'
import SideBar from './Sidebar'
import Nav from './Nav';

class Page extends Component {
    render() {
        let props = this.props
        return (
            <div>
                <Nav/>
                <div className="container">
                    <SideBar/>
                    <div className="col-3of5 bg-white">
                        {props.token ? <TweetPost/> : ''}
                        <TweetList/>
                    </div>
                </div>
            </div>

        );
    }
}


const mapState = state => ({
    token: state.user.token
})


export default withRouter(connect(mapState, null)(Page));