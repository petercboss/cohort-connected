import React, { Component } from 'react';
import Modal from "react-responsive-modal";
import API from '../../utils/API';

// external stylesheet and bootstrap style components
import './forum.css';
import { Col, Row, Container } from '../../components/Grid';
import ForumItem from '../../components/forum/forumItem';
import ForumSideBar from '../../components/forum/forumSideBar';
import { ForumList } from '../../components/forum';

class Forum extends Component {
  state = {
    user: this.props.user,
    currentPage: 'Home',
    forum: [],
    question: [],
    yourQuestions: [],
    title: '',
    summary: '',
    open: false
  };

  componentWillMount() {
    this.setState({ user: this.props.user });
  };

  loadForum = () => {
    API.getForum()
      .then(res => {
        this.setState({ forum: res.data });
        let questionArray = [];
        res.data.forEach(i => {
          if (i.author._id === this.state.user._id) {
            questionArray.push(i);
          };
        });
        this.setState({ yourQuestions: questionArray });
      })
      .catch(err => console.log(err));
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const forum = {
      _id: this.state.user._id,
      author: `${this.state.user.firstName} ${this.state.user.lastName}`,
      title: this.state.title,
      summary: this.state.summary
    };
    API.createForum(forum)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    this.onCloseModal();
    this.loadForum();
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
    API.getOneQuestion(page)
    .then(res => {
      this.setState({ question: [res.data], currentPage: page });
    })
    .catch(err => console.log(err));
  };

  toggleFavorite = (id, item) => {
    if (!this.props.user.forum.includes(id)) {
      API.favoriteItem(item, this.props.user._id, id)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    } else {
      API.removeFavorite(item, this.props.user._id, id)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  renderMainPage = () => {
    if (this.state.currentPage === 'Home') {
      return (
        <ForumList>
          {this.state.forum.sort((a,b) => new Date(b.date) - new Date(a.date)).map(forumQuestion => (
            <ForumItem key={forumQuestion._id}
                       id={forumQuestion._id} 
                       title={forumQuestion.title} 
                       date={forumQuestion.date} 
                       author={forumQuestion.author.author} 
                       summary={forumQuestion.summary}
                       thumbsUp={forumQuestion.thumbsUp}
                       thumbsDown={forumQuestion.thumbsDown}
                       favorites={this.props.user.forum}
                       toggleFavorite={this.toggleFavorite}
                       handlePageChange={this.handlePageChange} />
          ))}
        </ForumList>
      );
    } else {
        return (
          <ForumList>
            {this.state.question.sort((a,b) => new Date(b.date) - new Date(a.date)).map(forumQuestion => (
              <ForumItem key={forumQuestion._id}
                         id={forumQuestion._id} 
                         title={forumQuestion.title} 
                         date={forumQuestion.date} 
                         author={forumQuestion.author.author} 
                         summary={forumQuestion.summary}
                         thumbsUp={forumQuestion.thumbsUp}
                         thumbsDown={forumQuestion.thumbsDown}
                         favorites={this.props.user.forum}
                         comments={forumQuestion.comments} />
            ))}
          </ForumList>
      );
    }
  };

  renderSideBar = () => {
    return (
      <ForumList>
        {this.state.yourQuestions.sort((a,b) => new Date(b.date) - new Date(a.date)).map(forumQuestion => (
          <ForumSideBar key={forumQuestion._id}
                        id={forumQuestion._id} 
                        title={forumQuestion.title} 
                        date={forumQuestion.date}
                        onClick={forumQuestion._id}
                        handlePageChange={this.handlePageChange} />
        ))}
      </ForumList>
    );
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
                      <label>Subject</label>
                      <input type='text' className='form-control' name='title' onChange={this.handleChange} placeholder='Subject'/>
                    </div>
                    <div className='form-group'>
                      <label>Question</label>
                      <textarea type='text' className='form-control' name='summary' onChange={this.handleChange} placeholder='Enter your question' rows='5'></textarea>
                    </div>
                    <button onClick={this.handleSubmit} type='submit' className='btn btn-primary'>Submit</button>
                  </form>
                </Modal>
              </Col>
            </Row>
            <Row>
              <Col size='md-12 lg-12'>
                {this.renderSideBar()}
              </Col>
            </Row>
          </Col>
          <Col size='md-9'>
            {this.renderMainPage()}
          </Col>
        </Row>
      </Container>
    )
  };
};

export default Forum;