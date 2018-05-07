import React, { Component } from 'react';
import Moment from 'react-moment';

import './forumSidebar.css';

class SidebarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.id,
        };
    }
  
    render() {
        return (
            <li className='sidebar-myQuestionsItems' id={this.props.id}>
                <a onClick={() => {
                        this.props.handlePageChange(`${this.props.id}`);
                        window.scrollTo(0,0);
                    }}>
                    <h4 className='sidebar-questionTitle'>{this.props.title}</h4>
                    <div className='sidebar-questionDetails'>
                        <span className='sidebar-answerCount'><i className='fas fa-comment'></i>&nbsp;{this.props.answers}
                            {this.props.answers === 1 ? ' Answer' : ' Answers'}</span>
                        <span className='sidebar-date'><Moment fromNow>{new Date(this.props.date)}</Moment></span>
                    </div>
                    <div className='clearfix'/>
                </a>
            </li>
        )
    }
};

export default SidebarItem;