import React from 'react';
//import { Link } from 'react-router-dom';
import './footer.css';

const Footer = props => (
    <footer id='footer'>
      <div className='footer-wrapper'> 
        <div className='footer-top'>
          <div className='footer-top-wrapper'>
            <div className='container'>
              <div className='row'>

                <div className='col-md-2'>
                  <div className='block block-links'>
                    <h3 className='block-title'><span>About Us</span></h3>
                    <div className='block-content'>
                      <ul>
                        <li><a href='/team'>Our Team</a></li>
                        <li><a href='/faq'>FAQs</a></li>
                        <li><a href='/contact'>Contact</a></li>
                        <li><a href='#.'>Terms &amp; Conditions</a></li>
                        <li><a href='https://github.com/rbrown511/cohort-connected'><i className='fa fa-code-fork' aria-hidden='true'></i> Fork Us on GitHub</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='col-md-3'>
                  <div className='block block-links'>
                    <h3 className='block-title'><span>Featured Resources</span></h3>
                    <div className='block-content'>
                      <ul>
                        <li><a href='https://techcrunch.com/'>TechCrunch</a></li>
                        <li><a href='https://www.builtinchicago.org/'>Built In Chicago</a></li>
                        <li><a href='#.'>LinkUp</a></li>
                        <li><a href='https://stackoverflow.com/'>Stack Overflow</a></li>
                        <li><a href='https://bootcampspot-v2.com/'>BootcampSpot</a></li>
                        <li><a href='http://marktechson.com/'>MarkTechson.com</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='col-md-3'>
                  <div className='block block-links'>
                    <h3 className='block-title'><span>Bookmark-Worthy</span></h3>
                    <div className='block-content'>
                      <ul>
                        <li><a href='https://www.codewars.com/'>Codewars</a></li>
                        <li><a href='https://market.mashape.com/login'>Mashape</a></li>
                        <li><a href='https://daneden.github.io/animate.css/'>Animate.css</a></li>
                        <li><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype'>Array.prototype Methods (MDN)</a></li>
                        <li><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype'>String.prototype Methods (MDN)</a></li>
                        <li><a href='https://maximdenisov.gitbooks.io/you-don-t-know-js/content/'>"You Don't Know JS" GitBook</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='block block-about'>
                    <h3 className='block-title no-underline'>Keeping Your Cohort<span className='text-primary'>Connected</span></h3>
                    <div className='block-content'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <img className='footer-logo' src={require('./logo-dark.png')} alt='CohortConnected' />
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='footer-bottom-wrapper'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 copyright'>
                  <p>&copy; 2018 CohortConnected. Built by Coding Royalty.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
);

export default Footer;