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
                <h1 className='placeholder'>This is the Favorites Page</h1>
              </Row>
            </Col>
          </Container>
        )
    };
};

export default Favorites;

