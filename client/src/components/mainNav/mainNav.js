import React from 'react';
import { Link } from 'react-router-dom';

// external stylesheet
import './mainNav.css';

const mainNav = props => (
<div>
    <nav className='navbar fixed-top navbar-expand-lg navbar-dark customMainNav'>
        <div className='container'>

            <Link to='/'>
                <img src={require('./logo-bw.png')} className='mainNavLogo' alt='Cohort Connected Logo'/>
            </Link>

            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav ml-auto'>
                    
                    <li className='nav-item'>
                        <Link className='nav-link page-navs' to='/'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link page-navs' to='/forum'>Forum</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link page-navs' to='/messages'>Messages <span className='numUnread'>{props.unreadMessages.length}</span></Link>
                    </li>

                    <li className='nav-item dropdown'>
                        <Link className='nav-link dropdown-toggle' to='' id='navbarDropdown' role='button' data-toggle='dropdown'>
                            {props.name}
                        </Link>
                        <div className='dropdown-menu'>
                            <Link className='dropdown-item custonNavDropdown' to='/favorites'>Favorites</Link>
                                <div className='dropdown-divider'></div>
                            <a className='dropdown-item customNavDropdown' href='https://cohortconnected.herokuapp.com/'>Sign Out</a>
                        </div>
                    </li>
                    {/* onClick={this.props.logout} */}
                </ul>
            </div>

            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent'>
                <span className='navbar-toggler-icon'></span>
            </button>
            
        </div>
    </nav>
</div>
);

export default mainNav;