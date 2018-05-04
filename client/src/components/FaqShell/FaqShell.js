import React from 'react';
import './FaqShell.css';
import { Col, Row } from '../../components/Grid';

const FaqShell = (props) => (
    <Row>
        <Col size='md-12 lg-12'>
        <div className='FAQHeader text-center animated zoomIn'>
            <h4>We hope you find this information useful. Have a question that hasn't been answered? Please let us know.        
                -CC Team
            </h4>
        </div>
            <div id='accordion' className='animated fadeInUp'>
                <div className='card customCard'>
                    <div className='btn collapsed faqButton' data-toggle='collapse' data-target='#collapseOne' aria-expanded='false' aria-controls='collapseTwo'>
                        <h4>What is Cohort Connected?</h4>
                    </div>

                    <div id='collapseOne' className='collapse' aria-labelledby='headingTwo' data-parent='#accordion'>
                    <div className='card-body'>
                        Cohort Connected is the leading platform for bootcampers post graduation! Stay connected while you begin your transition
                        into the tech industry. Stay up-to-date on news, events, job posting, and your peers. We know learning doesn't stop
                        at the end of your program, neither should your network.
                    </div>
                    </div>
                </div>

                <div className='card customCard'>
                    <div className='btn collapsed faqButton' data-toggle='collapse' data-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>
                        <h4>How do I update my profile information?</h4>
                    </div>

                    <div id='collapseTwo' className='collapse' aria-labelledby='headingTwo' data-parent='#accordion'>
                    <div className='card-body'>
                        Your profile is tied to the information you've provided on LinkedIn. By updating your LinkedIn
                         you'll be dynamically update your Cohort Connected profile. We encourage members to keep their 
                        profiles up-to-date in order to showcase their recent achievements and increase marketability.  
                    </div>
                    </div>
                </div>
                
                <div className='card customCard'>
                    <div className='btn collapsed faqButton' data-toggle='collapse' data-target='#collapseThree' aria-expanded='false' aria-controls='collapseThree'>
                        <h4>How do I filter events?</h4>
                    </div>

                    <div id='collapseThree' className='collapse' aria-labelledby='headingThree' data-parent='#accordion'>
                    <div className='card-body'>
                        You can filter the events on the home page based on categories like networking, startups, conference etc.
                        To do so, click on the category tag button and watch the magic happen!
                    </div>
                    </div>
                </div>

                <div className='card customCard'>
                    <div className='btn collapsed faqButton' data-toggle='collapse' data-target='#collapseFour' aria-expanded='false' aria-controls='collapseThree'>
                        <h4>My company is currently hiring and they love bootcampers! How do I share the opening?</h4>
                    </div>

                    <div id='collapseFour' className='collapse' aria-labelledby='headingThree' data-parent='#accordion'>
                    <div className='card-body'>
                        As fellow bootcampers we love to hear about job openings. If your company is looking to hire developers
                        then check out our job posting board located on the home page. You can post your openings there for all
                        members to see!
                    </div>
                    </div>
                </div>

                 <div className='card customCard lastCard'>
                    <div className='btn collapsed faqButton' data-toggle='collapse' data-target='#collapseFive' aria-expanded='false' aria-controls='collapseThree'>
                        <h4>Who is the Cohort Connected team?</h4>
                    </div>
            
                    <div id='collapseFive' className='collapse' aria-labelledby='headingThree' data-parent='#accordion'>
                    <div className='card-body'>
                        We would love to connect with you! <a href='/team'>Learn more</a> about our hardworking team!
                    </div>
                    </div>
                </div>
            </div>
        </Col>
    </Row>
);

export default FaqShell;