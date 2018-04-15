//libraries 
import React, { Component } from "react";
// import { Link } from "react-router-dom";

//components
import { Col, Row, Container } from "../../components/Grid";
import NavPills from "../../components/NavPills"
import API from "../../utils/API";

//pages
import News from "../news";
import Jobs from "../jobs";
import Events from "../events";


class Main extends Component {
    state = {
        currentPage: "News",
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
        if (this.state.currentPage === "News") {
          return <News news={this.state.news}/>;
        } else if (this.state.currentPage === "Jobs") {
          return <Jobs jobs={this.state.jobs}/>;
        } else {
          return <Events events={this.state.events}/>;
        } 
      };

    render() {
        return(
            <Container fluid >
                <Row>
                    <Col size="md-3" />
                    <Col size="md-6">
                        <NavPills 
                        currentPage = {this.state.currentPage}
                        handlePageChange = {this.handlePageChange}
                        />
                        {this.renderPage()}
                    </Col>
                    <Col size="md-3" />
                </Row>
            </Container>
        )
    };
};

export default Main;