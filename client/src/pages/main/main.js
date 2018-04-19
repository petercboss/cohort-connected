//libraries 
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

//style
import './main.css';
//components
import { Col, Row, Container } from '../../components/Grid';
import NavPills from '../../components/NavPills';
import API from '../../utils/API';
import LSideBar from '../../components/LSideBar';
import RSideBar from '../../components/RSideBar';


//pages
import {NewsList, NewsItem} from '../../components/news';
import Jobs from '../../components/jobs';
import Events from '../../components/events';
// import { TLSSocket } from 'tls';


class Main extends Component {
    state = {
        currentPage: 'News',
        news:[],
        title:"",
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
        // this.loadEvents();
      }
    
      handlePageChange = page => {
        this.setState({ currentPage: page });
      };
    
      renderPage = () => {
        if (this.state.currentPage === 'News') {
        return (
          <NewsList>
            {this.state.news.map(newsStory => (
              <NewsItem key={newsStory._id} id={newsStory._id} title={newsStory.title} author={newsStory.author} summary={newsStory.summary} link={newsStory.link} photo={newsStory.photo}/>
            ))}
            </NewsList>
            );
        } else if (this.state.currentPage === 'Jobs') {
          return <Jobs jobs={this.state.jobs}/>;
        } else {
          return <Events events={this.state.events}/>;
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

