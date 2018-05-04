import React from 'react';
// external stylesheet and bootstrap style components
import './LSideBar.css';
import {Col} from '../../components/Grid';

const LSideBar = props => (
    <Col size='md-3 lg-3' className='LSideBar animated fadeInLeft'>
      {<div className='profile'>
        <div className='cornerRibbon'> Alumnus</div>
        <img className='profileImg' src={props.user.profilePicURL} alt="Your beautiful self" />
        <hr className='sidebarLine'/>
        <h3 className='profileName'>{props.user.firstName} {props.user.lastName}</h3>
        <h3 className='profileHeadline'>{props.user.headline}</h3>
        <hr/>
        <h4 className='profileLocation'>{props.user.location}</h4>
      </div>}
    </Col>
  );

export default LSideBar;
