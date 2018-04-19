import React, { Component } from 'react';

// react calendar
import Calendar from 'react-calendar';

// styling
import {Col} from '../../components/Grid';
import {Row} from '../../components/Grid';
import './RSideBar.css';

class RSideBar extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <Col size='md-3 lg-3' className='RSideBar'>
        <Row>
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
        </Row>
        <Row>
          <div  className='infoBox'>
            <Row>
              <Col size='sm-4' className='links'><a>About</a></Col>
              <Col size='sm-4' className='links'><a>FAQ</a></Col>
              <Col size='sm-4' className='links'><a>Contact</a></Col>
            </Row>
            <Row>
              <Col size='md-12' className='links'>
                <a>Terms &amp; Conditions</a>
              </Col>
            </Row>
            <Row>
              <Col size='md-12' className='links'>
                <p className='copyright'><span className='purple'>Cohort<b>Connected</b></span><br/>&copy; Copyright 2018</p>
              </Col>
            </Row>
          </div>
        </Row>
      </Col>
    );
  }
}

export default RSideBar;