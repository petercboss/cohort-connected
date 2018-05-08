import React, { Component } from 'react';
import API from '../../utils/API';

// moment date formatting
import Moment from 'react-moment';
import 'moment-timezone';

// external stylesheet
import './newsList.css'

class NewsItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.id,
          thumbsUp: this.props.thumbsUp,
          thumbsDown: this.props.thumbsDown,
          faveDisplay: []
        };
    }
    
    // registers a thumbs up and then disables both buttons
    UpVote = () => {
        if (!this.state.disabled) {
            API.thumbsUp('news', this.props.id)
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
            API.thumbsDown('news', this.props.id)
                .then(res => console.log(''))
                .catch(err => console.log(err));
                this.setState({ 
                    thumbsDown: this.state.thumbsDown + 1,
                    disabled: true,
                    action: 'disliked'
                });
            };
    };

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

    render() {
        return (
        <li className='list-group-item news' id={this.props.id}>
            <div className='.news-container'>
                <a href={this.props.link} target='_blank' rel='noopener noreferrer'><h4 className='news-title'>{this.props.title}</h4></a>
                <h5 className='byline'><span className='news-author'>By: {this.props.author}</span><span className='news-date'><Moment tz='America/Chicago' fromNow>{this.props.date}</Moment></span></h5>
                <div className='clearfix'/>
                <div className='row news-bulk'> 
                    <div className='col-md-6'>
                        <p className='news-brief'>"{this.props.summary}..." <a href={this.props.link} target='_blank' rel='noopener noreferrer' className='news-link'>Read the Full Story</a></p>
                    </div>
                    <div className='col-md-6'>
                        <img src={this.props.photo} alt={this.props.title} className='news-img' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 news-activity'>
                        <button className={this.state.faveDisplay.includes(this.props.id) ? 'action-item news-faves saved-news' : 'action-item news-faves'}
                            onClick={() => {this.props.toggleFavorite(this.props.id, 'news'); this.updateFavoritesDisplay(this.props.id) }} >
                            <i className={this.state.faveDisplay.includes(this.props.id) ? 'fas fa-check' : 'fas fa-plus'}></i>
                            {this.state.faveDisplay.includes(this.props.id) ? ' Saved to Favorites' : ' Add to Favorites'}
                        </button>
                        <button onClick={this.DownVote} className='action-item thumbs' disabled={this.state.disabled === true ? 'true' : ''}>
                            <i className={this.state.action === 'disliked' ? 'fas fa-thumbs-down' : 'far fa-thumbs-down'}></i> {this.state.thumbsDown}
                        </button>
                        <button onClick={this.UpVote} className='action-item thumbs' disabled={this.state.disabled === true ? 'true' : ''}>
                            <i className={this.state.action === 'liked' ? 'fas fa-thumbs-up' : 'far fa-thumbs-up'}></i> {this.state.thumbsUp}
                        </button>
                    </div>
                    <div className='clearfix'/>
                </div>
            </div>
        </li>
        )
    }
};

export default NewsItem;