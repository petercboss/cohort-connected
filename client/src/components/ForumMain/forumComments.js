import React, { Component } from 'react';
import Moment from 'react-moment';

import './forumMain.css';

class ForumComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.id
        };
    };

    render() {
        return (
        <div className='forumMain-comments'>
            <h4>{this.props.author + ': ' + this.props.comment}</h4>
            {/* <button onClick={this.DownVote} className={this.state.action === 'disliked' ? 'action-item thumbs thumbs-down disliked' : 'action-item thumbs thumbs-down'}
                disabled={this.state.disabled === true ? 'true' : ''}>
                <i className='fas fa-chevron-circle-down'></i> {this.state.thumbsDown}
            </button>
            <button onClick={this.UpVote} className={this.state.action === 'liked' ? 'action-item thumbs thumbs-up liked' : 'action-item thumbs thumbs-up'}
                disabled={this.state.disabled === true ? 'true' : ''}>
                <i className='fas fa-chevron-circle-up'></i> {this.state.thumbsUp}
            </button> */}
        </div>
        )
    }
};

export default ForumComments;