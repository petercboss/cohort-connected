import React, { Component } from 'react';

// moment date formatting
import Moment from 'react-moment';
import 'moment-timezone';

import './forumList.css';

class ForumSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.id,
        };
    }
  
    render() {
        return (
        <li className='list-group-item forum' id={this.props.id}>
            <div className='.forum-container'>
                <a onClick={() => this.props.handlePageChange(`${this.props.id}`)}><h4 className='forum-title'>{this.props.title}</h4></a>
                <span className='forum-date'><Moment tz='America/Chicago' fromNow>{this.props.date}</Moment></span>
                <div className='clearfix'/>
                <div className='row'>
                    <div className='col-md-12 forum-activity'>
                        <a onClick={() => this.props.handlePageChange(`${this.props.id}`)} className='action-item comment'><i className='fa fa-comments'></i> View Discussion</a>
                    </div>
                </div>
            </div>
        </li>
        )
    }
};

export default ForumSideBar;