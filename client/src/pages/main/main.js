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
import NewsItem from '../../components/news/newsItem';
import {NewsList} from '../../components/news';
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

      // API calls to database
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

      // making API calls after component mounts
      componentDidMount() {
        this.loadNews();
        // this.loadJobs();
        this.loadEvents();
      }
    
      // updating current page
      handlePageChange = page => {
        this.setState({ currentPage: page });
      };
    
      // populating feeds with news, events, job postings data
      renderPage = () => {
        if (this.state.currentPage === 'News') {
        return (
          <NewsList>
            {this.state.news.sort((a,b) => new Date(b.date) - new Date(a.date)).map(newsStory => (
              <NewsItem key={newsStory._id} 
                        id={newsStory._id} 
                        title={newsStory.title} 
                        date={newsStory.date} 
                        author={newsStory.author} 
                        summary={newsStory.summary} 
                        link={newsStory.link} 
                        photo={newsStory.photo}
                        thumbsUp={newsStory.thumbsUp}
                        thumbsDown={newsStory.thumbsDown}
                        comments={newsStory.comments}/>
            ))}
            </NewsList>
            );
        } else if (this.state.currentPage === 'Jobs') {
          return <Jobs jobs={this.state.jobs}/>;
        } else {
          return (
          <EventsList>
           {this.state.events.filter(event => new Date(event.date) >= new Date())
           .sort((a,b) => new Date(a.date) - new Date(b.date)).map((event, i) => (
             <EventItem key={event._id} 
                        id={event._id}
                        title={event.title}
                        link={event.link}
                        date={event.date}
                        organizer={event.organizer}
                        categories={event.categories}
                        bk={i}
                        thumbsUp={event.thumbsUp}
                        thumbsDown={event.thumbsDown}
                        comments={event.comments}/>
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

