import React from 'react';
// external stylesheet and bootstrap style components
import './LSideBar.css';
import {Col} from '../../components/Grid';

const LSideBar = props => (
    <Col size='md-3 lg-3' className='LSideBar'>
      <div className='profile'>
        <h1 className='placeholder'>The Beyonce SideBar</h1>
      </div>
    </Col>
  );

export default LSideBar;