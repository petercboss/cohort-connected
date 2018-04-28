import React, { Component } from 'react';

// moment date formatting
import Moment from 'react-moment';
import 'moment-timezone';

// external stylesheet
import './eventsList.css'

class EventItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            thumbsUp: this.props.thumbsUp,
            thumbsDown: this.props.thumbsDown,
            disabled: false,
            action: '',
            eventFavorites: this.props.eventFavorites
        };
    };

    // adding a new item to favorites
    addFavorite = documentId => {
        this.setState({ favorites: [...this.state.eventFavorites, documentId] });
        console.log([...this.state.eventFavorites, documentId]);
        // add axios call here to update db
    };

    render() {
        return (
        <li className={this.props.bk % 2 === 0 ? 'list-group-item bk-light' : 'list-group-item bk-dark'} id={this.props.id}>
            <div className='.event-container'>
                <a href={this.props.link} target='_blank' className='event-link'><h4 className='event-title'>{this.props.title}</h4></a>
                <h5><i className='fa fa-calendar' aria-hidden='true'></i> <Moment format='dddd, MMMM Do YYYY, h:mm a'>{this.props.date}</Moment></h5>
                <p className='hosted-by'>Hosted By {this.props.organizer}</p>
                <p>{this.props.categories.map((cat, i) => {
                    return <button key={i} onClick={() => this.props.showFilteredEvents(cat)} className='category-btn'><i className='fa fa-tag' aria-hidden='true'></i> {cat}</button>
                })}</p>
                <div className='clearfix'/>
                <div className={this.state.eventFavorites.includes(this.props.id) === true ? 'favorite' : 'non-favorite'}></div>
                <button onClick={() => console.log(this.addFavorite(this.props.id))}
                    className={this.state.eventFavorites.includes(this.props.id) === true ? 'tabbed' : 'open'}>
                    <i className='fa fa-star-o' aria-hidden='true'></i>
                </button>
            </div>
        </li>
    )};
};

export default EventItem;