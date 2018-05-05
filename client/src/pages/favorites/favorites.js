import React, { Component } from 'react';
import API from '../../utils/API';

// external stylesheet and bootstrap style components
import './favorites.css';
import { Col, Row, Container } from '../../components/Grid';
import FavoriteItem from '../../components/favorites/favoriteItem';
import { FavoriteList } from '../../components/favorites';

class Favorites extends Component {
    state = {
      user: this.props.user,
      news: [],
      jobs: [],
      events: [],
      forum: [],
      favoritesCategory: ''
    };

    loadNewsFavorites = () => {
      API.getFavorites('news', this.state.user._id)
        .then(res => this.setState({ news: res.data.news }))
        .catch(err => console.log(err));
    };

    loadJobsFavorites = () => {
      API.getFavorites('jobs', this.state.user._id)
        .then(res => this.setState({ jobs: res.data.jobs }))
        .catch(err => console.log(err));
    };

    loadEventsFavorites = () => {
      API.getFavorites('events', this.state.user._id)
        .then(res => this.setState({ events: res.data.events }))
        .catch(err => console.log(err));
    };

    loadForumFavorites = () => {
      API.getFavorites('forum', this.state.user._id)
        .then(res => this.setState({ forum: res.data.forum }))
        .catch(err => console.log(err));
    };

    componentWillMount() {
      this.setState({ user: this.props.user });
    };

    componentDidMount() {
      this.loadNewsFavorites();
      this.loadJobsFavorites();
      this.loadEventsFavorites();
      this.loadForumFavorites();
    };

    handleCategoryChange = category => {
      this.setState({ favoritesCategory: category });
    };

    toggleFavorite = (id) => {
      console.log('almost there');
    };

    renderFavorites = () => {
      if (this.state.favoritesCategory === 'News') {
        return (
          <FavoriteList>
            {this.state.news.sort((a,b) => new Date(b.date) - new Date(a.date)).map(itemStory => (
              <FavoriteItem key={itemStory._id} 
                            id={itemStory._id} 
                            title={itemStory.title} 
                            date={itemStory.date} 
                            author={itemStory.author} 
                            summary={itemStory.summary} 
                            link={itemStory.link}
                            toggleFavorite={this.toggleFavorite}
                            favorites={this.state.news} />
            ))}
          </FavoriteList>
        );
      } else if (this.state.favoritesCategory === 'Events') {
        return (
          <FavoriteList>
            {this.state.events.sort((a,b) => new Date(b.date) - new Date(a.date)).map(itemStory => (
              <FavoriteItem key={itemStory._id} 
                            id={itemStory._id} 
                            title={itemStory.title} 
                            date={itemStory.date} 
                            author={itemStory.author} 
                            summary={itemStory.summary} 
                            link={itemStory.link}
                            favorites={this.state.events} />
            ))}
          </FavoriteList>
        );
      } else if (this.state.favoritesCategory === 'Jobs') {
        return (
          <FavoriteList>
            {this.state.jobs.sort((a,b) => new Date(b.date) - new Date(a.date)).map(itemStory => (
              <FavoriteItem key={itemStory._id} 
                            id={itemStory._id} 
                            title={itemStory.title} 
                            date={itemStory.date} 
                            author={itemStory.author} 
                            summary={itemStory.summary} 
                            link={itemStory.link}
                            favorites={this.state.jobs} />
            ))}
          </FavoriteList>
        );
      } else if (this.state.favoritesCategory === 'Forum') {
        return (
          <FavoriteList>
            {this.state.forum.sort((a,b) => new Date(b.date) - new Date(a.date)).map(itemStory => (
              <FavoriteItem key={itemStory._id} 
                            id={itemStory._id} 
                            title={itemStory.title} 
                            date={itemStory.date} 
                            author={itemStory.author.author} 
                            summary={itemStory.summary} 
                            link={itemStory.link}
                            favorites={this.state.forum} />
            ))}
          </FavoriteList>
        );
      } else {
        return (
          <div className='animated zoomIn'>
            <h1 className='default-favorites favorites-title'>Welcome to your Favorites</h1>
            <h2 className='default-favorites'>Select a category icon on the left to see your saved content.</h2>
            <h3 className='default-favorites favorites-tip'>Pro-Mode: You can remove favorited items at any time by clicking the X in the upper right-hand corner.</h3>
          </div>
        );
      }
    };

    render() {
        return(
          <Container>
            <Col size='md-12'>
              <Row>
                <div className='favorites-container animated fadeIn'>
                  <div className='sidenav animated fadeInLeftBig'>
                    <ul className='sidenav-list'>
                      <li className={this.state.favoritesCategory === 'News' ? 'sidenav-list-item current-fave' : 'sidenav-list-item'} 
                          onClick={()=>this.handleCategoryChange('News')}><i className='far fa-newspaper'></i></li>
                      <li className={this.state.favoritesCategory === 'Events' ? 'sidenav-list-item current-fave' : 'sidenav-list-item'} 
                          onClick={()=>this.handleCategoryChange('Events')}><i className='far fa-calendar-check'></i></li>
                      <li className={this.state.favoritesCategory === 'Jobs' ? 'sidenav-list-item current-fave' : 'sidenav-list-item'} 
                          onClick={()=>this.handleCategoryChange('Jobs')}><i className='far fa-handshake'></i></li>
                      <li className={this.state.favoritesCategory === 'Forum' ? 'sidenav-list-item current-fave' : 'sidenav-list-item'} 
                          onClick={()=>this.handleCategoryChange('Forum')}><i className='far fa-question-circle'></i></li>
                    </ul>
                  </div>
                  <div className='favorites-data'>
                    {this.renderFavorites()}
                  </div>
                </div>
              </Row>
            </Col>
          </Container>
        )
    };
};

export default Favorites;

