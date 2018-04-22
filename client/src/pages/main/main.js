import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// API routes
import API from '../../utils/API';

// external stylesheet and bootstrap style components
import './main.css';
import { Col, Row, Container } from '../../components/Grid';

// app components
import NavPills from '../../components/NavPills';
import LSideBar from '../../components/LSideBar';
import RSideBar from '../../components/RSideBar';
import {NewsList, NewsItem} from '../../components/news';
import {EventsList, EventItem} from '../../components/events';
import Jobs from '../../components/jobs';

// pages
// import { TLSSocket } from 'tls';

class Main extends Component {
    state = {
        currentPage: 'News',
        news:[],
        jobs:[],
        events:[]
      };
      loadNews = () => {
        API.getNews()
          .then(res =>
            this.setState({ news: res.data})
          )
          .catch(err => console.log(err));
      };
      loadJobs = () => {
        API.getJobs()
          .then(res => {
            this.setState({ jobs: res.data})
            console.log(res);
          })
          .catch(err => console.log(err));
      };
      loadEvents = () => {
        API.getEvents()
          .then(res => 
            this.setState({ events: res.data})
          )
          .catch(err => console.log(err));
      };

      componentDidMount() {
        this.loadNews();
        // this.loadJobs();
        this.loadEvents();
      }
    
      handlePageChange = page => {
        this.setState({ currentPage: page });
      };
    
      renderPage = () => {
        if (this.state.currentPage === 'News') {
        return (
          <NewsList>
            {this.state.news.map(newsStory => (
              <NewsItem key={newsStory._id} id={newsStory._id} title={newsStory.title} date={newsStory.date} author={newsStory.author} summary={newsStory.summary} link={newsStory.link} photo={newsStory.photo}/>
            ))}
            </NewsList>
            );
        } else if (this.state.currentPage === 'Jobs') {
          return <Jobs jobs={this.state.jobs}/>;
        } else {
          return (
          <EventsList>
           {this.state.events.map((event, i) => (
             <EventItem key={event._id} id={event._id} title={event.title} link={event.link} date={event.date} organizer={event.organizer} categories={event.categories} bk={i}/>
           ))}
          </EventsList>);
        } 
      };

    render() {
        return(
          <Container>
            <Row>
                <LSideBar />
                <Col size='md-6' className='mainContent'>
                    <NavPills 
                    currentPage = {this.state.currentPage}
                    handlePageChange = {this.handlePageChange}
                    />
                    {this.renderPage()}
                </Col>
                <RSideBar />
            </Row>
          </Container>
        )
    };
};

export default Main;

