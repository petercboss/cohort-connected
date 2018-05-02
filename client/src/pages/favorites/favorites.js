import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// external stylesheet and bootstrap style components
import './favorites.css';
import { Col, Row, Container } from '../../components/Grid';

// app components


// pages
// import { TLSSocket } from 'tls';

class Favorites extends Component {

    render() {
        return(
          <Container>
            <Col size='md-12'>
              <Row>
                <div className='favorites-container'>
                  <div className='sidenav'>
                    <ul className='sidenav-list'>
                      <li className='sidenav-list-item'><i className='far fa-newspaper'></i></li>
                      <li className='sidenav-list-item'><i className='far fa-calendar-check'></i></li>
                      <li className='sidenav-list-item'><i className='far fa-handshake'></i></li>
                      <li className='sidenav-list-item'><i className='far fa-question-circle'></i></li>
                    </ul>
                  </div>
                  <div className='favorites-data'>
                    <h1>HEYEYEYEYEYEYE</h1>
                  </div>
                </div>
              </Row>
            </Col>
          </Container>
        )
    };
};

export default Favorites;

