import React from 'react';

// moment date formatting
import Moment from 'react-moment';
import 'moment-timezone';

// external stylesheet
import './newsList.css'

export const NewsItem = props => (
    <li className='list-group-item news' id={props.id}>
        <a href={props.link}><h4 className='news-title'>{props.title}</h4></a>
        <h5 className='byline'><span className='news-author'>By: {props.author}</span><span className='news-date'><Moment tz='America/Chicago' fromNow>{props.date}</Moment></span></h5>
        <div className='clearfix'/>
        <div className='row news-bulk'> 
            <div className='col-md-6'>
                <p className='news-brief'>"{props.summary}..." <a href={props.link} className='news-link'>Read the Full Story</a></p>
            </div>
            <div className='col-md-6'>
                <img src={props.photo} alt='{props.title}' className='news-img' />
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12 news-activity'>
                <span className='action-item comment'><i className='fa fa-comments'></i> Add/View Comments</span>
                <span className='action-item thumbs'><i className='fa fa-thumbs-up'></i> Thumbs Up</span>
                <span className='action-item thumbs'><i className='fa fa-thumbs-down'></i> Thumbs Down</span>
            </div>
            <div className='clearfix'/>
        </div>
    </li> 
);