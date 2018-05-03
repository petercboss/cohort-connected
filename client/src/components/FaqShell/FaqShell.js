import React from 'react';
import './FaqShell.css';
import { Col, Row } from '../../components/Grid';

const FaqShell = (props) => (
    <Row>
        <Col size="md-12 lg-12">
        <div className='FAQHeader text-center animated zoomIn'>
            We hope you find this information useful. If there's a question you can't find the answer to
            then please let us know.        -CC Team
        </div>
            <div id="accordion" className='animated fadeInUp'>
                <div className="card customCard">
                    <div className="btn collapsed faqButton" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseTwo">
                        <h4>What is Cohort Connected?</h4>
                    </div>

                    <div id="collapseOne" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                        Cohort Connected is the leading platform for bootcampers post graduation! Stay connected while you begin your transition
                        into the tech industry. Stay up-to-date on news, events, job posting, and your peers. We know learning doesn't stop
                        at the end of your program, neither should your network.
                    </div>
                    </div>
                </div>

                <div className="card customCard">
                    <div className="btn collapsed faqButton" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <h4>How does my cohort sign up?</h4>
                    </div>

                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                        Interested in having your bootcamp sign-up? <a href='/contact'>Contact us</a> to learn more!
                    </div>
                    </div>
                </div>
                
                <div className="card customCard">
                    <div className="btn collapsed faqButton" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <h4>I love bootcampers! How do I post a job opening for my company?</h4>
                    </div>

                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                        Here at Cohort Connected we value networking and bootcampers! We would love to post your job opening as long as it meets 
                        our requirenments. <a href='/contact'>Contact us</a> with your job opening and we would be happy to spread the word
                        here on the platform!
                    </div>
                    </div>
                </div>

                <div className="card customCard">
                    <div className="btn collapsed faqButton" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                        <h4>Who is the Cohort Connected team?</h4>
                    </div>

                    <div id="collapseFour" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                        We would love to connect with you! <a href='/team'>Learn more</a> about our hardworking team!
                    </div>
                    </div>
                </div>

                 <div className="card customCard lastCard">
                    <div className="btn collapsed faqButton" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                        <h4>I'm not part of a boot camp but I would love to learn more. Any suggestions?</h4>
                    </div>
            
                    <div id="collapseFive" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                        Be sure to checkout your local area for upcoming boot camps. If you're in the Chicagoland area we highly
                        recommend Northwestern's Full Stack Program! Offered in both full-time and part-time programs in both downtown
                        Chicago and Evanston, Illinois! 
                    </div>
                    </div>
                </div>
            </div>
        </Col>
    </Row>
);

export default FaqShell;