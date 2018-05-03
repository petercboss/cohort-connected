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
                        <li><a href='https://app.termly.io/document/terms-of-use-for-website/80285f7c-63c1-4a8d-bb93-4a0c95ff8ef0' target='_blank' rel='noopener noreferrer'>Terms &amp; Conditions</a></li>
                        <li><a href='https://github.com/rbrown511/cohort-connected' target='_blank' rel='noopener noreferrer'><i className='fa fa-code-fork' aria-hidden='true'></i> Fork Us on GitHub</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='col-md-3'>
                  <div className='block block-links'>
                    <h3 className='block-title'><span>Featured Resources</span></h3>
                    <div className='block-content'>
                      <ul>
                        <li><a href='https://techcrunch.com/' target='_blank' rel='noopener noreferrer'>TechCrunch</a></li>
                        <li><a href='https://www.builtinchicago.org/' target='_blank' rel='noopener noreferrer'>Built In Chicago</a></li>
                        <li><a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></li>
                        <li><a href='https://stackoverflow.com/' target='_blank' rel='noopener noreferrer'>Stack Overflow</a></li>
                        <li><a href='https://bootcampspot-v2.com/' target='_blank' rel='noopener noreferrer'>BootcampSpot</a></li>
                        <li><a href='http://marktechson.com/' target='_blank' rel='noopener noreferrer'>MarkTechson.com</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='col-md-3'>
                  <div className='block block-links'>
                    <h3 className='block-title'><span>Bookmark-Worthy</span></h3>
                    <div className='block-content'>
                      <ul>
                        <li><a href='https://www.codewars.com/' target='_blank' rel='noopener noreferrer'>Codewars</a></li>
                        <li><a href='https://market.mashape.com/' target='_blank' rel='noopener noreferrer'>Mashape</a></li>
                        <li><a href='https://daneden.github.io/animate.css/' target='_blank' rel='noopener noreferrer'>Animate.css</a></li>
                        <li><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype' target='_blank' rel='noopener noreferrer'>Array.prototype Methods (MDN)</a></li>
                        <li><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype' target='_blank' rel='noopener noreferrer'>String.prototype Methods (MDN)</a></li>
                        <li><a href='https://maximdenisov.gitbooks.io/you-don-t-know-js/content/' target='_blank' rel='noopener noreferrer'>"You Don't Know JS" GitBook</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='block block-about'>
                    <h3 className='block-title no-underline'>Your Cohort<span className='text-primary'>Connected</span></h3>
                    <div className='block-content'>
                      <p>The team at CohortConnected would like to express our thanks to those who made our bootcamp experience extraordinary. We encourage you to stay connected so that we can continue our paths forward, together.</p>
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