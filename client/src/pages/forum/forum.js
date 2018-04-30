import React, { Component } from 'react';
import API from '../../utils/API';

// external stylesheet and bootstrap style components
import './forum.css';
import { Col, Row, Container } from '../../components/Grid';
import ForumItem from '../../components/events/ForumItem';
import {ForumList} from '../../components/forum';

class Forum extends Component {
  state = {
    currentPage: 'Home',
    forum:[],
    question:[]
  };

  loadForum = () => {
    API.getForum()
      .then(res =>
        this.setState({ forum: res.data}))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadForum(); 
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === 'Home') {
      return (
        <ForumList>
          {this.state.forum.sort((a,b) => new Date(b.date) - new Date(a.date)).map(forumQuestion => (
            <ForumItem key={forumQuestion._id} />
          ))}
        </ForumList>
      );
    } else {
      return (
        <ForumList>
          {this.state.question.map(forumQuestion => {
            <ForumItem key={forumQuestion._id} />
          })}
        </ForumList>
      );
    };
  };

  render() {
    return(
      <Container>
        <Row>
          <Col size='md-3 lg-3' className='forum-sidebar'>
            <Row>
              <div  className='forum-myQs'>
                <p>This area is reserved for the current user's questions as a quick reference so they can see what solutions have been provided by their peers.</p>
              </div>
            </Row>
          </Col>
          <Col size='md-9'>
            {this.renderPage()}
          </Col>
        </Row>
      </Container>
    )
  };
};

export default Forum;