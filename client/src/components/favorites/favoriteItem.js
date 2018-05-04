import React, { Component } from 'react';

// moment date formatting
import Moment from 'react-moment';
import 'moment-timezone';

import './favoriteList.css';

class FavoriteItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.id,
        };
    }
    
    render() {
        return (
        <li className='list-group-item favorite' id={this.props.id}>
            <div className='.favorite-container'>
                <a onClick={() => this.props.handlePageChange(`${this.props.id}`)}><h4 className='favorite-title'>{this.props.title}</h4></a>
                <h5 className='byline'><span className='favorite-author'>By: {this.props.author}</span><span className='favorite-date'><Moment tz='America/Chicago' fromNow>{this.props.date}</Moment></span></h5>
                <div className='clearfix'/>
                <div className='row favorite-bulk'> 
                    <div className='col-md-6'>
                        <p className='favorite-brief'><a className='favorite-link'>{this.props.summary}</a></p>
                    </div>
                </div>
                <div className='row'>
                    <div className='clearfix'/>
                    <div className={this.props.isFavorite === true ? 'favorite' : 'non-favorite'}></div>
                    <button onClick={()=>console.log('you like this question')}
                        className={this.props.isFavorite === true ? 'tabbed' : 'open'}>
                        <i className='fa fa-star-o' aria-hidden='true'></i>
                    </button>
                </div>
            </div>
        </li>
        )
    }
};

export default FavoriteItem;