import React, { Component } from 'react';

// moment date formatting
import Moment from 'react-moment';
import 'moment-timezone';

import './forumList.css';

class ForumItem extends Component {
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
    }

    // registers a thumbs down and then disables both buttons
    DownVote = () => {
        this.setState({ 
            thumbsDown: this.state.thumbsDown + 1,
            disabled: true,
            action: 'disliked'
        });
    }

    render() {
        return (
        <li className='list-group-item forum' id={this.props.id}>
            <div className='.forum-container'>
                <a onClick={() => this.props.handlePageChange(`${this.props.id}`)}><h4 className='forum-title'>{this.props.title}</h4></a>
                <h5 className='byline'><span className='forum-author'>By: {this.props.author}</span><span className='forum-date'><Moment tz='America/Chicago' fromNow>{this.props.date}</Moment></span></h5>
                <div className='clearfix'/>
                <div className='row forum-bulk'> 
                    <div className='col-md-6'>
                        <p className='forum-brief'><a className='forum-link'>{this.props.summary}</a></p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 forum-activity'>
                        <a onClick={() => this.props.handlePageChange(`${this.props.id}`)} className='action-item comment'><i className='fa fa-comments'></i>View Discussion</a>
                        <button onClick={this.DownVote} className={this.state.action === 'disliked' ? 'action-item thumbs thumbs-down disliked' : 'action-item thumbs thumbs-down'}
                            disabled={this.state.disabled === true ? 'true' : ''}>
                            <i className='fa fa-thumbs-down'></i> {this.state.thumbsDown}</button>
                        <button onClick={this.UpVote} className={this.state.action === 'liked' ? 'action-item thumbs thumbs-up liked' : 'action-item thumbs thumbs-up'}
                            disabled={this.state.disabled === true ? 'true' : ''}>
                            <i className='fa fa-thumbs-up'></i> {this.state.thumbsUp}</button>
                    </div>
                    <div className='clearfix'/>
                    <div className={this.props.favorites.includes(this.props.id) ? 'favorite' : 'non-favorite'}></div>
                    <button onClick={()=>this.props.toggleFavorite(this.props.id, 'forum')}
                        className={this.props.favorites.includes(this.props.id) ? 'tabbed' : 'open'}>
                        <i className='fa fa-star-o' aria-hidden='true'></i>
                    </button>
                </div>
            </div>
        </li>
        )
    }
};

export default ForumItem;