import React, { Component } from 'react';

// external stylesheet and bootstrap style components
import './favorites.css';
import { Col, Row, Container } from '../../components/Grid';

class Favorites extends Component {
    state = {
      user: this.props.user,
      favoritesCategory: '',
    };

    componentWillMount() {
      this.setState({ user: this.props.user });
    };

    handleCategoryChange = category => {
      this.setState({ favoritesCategory: category });
    };

    renderFavorites = () => {
      if (this.state.favoritesCategory === 'News') {
        return (
          <h1 className='placeholder'>News</h1>
        );
      } else if (this.state.favoritesCategory === 'Events') {
        return (
          <h1 className='placeholder'>Events</h1>
        );
      } else if (this.state.favoritesCategory === 'Jobs') {
        return (
          <h1 className='placeholder'>Jobs</h1>
        );
      } else if (this.state.favoritesCategory === 'Forum') {
        return (
          <h1 className='placeholder'>Forum</h1>
        );
      } else {
        return (
          <div>
            <h1 className='default-favorites favorites-title'>Welcome to your Favorites</h1>
            <h2 className='default-favorites'>To display your saved content, please start by selecting a category icon to the left.</h2>
            <h3 className='default-favorites favorites-tip'>Pro-Mode: You can remove favorited items at any time by clicking on the X in the upper right-hand corner.</h3>
          </div>
        );
      } 
    };

    render() {
        return(
          <Container>
            <Col size='md-12'>
              <Row>
                <div className='favorites-container animated zoomIn'>
                  <div className='sidenav'>
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

