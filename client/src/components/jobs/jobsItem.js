import React, { Component } from 'react';

// moment date formatting
// import Moment from 'react-moment';
// import 'moment-timezone';

// external stylesheet
// import './eventsList.css'

class JobsItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            summary: this.props.summary,
            link: this.props.link,
        };
    };

    render() {
        return ( 
            <div className='.event-container'>
                <a href={this.props.link} target='_blank' className='event-link'><h4 className='event-title'>{this.props.title}</h4></a>
                <p className='hosted-by'>Summary {this.props.summary}</p>
            </div>
        )
    };
};

export default JobsItem;