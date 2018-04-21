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
              <h1 className='placeholder'>This is the Forum/Help Page</h1>
            </Col>

          <Col size='md-3 lg-3' className='RSideBar'>
            <Row>
              <div  className='eventsBox'>
                  <p>This area will be updated with events happening on the highlighted calendar day above. Default will be set to today's date. If we suspect the date might be too far out, we will display a message asking the user to check back for events closer to that date.</p>
              </div>
            </Row>
        </Col>

          </Row>
        </Container>
      )
    };
};

export default Forum;