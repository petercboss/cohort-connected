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
import News from '../news';
import Jobs from '../jobs';
import Events from '../events';
import { TLSSocket } from 'tls';


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
          .then(res =>
            this.setState({ jobs: res.data})
          )
          .catch(err => console.log(err));
      };
      loadEvents = () => {
        API.getEvents()
          .then(res =>
            this.setState({ events: res.data})
          )
          .catch(err => console.log(err));
      };

    //   componentDidMount() {
    //     this.loadNews();
    //     this.loadJobs();
    //     this.loadEvents();
    //   }
    
      handlePageChange = page => {
        this.setState({ currentPage: page });
      };
    
      renderPage = () => {
        if (this.state.currentPage === 'News') {
          return <News news={this.state.news}/>;
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