import React from 'react';
import { Link } from 'react-router-dom';
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
                        <li onClick={window.scrollTo(0,0)}><Link to='/team'>Our Team</Link></li>
                        <li onClick={window.scrollTo(0,0)}><Link to='/faq'>FAQs</Link></li>
                        <li onClick={window.scrollTo(0,0)}><Link to='/contact'>Contact</Link></li>
                        <li><a href=''>Terms &amp; Conditions</a></li>
                        <li><a href='https://github.com/rbrown511/cohort-connected' target='_blank'><i className='fa fa-code-fork' aria-hidden='true'></i> Fork Us on GitHub</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='col-md-3'>
                  <div className='block block-links'>
                    <h3 className='block-title'><span>Featured Resources</span></h3>
                    <div className='block-content'>
                      <ul>
                        <li><a href='https://techcrunch.com/' target='_blank'>TechCrunch</a></li>
                        <li><a href='https://www.builtinchicago.org/' target='_blank'>Built In Chicago</a></li>
                        <li><a href='https://www.linkedin.com/' target='_blank'>LinkedIn</a></li>
                        <li><a href='https://stackoverflow.com/' target='_blank'>Stack Overflow</a></li>
                        <li><a href='https://bootcampspot-v2.com/' target='_blank'>BootcampSpot</a></li>
                        <li><a href='http://marktechson.com/' target='_blank'>MarkTechson.com</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='col-md-3'>
                  <div className='block block-links'>
                    <h3 className='block-title'><span>Bookmark-Worthy</span></h3>
                    <div className='block-content'>
                      <ul>
                        <li><a href='https://www.codewars.com/' target='_blank'>Codewars</a></li>
                        <li><a href='https://market.mashape.com/' target='_blank'>Mashape</a></li>
                        <li><a href='https://daneden.github.io/animate.css/' target='_blank'>Animate.css</a></li>
                        <li><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype' target='_blank'>Array.prototype Methods (MDN)</a></li>
                        <li><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype' target='_blank'>String.prototype Methods (MDN)</a></li>
                        <li><a href='https://maximdenisov.gitbooks.io/you-don-t-know-js/content/' target='_blank'>"You Don't Know JS" GitBook</a></li>
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