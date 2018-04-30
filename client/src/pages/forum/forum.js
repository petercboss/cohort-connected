import React, { Component } from 'react';
import Modal from "react-responsive-modal";
import API from '../../utils/API';

// external stylesheet and bootstrap style components
import './forum.css';
import { Col, Row, Container } from '../../components/Grid';
import ForumItem from '../../components/forum/forumItem';
import {ForumList} from '../../components/forum';

class Forum extends Component {
  state = {
    currentPage: 'Home',
    forum:[],
    question:[],
    open: false
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

  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
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
    const { open } = this.state;
    return(
      <Container>
        <Row>
          <Col size='md-3 lg-3' className='forum-sidebar forum-myQs'>
            <Row>
              <Col size='md-12 lg-12' className='create'>
                <button onClick={this.onOpenModal}>Create Topic</button>
                <Modal open={open} onClose={this.onCloseModal} className='modal' little>
                  <h2>Ask A Question:</h2>
                  <form>
                    <div className='form-group'>
                      <label for='subject'>Subject</label>
                      <input type='text' className='form-control' id='subject' placeholder='Subject'/>
                    </div>
                    <div className='form-group'>
                      <label for='question'>Question</label>
                      <textarea type='text' className='form-control' id='question' placeholder='Enter your question' rows='5'></textarea>
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                  </form>
                </Modal>
              </Col>
            </Row>
            <Row>
              <div>
                <h2>Personal questions</h2>
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