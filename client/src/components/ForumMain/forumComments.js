import React, { Component } from 'react';
import Moment from 'react-moment';
import API from '../../utils/API';

import './forumMain.css';
import { Col, Row } from '../../components/Grid';

class ForumComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.id,
          upVotes: this.props.upVotes,
          downVotes: this.props.downVotes,
          disabled: false
        };
    };
        
    // registers an upVote and disables both buttons
    UpVote = () => {
        if (!this.state.disabled) {
            API.upVote(this.props.questionId, this.props.commentId)
                .then(res => console.log(res))
                .catch(err => console.log(err));
            this.setState({ 
                upVotes: this.state.upVotes + 1,
                disabled: true
            });
        };
    };

    // registers a downVote and disables both buttons
    DownVote = () => {
        if (!this.state.disabled) {
            API.downVote(this.props.questionId, this.props.commentId)
                .then(res => console.log(res))
                .catch(err => console.log(err));
            this.setState({ 
                downVotes: this.state.downVotes + 1,
                disabled: true
            });
        };
    };

    render() {
        return (
            <Row className='forumMain-comments'>
                <Col size='sm-1'>
                    <div className='votingArea'>
                        <div onClick={this.UpVote}><i className='fas fa-sort-up'></i></div>
                        <div className={
                            this.state.upVotes - this.state.downVotes > 0 ? 'positiveVotes' :
                            this.state.upVotes - this.state.downVotes < 0 ? 'negativeVotes' : 'neutralVotes'}>{this.state.upVotes - this.state.downVotes}</div>
                        <div onClick={this.DownVote}><i className='fas fa-sort-down'></i></div>
                    </div>
                </Col>
                <Col size='sm-10' className='forumComment-details'>
                    <h4 className='forumComment-author'>Provided By: {this.props.author}</h4>
                    <h4 className='forumComment-date'><Moment fromNow>{new Date(this.props.postingDate)}</Moment></h4>
                    <h4 className='forumComment-solution'>{this.props.comment}</h4>
                </Col>
            </Row>
        );
    };
};

export default ForumComments;