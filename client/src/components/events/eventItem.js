import React from 'react';

// moment date formatting
import Moment from 'react-moment';
import 'moment-timezone';

// external stylesheet
import './eventsList.css'

export const EventItem = props => (
    <li className={props.bk % 2 === 0 ? 'list-group-item bk-light' : 'list-group-item bk-dark'} id={props.id}>
        <a href={props.link} target='_blank' className='event-link'><h4 className='event-title'>{props.title}</h4></a>
        <h5><i className='fa fa-calendar' aria-hidden='true'></i> <Moment format='dddd, MMMM Do YYYY, h:mm a'>{props.date}</Moment></h5>
        <p className='hosted-by'>Hosted By {props.organizer}</p>
        <p>{props.categories.map((cat, i) => {
            return <button key={i} onClick={() => props.showFilteredEvents(cat)} className='category-btn'><i className='fa fa-tag' aria-hidden='true'></i> {cat}</button>
        })}</p>
        <div className='clearfix'/>
    </li>
);