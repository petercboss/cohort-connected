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
            faveDisplay: []
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
        <li className={this.props.bk % 2 === 0 ? 'list-group-item bk-light animated fadeIn' : 'list-group-item bk-dark animated fadeIn'} id={this.props.id}>
            <div className='.event-container'>
                <a href={this.props.link} target='_blank' rel='noopener noreferrer' className='event-link'><h4 className='event-title'>{this.props.title}</h4></a>
                <h5><i onClick={()=> {this.props.toggleFavorite(this.props.id, 'events'); this.updateFavoritesDisplay(this.props.id)}} 
                    className={this.state.faveDisplay.includes(this.props.id) ? 'fas fa-calendar-check eventFaves' : 'far fa-calendar-plus eventFaves'}></i>
                    <Moment format='dddd, MMMM Do YYYY, h:mm a'>{this.props.date}</Moment>
                </h5>
                <p className='hosted-by'>Hosted By {this.props.organizer}</p>
                <p>{this.props.categories.map((cat, i) => {
                    return <button key={i} onClick={() => this.props.showFilteredEvents(cat)} className='category-btn'><i className='fa fa-tag' aria-hidden='true'></i> {cat}</button>
                })}</p>
                <div className='clearfix'/>
            </div>
        </li>
    )};
};

export default EventItem;