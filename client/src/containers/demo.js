import React, { Component } from 'react'

import SocialButton from '../components/socialButton/socialButton'
//import UserCard from '../components/userCard/userCard'
import Main from '../pages/main' 

export default class Demo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      logged: false,
      user: {},
      currentProvider: ''
    }
    this.nodes = {}

    this.onLoginSuccess = this.onLoginSuccess.bind(this)
    this.onLoginFailure = this.onLoginFailure.bind(this)
    this.onLogoutSuccess = this.onLogoutSuccess.bind(this)
    this.onLogoutFailure = this.onLogoutFailure.bind(this)
    this.logout = this.logout.bind(this)
  }

  setNodeRef (provider, node) {
    if (node) {
      this.nodes[ provider ] = node
    }
  }

  onLoginSuccess (user) {
    console.log(user)

    this.setState({
      logged: true,
      currentProvider: user._provider,
      user
    })
  }

  onLoginFailure (err) {
    console.error(err)

    this.setState({
      logged: false,
      currentProvider: '',
      user: {}
    })
  }

  onLogoutSuccess () {
    this.setState({
      logged: false,
      currentProvider: '',
      user: {}
    })
  }

  onLogoutFailure (err) {
    console.error(err)
  }

  logout () {
    const { logged, currentProvider } = this.state

    if (logged && currentProvider) {
      this.nodes[currentProvider].props.triggerLogout()
    }
  }

  render () {
    let children

    if (this.state.logged) {
      // children = <UserCard user={this.state.user} logout={this.logout} />
      children = <Main user={this.state.user} logout={this.logout} />
    } else {
      children = [
       
        <SocialButton
          provider='linkedin'
          appId='78xlkz34c94sm1'
          onLoginSuccess={this.onLoginSuccess}
          onLoginFailure={this.onLoginFailure}
          onLogoutSuccess={this.onLogoutSuccess}
          getInstance={this.setNodeRef.bind(this, 'linkedin')}
          key={'linkedin'}
        >
          Login with LinkedIn
        </SocialButton>
      ]

      // Amazon only supports HTTPS
      if (window.location.protocol === 'https:') {
        children.push(
          <SocialButton
            provider='amazon'
            appId='amzn1.application-oa2-client.26aaf63624854cbcaa084735a0fc47ed'
            onLoginSuccess={this.onLoginSuccess}
            onLoginFailure={this.onLoginFailure}
            onLogoutSuccess={this.onLogoutSuccess}
            getInstance={this.setNodeRef.bind(this, 'amazon')}
            key={'amazon'}
          >
            Login with Amazon
          </SocialButton>
        )
      } else {
        // We don’t use HTTPS because of Gatekeeper, but it can be enabled if Gatekeeper is served over HTTPS
        children.push(
          <SocialButton
            autoCleanUri
            provider='github'
            gatekeeper='http://localhost:9999'
            appId='6e0ec5803311db3df112'
            redirect='http://localhost:8080'
            onLoginSuccess={this.onLoginSuccess}
            onLoginFailure={this.onLoginFailure}
            onLogoutSuccess={this.onLogoutSuccess}
            getInstance={this.setNodeRef.bind(this, 'github')}
            key={'github'}
          >
            Login with GitHub OAuth
          </SocialButton>
        )
      }
    }

    return children
  }
}
