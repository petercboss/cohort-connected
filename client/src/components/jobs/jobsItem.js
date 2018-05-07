import React, { Component } from 'react';

// external stylesheet
import './jobs.css'

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
            <li className={this.props.bk % 2 === 0 ? 'list-group-item bk-light animated fadeIn' : 'list-group-item bk-dark animated fadeIn'} id={this.props.id}>
                <div className='job-container'>
                    <div className='row'>
                        <div className='col-7'>
                            <a href={this.props.link} target='_blank' className='job-link'><h4 className='job-title'>Link: <i className='fas fa-link'></i> {this.props.title}</h4></a>
                        </div>
                        <div className='col-5'>
                            <div className={this.props.isFavorite === true ? 'favorite' : 'non-favorite'}></div>
                            <button onClick={() => console.log('you like this news story')}
                                className={this.props.isFavorite === true ? 'tabbed' : 'open'}>
                                <i className='fa fa-star-o' aria-hidden='true'></i>
                            </button>
                        </div>
                        <div className='col-7'>
                            <h4 className='job-summary-text'>Company:<span className='job-summary'> {this.props.summary}</span></h4>
                        </div>
                        <div className='col-5'>
                            <span className='text-center jobPreview'>
                            See Preview
                                <div className='iframe-preview'>
                                    <iframe scrolling='yes' title='i' name='preview' src={this.props.link}></iframe>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <button className='action-item comment'><i className='fa fa-comments'></i> Add/View Comments</button>
                            <button onClick={this.DownVote} className={this.state.action === 'disliked' ? 'action-item thumbs thumbs-down disliked' : 'action-item thumbs thumbs-down'}
                                disabled={this.state.disabled === true ? 'true' : ''}>
                                <i className='fa fa-thumbs-down'></i> {this.state.thumbsDown}
                            </button>
                            <button onClick={this.UpVote} className={this.state.action === 'liked' ? 'action-item thumbs thumbs-up liked' : 'action-item thumbs thumbs-up'}
                                disabled={this.state.disabled === true ? 'true' : ''}>
                                <i className='fa fa-thumbs-up'></i> {this.state.thumbsUp}
                            </button>
                        </div>
                        <div className='clearfix' />
                        <div className={this.props.favorites.includes(this.props.id) ? 'favorite' : 'non-favorite'}></div>
                        <button onClick={()=>this.props.toggleFavorite(this.props.id, 'jobs')}
                            className={this.props.favorites.includes(this.props.id) ? 'tabbed' : 'open'}>
                            <i className='fa fa-star-o' aria-hidden='true'></i>
                        </button>
                    </div>
                </div>
            </li>
        )
    };
};

export default JobsItem;