import React, { Component } from 'react';
import Moment from 'react-moment';

import './forumList.css';

class ForumSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.id,
        };
    }
  
    render() {
        console.log(this.props.answers)
        return (
        <li className='myQuestions-listed-items' id={this.props.id}>
            <a onClick={() => this.props.handlePageChange(`${this.props.id}`)}>
                <h4 className='forum-sidebar-title'>{this.props.title}</h4>
                <div className='col-md-12 forum-activity'>
                    <div className='action-item comment'><i className='fas fa-comment'></i>&nbsp;{this.props.answers} Answers</div>
                </div>
                <div className='forum-date'><Moment fromNow>{new Date(this.props.date)}</Moment></div>
                <div className='clearfix'/>
            </a>
        </li>
        )
    }
};

export default ForumSideBar;