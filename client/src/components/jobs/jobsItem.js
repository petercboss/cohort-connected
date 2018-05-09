import React, { Component } from 'react';
import API from '../../utils/API';
import Moment from 'react-moment';

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
            faveDisplay: []
        };
    }

    setInitialFavorites = () => this.setState({ faveDisplay: this.props.favorites });

    componentDidMount() {
        this.setInitialFavorites();
    };

    updateFavoritesDisplay = target => {
        if (this.state.faveDisplay.includes(target)) {
            this.setState({ faveDisplay: this.state.faveDisplay.filter((x, i) => x !== target) });
        } else {
            this.setState({ faveDisplay: [...this.state.faveDisplay, target] });
        }
    };

    // registers a thumbs up and then disables both buttons
    UpVote = () => {
        if (!this.state.disabled) {
            API.thumbsUp('jobs', this.props.id)
                .then(res => console.log(''))
                .catch(err => console.log(err));
                this.setState({ 
                    thumbsUp: this.state.thumbsUp + 1,
                    disabled: true,
                    action: 'liked'
                });
        };
    };

    // registers a thumbs down and then disables both buttons
    DownVote = () => {
        if (!this.state.disabled) {
            API.thumbsDown('jobs', this.props.id)
                .then(res => console.log(''))
                .catch(err => console.log(err));
                this.setState({ 
                    thumbsDown: this.state.thumbsDown + 1,
                    disabled: true,
                    action: 'disliked'
                });
            };
    };

    render() {
        const { open } = this.state;
        return ( 
            <li className={this.props.bk % 2 === 0 ? 'list-group-item bk-light animated fadeIn' : 'list-group-item bk-dark animated fadeIn'} id={this.props.id}>
                <div className='job-container'>
                    <div className='row'>
                        <div className='col-7'>
                            <h4 className='job-title'><a href={this.props.link} target='_blank' className='job-link'>{this.props.title}</a></h4>
                            <p className='job-postDate'>Shared on: <Moment format='MMMM D, YYYY'>{this.props.postingDate}</Moment></p>
                            <h4 className='job-summary'>{this.props.company}</h4>
                        </div>
                        <div className='col-5'>
                            <div className='row'>
                                <a className='job-apply' href={this.props.link} target='_blank' rel='noopener noreferrer'>Apply Now</a>
                            </div>
                            <div className='row mult-job-btns'>
                                <a href={`https://www.glassdoor.com/Job/jobs.htm?suggestCount=0&suggestChosen=false&clickSource=searchBtn&typedKeyword=${this.props.company}&sc.keyword=${this.props.company}&locT=C&locId=1128808&jobType=`} target='_blank' rel='noopener noreferrer'>
                                <button className='jobAction-icons'>
                                    <i className="fas fa-diagnoses"></i>
                                </button>
                                </a>
                                <button className='jobAction-icons' onClick={()=> {this.props.toggleFavorite(this.props.id, 'events'); this.updateFavoritesDisplay(this.props.id)}}>
                                    <i className={this.state.faveDisplay.includes(this.props.id) ? 'fas fa-star' : 'far fa-star'}></i>
                                </button>
                                <button onClick={this.UpVote} className='jobAction-icons' disabled={this.state.disabled === true ? 'true' : ''}>
                                    {this.state.action === 'liked' ?  this.state.thumbsUp : <i className='far fa-thumbs-up'></i>}
                                </button>
                                <button onClick={this.DownVote} className='jobAction-icons' disabled={this.state.disabled === true ? 'true' : ''}>
                                    {this.state.action === 'disliked' ?  this.state.thumbsDown : <i className='far fa-thumbs-down'></i>}
                                </button>
                                <div className='clearfix' />
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    };
};

export default JobsItem;