import React, { Component } from 'react';
import Moment from 'react-moment';
import Modal from 'react-responsive-modal';
import API from '../../utils/API';
import './forumMain.css';
import ForumComments from './forumComments';

class ForumMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            openComment: false,
            answer: '',
            faveDisplay: []
        };
    };

    onOpenModal = () => {
        this.setState({ openComment: true });
    };
     
    onCloseModal = () => {
        this.setState({ openComment: false });
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSolutionSubmit = event => {
        event.preventDefault();
        let forumSolution = {
            author: this.props.currentUser,
            body: this.state.answer
        };
        console.log(forumSolution);
        API.addNewComment('forum', this.props.id, forumSolution)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        this.onCloseModal();
        //this.loadComments();
    };

    setInitialFavorites = () => this.setState({ faveDisplay: this.props.favorites });

    componentDidMount() {
        this.setInitialFavorites();
    };

    updateFavoritesDisplay = target => {
        if (this.state.faveDisplay.includes(target)) {
            this.setState({ faveDisplay: this.state.faveDisplay.filter((x, i) => x !== target) });
        } else {
            this.setState({ faveDisplay: [...this.state.faveDisplay, target] });
        }
    };

    render() {
        return (
        <div className='forumMain-container animated fadeIn'>
            <div className='forumMain-question' id={this.props.id}>
                <h4 className='forumMain-title'>{this.props.title}<br/>
                    <span className='forumMain-byline'>Submitted By: {this.props.author}, <Moment fromNow>{this.props.date}</Moment></span>
                </h4>
                <div className='forumFave' onClick={() => {
                        this.props.toggleFavorite(this.props.id, 'forum');
                        this.updateFavoritesDisplay(this.props.id);
                    }}>
                    <i className={this.state.faveDisplay.includes(this.props.id) ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>
                </div>
                <div className='clearfix'/>
                <h5 className='forumMain-body'>{this.props.summary}</h5>
            </div>
            <div className='add-forumComment'>
                <button className='forumComment-button' onClick={this.onOpenModal}>Submit a Solution</button>
                <Modal open={this.state.openComment} onClose={this.onCloseModal} className='modal' little>
                    <h2 className='modal-header'>Solution Details</h2>
                    <form>
                        <div className='form-group'>
                        <textarea type='text' className='form-control' name='answer' onChange={this.handleChange} placeholder='Enter your solution here...' rows='5'></textarea>
                        </div>
                        <button onClick={this.handleSolutionSubmit} type='submit' className='btn btn-light submit-question'>Submit</button>
                        <div className='clearfix' />
                    </form>
                </Modal>
                <span className='or-divider'>- OR -</span>
                <button className='return-forumIndex' onClick={this.props.returnHome}>Return to Forum Home</button>
            </div>
            <div>
            {this.props.comments.map((comment, i) => (
                <ForumComments
                    key={comment._id}
                    id={comment._id}
                    author={comment.author}
                    postingDate={comment.postingDate}
                    comment={comment.body}
                    upVotes={comment.upVote}
                    downVotes={comment.downVote} />
                ))}
            </div>
        </div>
        )
    }
};

export default ForumMain;