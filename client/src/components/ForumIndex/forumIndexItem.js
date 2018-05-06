import React, { Component } from 'react';
import Moment from 'react-moment';

import './forumIndex.css';

class ForumListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.id
        };
    };

    render() {
        return (
        <li className='forumIndexItem animated fadeIn' id={this.props.id}>
            <a onClick={() => this.props.handlePageChange(`${this.props.id}`)}>
                <h4 className='forumIndex-title'>{this.props.title}</h4>
                <h5 className='forumIndex-byline'>
                    <span className='forumIndex-author'>Submitted By: {this.props.author}, <Moment fromNow>{this.props.date}</Moment></span>
                    <span className='answerCount-dynamic'>{this.props.answers === 0 ? 'Be the First to Solve!' : this.props.answers + ' Solutions Provided'}</span>
                </h5>
                <div className='clearfix'/>
                <h5 className='forumIndex-body'>{this.props.summary}</h5>   
            </a>
        </li>
        )
    }
};

export default ForumListItem;