import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './socialButton.css';

import SocialLogin from '../../index2'

class Button extends Component {
  static propTypes = {
    triggerLogin: PropTypes.func.isRequired,
    triggerLogout: PropTypes.func.isRequired
  }

  render () {
    const { children, triggerLogin, triggerLogout, ...props } = this.props
    const style = {
      background: '#0073b2',
      border: '1px solid black',
      borderRadius: '3px',
      display: 'inline-block',
      margin: '5px',
      padding: '10px 20px'
    }

    return (
      <div className='linkedIn' onClick={triggerLogin} style={style} {...props}>
        { children }
      </div>
    )
  }
}

export default SocialLogin(Button)
