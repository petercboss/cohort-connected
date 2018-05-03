import React, { Component } from 'react';

// react calendar
import Calendar from 'react-calendar';
import {CalEventsList, CalEventItem} from '../CalendarEvents';

// styling
import {Col} from '../../components/Grid';
import {Row} from '../../components/Grid';
import './RSideBar.css';

class RSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      formattedDate: (new Date().getFullYear()) + '-' + (("0" + (new Date().getMonth() + 1)).slice(-2)) + '-' + (("0" + (new Date().getMonth() + 1)).slice(-2))
    };
  }
 
  onChange = date => this.setState({ 
    date: new Date(date),
    formattedDate: date.getFullYear() + '-' + (("0" + (date.getMonth() + 1)).slice(-2)) + '-' + (("0" + date.getDate()).slice(-2))
  });

  componentDidMount() {
    this.onChange(new Date());
  }

  render() {
    return (
      <Col size='md-3 lg-3' className='RSideBar animated fadeInRight'>
        <Row>
          <Calendar onChange={this.onChange}
                    value={this.state.date} />
        </Row>
        <Row>
          <CalEventsList>
          {this.props.events.sort((a, b) => parseInt(a.time.replace(/:/, ''), 10) - parseInt(b.time.replace(/:/, ''), 10)).filter(event => event.day === this.state.formattedDate).map((event, i) => (
            <CalEventItem key={event._id}
                          id={event._id}
                          bk={i}
                          title={event.title}
                          link={event.link}
                          date={event.date}
                          day={event.day}
                          time={event.time}
                          test={parseInt(event.time.replace(/:/, ''), 10)}
                          selectedDate={this.state.formattedDate} />
            ))}
          </CalEventsList>
        </Row>
      </Col>
    );
  }
}

export default RSideBar;