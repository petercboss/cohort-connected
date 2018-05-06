import React, { Component } from 'react';
import Modal from "react-responsive-modal";
import API from '../../utils/API';

// external stylesheet and bootstrap style components
import './forum.css';
import { Col, Row, Container } from '../../components/Grid';

// sidebar components
import {SidebarList} from '../../components/ForumSidebar';
import SidebarItem from '../../components/ForumSidebar/sidebarItem';

// forum index components
import {ForumIndexList} from '../../components/ForumIndex';
import ForumIndexItem from '../../components/ForumIndex/forumIndexItem';

// main question 'page'
import ForumMain from '../../components/ForumMain/forumMain';

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

  renderForumPage = () => {
    if (this.state.currentPage === 'Home') {
      return (
        <ForumIndexList>
          {this.state.forum.sort((a,b) => new Date(b.postingDate) - new Date(a.postingDate)).map(forumQuestion => (
            <ForumIndexItem key={forumQuestion._id}
                            id={forumQuestion._id} 
                            title={forumQuestion.title}
                            date={forumQuestion.postingDate} 
                            author={forumQuestion.author.author} 
                            summary={forumQuestion.summary}
                            comments={forumQuestion.comment}
                            answers={forumQuestion.comment.length}
                            handlePageChange={this.handlePageChange}
                            favorites={this.props.user.forum}
                            toggleFavorite={this.toggleFavorite} />
          ))}
        </ForumIndexList>
      );
    } else {
        return (
          <ForumMain  key={this.state.question[0]._id}
                      id={this.state.question[0]._id} 
                      title={this.state.question[0].title} 
                      date={this.state.question[0].postingDate}
                      author={this.state.question[0].author.author}
                      summary={this.state.question[0].summary}
                      comments={this.state.question[0].comment}
                      answers={this.state.question[0].comment.length}
                      handlePageChange={this.handlePageChange}
                      favorites={this.props.user.forum}
                      toggleFavorite={this.toggleFavorite} />
      );
    }
  };

  renderSideBar = () => {
    return (
      <SidebarList>
        {this.state.yourQuestions.sort((a,b) => new Date(b.postingDate) - new Date(a.postingDate)).map(forumQuestion => (
          <SidebarItem  key={forumQuestion._id}
                        id={forumQuestion._id} 
                        title={forumQuestion.title} 
                        date={forumQuestion.postingDate}
                        answers={forumQuestion.comment.length}
                        onClick={forumQuestion._id}
                        handlePageChange={this.handlePageChange} />
        ))}
      </SidebarList>
    );
  };

  render() {
    const { open } = this.state;
    return(
      <Container>
        <Row>
          <Col size='md-3 lg-3' className='forum-sidebar animated fadeIn'>
            <Row>
              <Col size='md-12 lg-12' className='add-question'>
                <button className='question-button' onClick={this.onOpenModal}><i className='fas fa-plus-circle addQ-icon'></i>Ask New Question</button>
                <Modal open={open} onClose={this.onCloseModal} className='modal' little>
                  <h2 className='modal-header'>Enter Question Details</h2>
                  <form>
                    <div className='form-group'>
                      <label className='modal-label'>Title:</label>
                      <input type='text' className='form-control' name='title' onChange={this.handleChange} placeholder='Brief synopsis of question'/>
                    </div>
                    <div className='form-group'>
                      <label className='modal-label'>Description:</label>
                      <textarea type='text' className='form-control' name='summary' onChange={this.handleChange} placeholder='Enter a detailed description of your issue here' rows='5'></textarea>
                    </div>
                    <button onClick={this.handleSubmit} type='submit' className='btn btn-light submit-question'>Submit</button>
                    <div className='clearfix' />
                  </form>
                </Modal>
              </Col>
            </Row>
            <Row>
              <Col size='md-12 lg-12' className='myQuestions-container'>
                <p className='or-divider'>- OR -</p>
                <h3>See Answers to Previous Questions:</h3>
                {this.renderSideBar()}
              </Col>
            </Row>
          </Col>
          <Col size='md-9'>
            {this.renderForumPage()}
          </Col>
        </Row>
      </Container>
    )
  };
};

export default Forum;