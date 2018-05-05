import React from 'react';
import { Link } from 'react-router-dom';

import './FaqShell.css';
import { Col, Row } from '../../components/Grid';

const FaqShell = (props) => (
    <Row>
        <Col size='md-12 lg-12' className='teamPage animated fadeInDown'>
        <div className='FAQHeader text-center'>
            <h2>Looking for the documentation? We've got you covered.</h2>
        </div>
            <div id='accordion'>
                {/* One */}
                <div className='card customCard'>
                    <div className='btn collapsed faqButton' data-toggle='collapse' data-target='#collapseOne' aria-expanded='false' aria-controls='collapseOne'>
                        <h4>What is CohortConnected?</h4>
                    </div>
                    <div id='collapseOne' className='collapse' aria-labelledby='headingOne' data-parent='#accordion'>
                        <div className='card-body'>CohortConnected is an all-in-one networking tool that was specifically designed with bootcampers in mind, keeping you connected while you transition into the next stage of your career. Stay up-to-date on technology news and events, share job postings, and ask for feedback from trusted colleagues on coding problems. We know your learning doesn't end at graduation, so neither should the connection to your cohort.</div>
                    </div>
                </div>
                {/* Two */}
                <div className='card customCard'>
                    <div className='btn collapsed faqButton' data-toggle='collapse' data-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>
                        <h4>How do I update my profile information?</h4>
                    </div>

                    <div id='collapseTwo' className='collapse' aria-labelledby='headingTwo' data-parent='#accordion'>
                        <div className='card-body'>Your profile is tied to the information you’ve provided to LinkedIn. We encourage members to keep that information up-to-date to showcase their recent achievements and increase marketability.</div>
                    </div>
                </div>
                {/* Three */}
                <div className='card customCard'>
                    <div className='btn collapsed faqButton' data-toggle='collapse' data-target='#collapseThree' aria-expanded='false' aria-controls='collapseThree'>
                        <h4>Who can I interact with?</h4>
                    </div>
                    <div id='collapseThree' className='collapse' aria-labelledby='headingThree' data-parent='#accordion'>
                        <div className='card-body'>CohortConnected is a moderated site, meaning that you only have access to interact with other members of your cohort. Our aim is to provide a level of comfort and familiarity when sharing ideas or asking for help. We believe that continuing this collaborative relationship with your fellow bootcampers will foster growth and boost your networking potential.</div>
                    </div>
                </div>
                {/* Four */}
                <div className='card customCard'>
                    <div className='btn collapsed faqButton' data-toggle='collapse' data-target='#collapseFour' aria-expanded='false' aria-controls='collapseFour'>
                        <h4>How do I find events that interest me?</h4>
                    </div>
                    <div id='collapseFour' className='collapse' aria-labelledby='headingFour' data-parent='#accordion'>
                        <div className='card-body'>The Events feed on your homepage will display all upcoming events in chronological order. You can filter the events based on area of interest by clicking on any of the category buttons shown. If you are looking to find events happening on a specific date, please select that date from the calender on the right, and a list of the events happening that day, with their start times, will appear below.</div>
                    </div>
                </div>
                {/* Five */}
                <div className='card customCard'>
                    <div className='btn collapsed faqButton' data-toggle='collapse' data-target='#collapseFive' aria-expanded='false' aria-controls='collapseFive'>
                        <h4>Question?</h4>
                    </div>
                    <div id='collapseFive' className='collapse' aria-labelledby='headingFive' data-parent='#accordion'>
                        <div className='card-body'>Answer</div>
                    </div>
                </div>
                {/* Six */}
                <div className='card customCard'>
                    <div className='btn collapsed faqButton' data-toggle='collapse' data-target='#collapseSix' aria-expanded='false' aria-controls='collapseSix'>
                        <h4>Question?</h4>
                    </div>
                    <div id='collapseSix' className='collapse' aria-labelledby='headingSix' data-parent='#accordion'>
                        <div className='card-body'>Answer</div>
                    </div>
                </div>
                {/* Seven */}
                <div className='card customCard'>
                    <div className='btn collapsed faqButton' data-toggle='collapse' data-target='#collapseSeven' aria-expanded='false' aria-controls='collapseSeven'>
                        <h4>Question?</h4>
                    </div>
                    <div id='collapseSeven' className='collapse' aria-labelledby='headingSeven' data-parent='#accordion'>
                        <div className='card-body'>Answer</div>
                    </div>
                </div>
                {/* Eight */}
                <div className='card customCard'>
                    <div className='btn collapsed faqButton' data-toggle='collapse' data-target='#collapseEight' aria-expanded='false' aria-controls='collapseEight'>
                        <h4>Question?</h4>
                    </div>
                    <div id='collapseEight' className='collapse' aria-labelledby='headingEight' data-parent='#accordion'>
                        <div className='card-body'>Answer</div>
                    </div>
                </div>
                {/* Nine */}
                <div className='card customCard'>
                    <div className='btn collapsed faqButton' data-toggle='collapse' data-target='#collapseNine' aria-expanded='false' aria-controls='collapseNine'>
                        <h4>Question?</h4>
                    </div>
                    <div id='collapseNine' className='collapse' aria-labelledby='headingNine' data-parent='#accordion'>
                        <div className='card-body'>Answer</div>
                    </div>
                </div>
                {/* Ten */}
                <div className='card customCard lastCard'>
                    <div className='btn collapsed faqButton' data-toggle='collapse' data-target='#collapseTen' aria-expanded='false' aria-controls='collapseTen'>
                        <h4>Who built CohortConnected?</h4>
                    </div>
                    <div id='collapseTen' className='collapse' aria-labelledby='headingTen' data-parent='#accordion'>
                        <div className='card-body'>We're glad you asked! <Link to='/team'>Learn more</Link> about the kickass developers who make up our team.</div>
                    </div>
                </div>
                {/* End Accordion */}
            </div>
            <h5 className='moreQuestions'>Have a question that we didn't answer? <Link to='/contact'>Send us a message</Link> through our contact page.</h5>
        </Col>
    </Row>
);

export default FaqShell;