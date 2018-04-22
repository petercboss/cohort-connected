import React from 'react';

// moment date formatting
import Moment from 'react-moment';
import 'moment-timezone';

// styling
import './eventsList.css'

//const today = Date.now();

export const EventItem = props => (
    <li className={props.bk % 2 === 0 ? 'list-group-item bk-dark' : 'list-group-item bk-light'} id={props.id}>
        <a href={props.link} className='event-link'><h3 className='event-title'>{props.title}</h3></a>
        <h4><i className='fa fa-calendar' aria-hidden='true'></i> <Moment format='dddd, MMMM Do YYYY, h:mm a'>{props.date}</Moment></h4>
        <p className='hosted-by'>Hosted By {props.organizer}</p>
        <p>{props.categories.map((cat, i) => {
            return <button key={i} data-cat={cat} className='category-btn'><i className='fa fa-tag' aria-hidden='true'></i> {cat}</button>
        })}</p>
        <div className='clearfix'/>
    </li>
);