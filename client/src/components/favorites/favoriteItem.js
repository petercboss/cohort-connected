import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import './favoriteList.css';

class FavoriteItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.id,
          faveDisplay: []
        };
    }

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
    //; this.updateFavoritesDisplay(this.props.id)
    render() {
        return (
            <div className='favListItem'>
                <li className='list-group-item' id={this.props.id}>
                    <div className='favorite-container'>
                        <button className='faveAction-icons' onClick={()=> {this.props.toggleFavorite(this.props.id, this.props.category)}}>
                            <i className='fas fa-times'></i>
                        </button>
                        {this.props.link ? 
                        <a href={this.props.link} target='_blank' rel='noopener noreferrer'><h4 className='fave-title'>{this.props.title}</h4></a> :
                        <Link to='/forum'><h4 className='fave-title'>{this.props.title}</h4></Link>
                        }
                        <div className='clearfix' />
                        <h5 className='byline'><span className='favorite-author'>{this.props.byline}</span><span className='favorite-date'>{this.props.dateLeader}<Moment fromNow>{this.props.date}</Moment></span></h5>
                        <div className='clearfix'/>
                        <div className='row favorite-bulk'> 
                            <div className='col-md-10'>
                                <p className='favorite-brief'><a className='favorite-link'>{this.props.details}</a></p>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        )
    }
};

export default FavoriteItem;