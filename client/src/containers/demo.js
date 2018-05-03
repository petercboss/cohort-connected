import React, { Component } from 'react';
import './demo.css';

// API routes
import API from '../utils/API';

import SocialButton from '../components/socialButton/socialButton'
// import UserCard from '../components/userCard/userCard'
import App from '../App'

export default class Demo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      logged: false,
      user: {},
      currentProvider: '',
      updatedUser:{},

      // triggers animation of bullet points
      animationCount: 0,

      // page loader while user object is compiled
      pageLoader: true
    }
    this.nodes = {}

    this.onLoginSuccess = this.onLoginSuccess.bind(this)
    this.onLoginFailure = this.onLoginFailure.bind(this)
    this.onLogoutSuccess = this.onLogoutSuccess.bind(this)
    this.onLogoutFailure = this.onLogoutFailure.bind(this)
    this.logout = this.logout.bind(this)
  }

  setNodeRef(provider, node) {
    if (node) {
      this.nodes[provider] = node
    }
  }

  onLoginSuccess(user) {
    this.setState({
      logged: true,
      currentProvider: user._provider,
      user
    })
  }

  onLoginFailure(err) {
    console.error(err)
    this.setState({
      logged: false,
      currentProvider: '',
      user: {}
    })
  }

  onLogoutSuccess() {
    this.setState({
      logged: false,
      currentProvider: '',
      user: {}
    })
  }

  onLogoutFailure(err) {
    console.error(err)
  }

  logout() {
    const { logged, currentProvider } = this.state

    if (logged && currentProvider) {
      this.nodes[currentProvider].props.triggerLogout()
    }
  }

  createUser(user) {
    API.createUser(user).then(res => {})
      .catch (err => console.log(err));
  }

  userCheck(userLinkedId) {
    API.getUser(userLinkedId)
      .then(res => {
        // this.setState({updatedUser:res})
      })
      .catch(err => console.log(err));
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
    let children;
    let user = this.state.user.profile;
    let user2 = {...user};
    this.userCheck(user2.id)

    if (this.state.logged) {

      if (this.state.pageLoader) {
        setTimeout(() => this.setState({ pageLoader: false }), 2500);
        return (
          <div className='page-loading'>
            <img className='power-clap animated flip' src={require('./power-clap.png')} alt='power-clap' />
            <h1 className='loading-text animated fadeInUpBig'>Bring it Back with a Power Clap</h1>
          </div>
        )
      }
      
      //create user object
      const user = {
        linkedInId: user2.id,
        firstName: user2.firstName,
        lastName: user2.lastName,
        headline: user2.headline,
        location: user2.location,
        profilePicURL: user2.profilePicURL,
        verified: true
      }
      this.createUser(user2)
      children = <App user={user}  logout={this.logout} />

    } else {
      children = [
        <div className='landing-login'>
        <div className='login-box animated fadeIn'>
          <h1 className='login-greeting'>
            <span className='light'>Cohort</span><span className='heavy'>Connected</span>
          </h1> 
          <div className='login-info'>
            <p className='login-info-title'>Stay connected to your bootcamp family post-graduation</p>
            <ul className='list-perks'>
              <li className={this.state.animationCount === 1 ? 'list-perks-item animated pulse' : 'list-perks-item'}><i className='login-icon fas fa-question-circle'></i>Ask and answer questions in the help forum</li>
              <li className={this.state.animationCount === 2 ? 'list-perks-item animated pulse' : 'list-perks-item'}><i className='login-icon fas fa-comment-alt'></i>Keep in touch using our built-in messaging app</li>
              <li className={this.state.animationCount === 3 ? 'list-perks-item animated pulse' : 'list-perks-item'}><i className='login-icon fas fa-newspaper'></i>Browse and rank the latest news in tech</li>
              <li className={this.state.animationCount === 4 ? 'list-perks-item animated pulse' : 'list-perks-item'}><i className='login-icon fas fa-calendar-alt'></i>Filter local tech events by date and interest area</li>
              <li className={this.state.animationCount === 5 ? 'list-perks-item animated pulse' : 'list-perks-item'}><i className='login-icon fas fa-handshake'></i>Post and share job opportunities</li>
              <li className={this.state.animationCount === 6 ? 'list-perks-item animated pulse' : 'list-perks-item'}><i className='login-icon fas fa-hand-holding-heart'></i>Save your favorite resources for easy access</li>
            </ul>
            <div className='login-button animated pulse'>
              <SocialButton
                provider='linkedin'
                appId='78xlkz34c94sm1'
                onLoginSuccess={this.onLoginSuccess}
                onLoginFailure={this.onLoginFailure}
                onLogoutSuccess={this.onLogoutSuccess}
                getInstance={this.setNodeRef.bind(this, 'linkedin')}
                key={'linkedin'}
              >Login with LinkedIn 
              </SocialButton>
            </div>
          </div>
        </div> 
      </div>
      ]
    }
    return children
  }
}
