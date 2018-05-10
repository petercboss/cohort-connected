import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './coming-soon.css';

class ComingSoon extends Component {
    state = {
        animationCount: 0,
    }

    animateBulletPoints = () => {
        setTimeout(() => this.setState({ animationCount: 1 }), 1000);
        setTimeout(() => this.setState({ animationCount: 2 }), 2000);
        setTimeout(() => this.setState({ animationCount: 3 }), 3000);
        setTimeout(() => this.setState({ animationCount: 4 }), 4000);
        setTimeout(() => this.setState({ animationCount: 5 }), 5000);
        setTimeout(() => this.setState({ animationCount: 6 }), 6000);
    }
    
    componentDidMount() {
        this.animateBulletPoints();
    }

    render() {
        return(
        <div className='MSU-landing-login'>
            <div className='MSU-background-img' />
            <div className='MSU-login-box animated fadeIn'>
                <h1 className='MSU-login-greeting'>
                    <span className='MSU-light'>Cohort</span><span className='MSU-heavy'>Connected</span>
                </h1> 
                <div className='MSU-login-info'>
                <p className='MSU-login-info-title'>Stay connected to your bootcamp family post-graduation</p>
                <ul className='MSU-list-perks'>
                    <li className={this.state.animationCount === 1 ? 'MSU-list-perks-item animated pulse' : 'MSU-list-perks-item'}><i className='MSU-login-icon fas fa-question-circle'></i>Ask and answer questions in the help forum</li>
                    <li className={this.state.animationCount === 2 ? 'MSU-list-perks-item animated pulse' : 'MSU-list-perks-item'}><i className='MSU-login-icon fas fa-comment-alt'></i>Keep in touch using our built-in messaging app</li>
                    <li className={this.state.animationCount === 3 ? 'MSU-list-perks-item animated pulse' : 'MSU-list-perks-item'}><i className='MSU-login-icon fas fa-newspaper'></i>Browse the latest headlines and share reactions</li>
                    <li className={this.state.animationCount === 4 ? 'MSU-list-perks-item animated pulse' : 'MSU-list-perks-item'}><i className='MSU-login-icon fas fa-calendar-alt'></i>Filter local tech events by date and interest area</li>
                    <li className={this.state.animationCount === 5 ? 'MSU-list-perks-item animated pulse' : 'MSU-list-perks-item'}><i className='MSU-login-icon fas fa-handshake'></i>Post and apply for job opportunities</li>
                    <li className={this.state.animationCount === 6 ? 'MSU-list-perks-item animated pulse' : 'MSU-list-perks-item'}><i className='MSU-login-icon fas fa-hand-holding-heart'></i>Save your favorite resources for easy access</li>
                </ul>
                <Link to='/contact'><button onClick={window.scrollTo(0,0)} className='MSU-login-button animated pulse'>Get Your <span className='MSU-light'>Cohort</span><span className='MSU-heavy'>Connected</span></button></Link>
                </div>
            </div> 
        </div>
        )
    };
};

export default ComingSoon;

