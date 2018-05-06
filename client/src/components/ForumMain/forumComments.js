import React, { Component } from 'react';
import Moment from 'react-moment';

import './forumMain.css';
import { Col, Row } from '../../components/Grid';

class ForumComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.id,
          thumbsUp: this.props.thumbsUp,
          thumbsDown: this.props.thumbsDown,
          disabled: false,
          action: ''
        };
    };
        
    // registers a thumbs up and then disables both buttons
    UpVote = () => {
        this.setState({ 
            thumbsUp: this.state.thumbsUp + 1,
            disabled: true,
            action: 'liked'
        });
    };

    // registers a thumbs down and then disables both buttons
    DownVote = () => {
        this.setState({ 
            thumbsDown: this.state.thumbsDown + 1,
            disabled: true,
            action: 'disliked'
        });
    };

    render() {
        return (
        <Row className='forumMain-comments'>
            <Col size='md-2'>
                <div className='votingArea'>
                    <div><i className='fas fa-sort-up'></i></div>
                    <div className={
                        this.props.upVotes - this.props.downVotes > 0 ? 'positiveVotes' :
                        this.props.upVotes - this.props.downVotes < 0 ? 'negativeVotes' : 'neutralVotes'}>{this.props.upVotes - this.props.downVotes}</div>
                    <div><i className='fas fa-sort-down'></i></div>
                </div>
            </Col>
            <Col size='md-10'>
            <h4>Solution Provided By: {this.props.author}</h4>
            <h4><Moment fromNow>{new Date(this.props.postingDate)}</Moment></h4>
            <h4>{this.props.comment}</h4>
            {/* <button onClick={this.DownVote} className={this.state.action === 'disliked' ? 'action-item thumbs thumbs-down disliked' : 'action-item thumbs thumbs-down'}
                disabled={this.state.disabled === true ? 'true' : ''}>
                <i className='fas fa-chevron-circle-down'></i> {this.state.thumbsDown}
            </button>
            <button onClick={this.UpVote} className={this.state.action === 'liked' ? 'action-item thumbs thumbs-up liked' : 'action-item thumbs thumbs-up'}
                disabled={this.state.disabled === true ? 'true' : ''}>
                <i className='fas fa-chevron-circle-up'></i> {this.state.thumbsUp}
            </button> */}
            </Col>
        </Row>
        )
    }
};

export default ForumComments;