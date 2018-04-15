//libraries 
import React, { Component } from "react";
import { Link } from "react-router-dom";


//components
import { Col, Row, Container } from "../../components/Grid";
import NavPills from "../../components/NavPills"

//pages
import News from "../news";
import Jobs from "../jobs";
import Events from "../events";


class Main extends Component {
    state = {
        currentPage: "News"
      };
    
      handlePageChange = page => {
        this.setState({ currentPage: page });
      };
    
      renderPage = () => {
        if (this.state.currentPage === "News") {
          return <News />;
        } else if (this.state.currentPage === "Jobs") {
          return <Jobs />;
        } else {
          return <Events />;
        } 
      };

    render() {
        return(
            <Container fluid >
                <Row>
                    <Col size="md-6">
                        <NavPills 
                        currentPage = {this.state.currentPage}
                        handlePageChange = {this.handlePageChange}
                        />
                        {this.renderPage()}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Main;