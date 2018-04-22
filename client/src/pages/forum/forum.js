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
          <Row>

            <Col size='md-9'>
              <h1 className='forum-index'>This is the Forum/Help Page</h1>
            </Col>

          <Col size='md-3 lg-3' className='forum-sidebar'>
            <Row>
              <div  className='forum-myQs'>
                  <p>This area is reserved for the current user's questions as a quick reference so they can see what solutions have been provided by their peers.</p>
              </div>
            </Row>
        </Col>

          </Row>
        </Container>
      )
    };
};

export default Forum;