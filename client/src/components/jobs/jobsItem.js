import React, { Component } from 'react';
import API from '../../utils/API';

import Modal from 'react-responsive-modal';
import Iframe from 'react-iframe'

// external stylesheet
import './jobs.css'

class JobsItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            summary: this.props.summary,
            link: this.props.link,
            thumbsUp: this.props.thumbsUp,
            thumbsDown: this.props.thumbsDown,
            faveDisplay: [],
            open: false
        };
    }

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

    onOpenModal = () => {
        this.setState({ open: true });
    };
     
    onCloseModal = () => {
        this.setState({ open: false });
    };

    // registers a thumbs up and then disables both buttons
    UpVote = () => {
        if (!this.state.disabled) {
            API.thumbsUp('jobs', this.props.id)
                .then(res => console.log(''))
                .catch(err => console.log(err));
                this.setState({ 
                    thumbsUp: this.state.thumbsUp + 1,
                    disabled: true,
                    action: 'liked'
                });
        };
    };

    // registers a thumbs down and then disables both buttons
    DownVote = () => {
        if (!this.state.disabled) {
            API.thumbsDown('jobs', this.props.id)
                .then(res => console.log(''))
                .catch(err => console.log(err));
                this.setState({ 
                    thumbsDown: this.state.thumbsDown + 1,
                    disabled: true,
                    action: 'disliked'
                });
            };
    };

    render() {
        const { open } = this.state;
        return ( 
            <li className={this.props.bk % 2 === 0 ? 'list-group-item bk-light animated fadeIn' : 'list-group-item bk-dark animated fadeIn'} id={this.props.id}>
                <div className='job-container'>
                    <div className='row'>
                        <div className='col-7'>
                            <a href={this.props.link} target='_blank' className='job-link'><h4 className='job-title'>{this.props.title} <i className='fas fa-link'></i></h4></a>
                        </div>
                        <div className='col-7'>
                            <h4 className='job-summary-text'>Company:<span className='job-summary'> {this.props.summary}</span></h4>
                        </div>
                        <div className='col-5'>
                        <button className='text-center jobPreview' onClick={this.onOpenModal}>See Preview</button>
                            <Modal open={open} onClose={this.onCloseModal} className='preview-modal' little>
                            {/* <iframe src={this.props.id} width = "1000px" height = "1000px"></iframe> */}
                            <Iframe key={this.props.id}
                                url={this.props.link}
                                position="absolute"
                                width="8000px"
                                height="8000px"
                                id="myId"
                                className="jobPreview-img"
                                styles={{}} />

                            </Modal>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <button onClick={this.DownVote} className='action-item thumbs job-icons' disabled={this.state.disabled === true ? 'true' : ''}>
                                <i className={this.state.action === 'disliked' ? 'fas fa-thumbs-down' : 'far fa-thumbs-down'}></i> {this.state.thumbsDown}
                            </button>
                            <button onClick={this.UpVote} className='action-item thumbs job-icons' disabled={this.state.disabled === true ? 'true' : ''}>
                                <i className={this.state.action === 'liked' ? 'fas fa-thumbs-up' : 'far fa-thumbs-up'}></i> {this.state.thumbsUp}
                            </button>
                            <button className='action-item thumbs job-icons' onClick={()=> {this.props.toggleFavorite(this.props.id, 'events'); this.updateFavoritesDisplay(this.props.id)}}>
                                <i className={this.state.faveDisplay.includes(this.props.id) ? 'fas fa-star' : 'far fa-star'}></i>
                            </button>
                            <button className='action-item thumbs job-icons'>
                                <i className="fas fa-diagnoses"></i>
                            </button>
                        </div>
                        <div className='clearfix' />
                    </div>
                </div>
            </li>
        )
    };
};

export default JobsItem;