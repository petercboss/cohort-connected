import React, { Component } from 'react';

// moment date formatting
// import Moment from 'react-moment';
// import 'moment-timezone';

// external stylesheet
// import './eventsList.css'

class JobsItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            summary: this.props.summary,
            link: this.props.link,
            thumbsUp: this.props.thumbsUp,
            thumbsDown: this.props.thumbsDown,
        };
    }

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
            <div>
                <div className='.event-container'>
                    <a href={this.props.link} target='_blank' className='event-link'><h4 className='event-title'>{this.props.title}</h4></a>
                    <p className='hosted-by'>Summary {this.props.summary}</p>
                </div>
                <div className='row'>
                    <div className='col-md-12 news-activity'>
                        <button className='action-item comment'><i className='fa fa-comments'></i> Add/View Comments</button>
                        <button onClick={this.DownVote} className={this.state.action === 'disliked' ? 'action-item thumbs thumbs-down disliked' : 'action-item thumbs thumbs-down'}
                            disabled={this.state.disabled === true ? 'true' : ''}>
                            <i className='fa fa-thumbs-down'></i> {this.state.thumbsDown}</button>
                        <button onClick={this.UpVote} className={this.state.action === 'liked' ? 'action-item thumbs thumbs-up liked' : 'action-item thumbs thumbs-up'}
                            disabled={this.state.disabled === true ? 'true' : ''}>
                            <i className='fa fa-thumbs-up'></i> {this.state.thumbsUp}</button>
                    </div>
                    <div className='clearfix' />
                    <div className={this.props.isFavorite === true ? 'favorite' : 'non-favorite'}></div>
                    <button onClick={() => console.log('you like this news story')}
                        className={this.props.isFavorite === true ? 'tabbed' : 'open'}>
                        <i className='fa fa-star-o' aria-hidden='true'></i>
                    </button>
                </div>
            </div>
        )
    };
};

export default JobsItem;