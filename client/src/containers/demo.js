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
  render() {
    let children
    let user =this.state.user.profile;
    let user2 ={...user};
    this.userCheck(user2.id)
    if (this.state.logged) {
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
        <div className='login-box'>
          <h1 className='login-greeting'>
            <span className='light'>Cohort</span><span className='heavy'>Connected</span>
          </h1> 
          <div className='login-info'>
            <p className='login-info-title'>Stay connected to your bootcamp family post-graduation</p>
            <ul className='list-perks'>
              <li className='list-perks-item'><i className='login-icon fa fa-calendar' aria-hidden='true'></i>Filter local tech events by date and interest area</li>
              <li className='list-perks-item'><i className='login-icon fa fa-code' aria-hidden='true'></i>Ask and answer questions in the help forum</li>
              <li className='list-perks-item'><i className='login-icon fa fa-comments-o' aria-hidden='true'></i>Keep in touch using our built-in messaging app</li>
              <li className='list-perks-item'><i className='login-icon fa fa-newspaper-o' aria-hidden='true'></i>Browse and rank the latest news in tech</li>
              <li className='list-perks-item'><i className='login-icon fa fa-share-square-o' aria-hidden='true'></i>Post and share job opportunities</li>
              <li className='list-perks-item'><i className='login-icon fa fa-star-o' aria-hidden='true'></i>Save your favorite resources for easy access</li>
            </ul>
            <div className='login-button'>
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
