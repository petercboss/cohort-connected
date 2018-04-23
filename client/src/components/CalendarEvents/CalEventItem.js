import React from 'react';

// moment date formatting
import Moment from 'react-moment';
import 'moment-timezone';

// external stylesheet
import './CalEventsList.css'

export const CalEventItem = props => (
    <li className={props.bk % 2 === 0 ? '' : 'alternate'} id={props.id}>
        <a href={props.link} className='eventsToday'>
            <h6 className='calEventTitle'>{props.title}
                <span className='calEventBorder'> | </span>
                <Moment format='h:mm a'>{props.date}</Moment>
            </h6>
        </a>
    </li>
);