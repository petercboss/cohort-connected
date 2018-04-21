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
          <div  className='eventsBox'>
            <Row>
              <p>This area will be updated with events happening on the highlighted calendar day above. Default will be set to today's date. If we suspect the date might be too far out, we will display a message asking the user to check back for events closer to that date.</p>
            </Row>
          </div>
        </Row>
      </Col>
    );
  }
}

export default RSideBar;