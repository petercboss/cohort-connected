import React from 'react';

// moment date formatting
import Moment from 'react-moment';
import 'moment-timezone';

// external stylesheet
import './CalEventsList.css'

export const CalEventItem = props => (
    <li className={props.bk % 2 === 0 ? '' : 'alternate'} id={props.id} data-time={props.test}>
        <a href={props.link} target='_blank' className='eventsToday'>
            <h6 className='calEventTitle'>
                <Moment format='h:mm a'>{props.date}</Moment>
                <span className='calEventBorder'> | </span>
                <span className='eventLink'>{props.title}</span>
            </h6>
        </a>
    </li>
);