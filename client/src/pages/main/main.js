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
import EventItem from '../../components/events/eventItem';
import {EventsList} from '../../components/events';
import Jobs from '../../components/jobs';
import JobsItem from '../../components/jobs/jobsItem';
import {JobsList} from '../../components/jobs/jobsList';

class Main extends Component {
    state = {
        currentPage: 'News',
        news:[],
        jobs:[],
        events:[],
        eventFavorites:[],
        newsFavorites: [],
        jobsFavorites: [],
        // this value drives category filtering of events feed
        filterEventsBy: '',
      };

      // API calls to database
      loadNews = () => {
        API.getNews()
          .then(res =>
            this.setState({ news: res.data })
          )
          .catch(err => console.log(err));
      };
      loadJobs = () => {
        API.getJobs()
          .then(res =>
            this.setState({ jobs: res.data })
          )
          .catch(err => console.log(err));
      };
      loadEvents = () => {
        API.getEvents()
          .then(res => 
            this.setState({ events: res.data })
          )
          .catch(err => console.log(err));
      };

      // making API calls after component mounts
      componentDidMount() {
        this.loadNews();
        this.loadJobs();
        this.loadEvents();
      }
    
      // updating current page
      handlePageChange = page => {
        this.setState({ currentPage: page });
      };

      // filtering events
      showFilteredEvents = category => {
        this.setState({ filterEventsBy: category });
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
                        comments={newsStory.comments}
                        newsFavorites={this.state.newsFavorites} />
            ))}
            </NewsList>
            );
        } else if (this.state.currentPage === 'Jobs') {
          return (
          <div>
          <Jobs/>
          <JobsList>
              {this.state.jobs.sort((a, b) => new Date(b.date) - new Date(a.date)).map((jobPosting, i) =>  (
              <JobsItem 
                key={jobPosting._id}
                id={jobPosting._id}
                title={jobPosting.title}
                summary={jobPosting.summary}
                link={jobPosting.link}
                thumbsUp={jobPosting.thumbsUp}
                thumbsDown={jobPosting.thumbsDown}
                comments={jobPosting.comments}
                jobsFavorites={this.state.jobsFavorites}
                bk={i}
                />
            ))}
          </JobsList> 
          </div> 
          );
        } else {
          return (
          <EventsList>
           {/* Ternary logic to make sure there's no category filter */}
           {this.state.filterEventsBy === '' ? this.state.events.filter(event => new Date(event.date) >= new Date())
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
                        comments={event.comments}
                        eventFavorites={this.state.eventFavorites}
                        showFilteredEvents={this.showFilteredEvents} />
           )) : this.state.events.filter(event => new Date(event.date) >= new Date())
           .filter(event => event.categories.includes(this.state.filterEventsBy) === true)
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
                        comments={event.comments}
                        eventFavorites={this.state.eventFavorites}
                        showFilteredEvents={this.showFilteredEvents} />
           ))}
          </EventsList>);
        } 
      };

    // render page
    render() {
        return(
          <Container>
            <Row>
              <LSideBar user={this.props.user}/>
                <Col size='md-6' className='mainContent animated fadeIn'>
                  <NavPills currentPage={this.state.currentPage}
                            handlePageChange={this.handlePageChange} />
                  {this.renderPage()}
                </Col>
              <RSideBar events={this.state.events}/>
            </Row>
          </Container>
        )
    }
};

export default Main;