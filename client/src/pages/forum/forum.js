import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// external stylesheet and bootstrap style components
import './forum.css';
import { Col, Row, Container } from '../../components/Grid';

// app components


// pages
// import { TLSSocket } from 'tls';

class Forum extends Component {

    render() {
      return(
        <Container>
          <Col size='md-12'>
            <Row>
              <h1 className='placeholder'>This is the Forum/Help Page</h1>
            </Row>
          </Col>
        </Container>
      )
    };
};

export default Forum;