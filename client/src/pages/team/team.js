import React, { Component } from 'react';

// external stylesheet & bootstrap components
import './team.css';


class Team extends Component {
    state = {}
    render() { 
        return ( 
        <div className='container'>
           <div className="teamRow row">
               <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                   <h1 className='teamWork'>BUILT ON TEAMWORK.</h1>
               </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <h3>We're extremely grateful for our instructors,
                         TA's and fellow students in this course. This project is our thanks
                          to all of you who have made this such a successful experience.
                           Please connect so we can continue our path together.</h3>
                </div>
            </div>
                {/* Troy Crawford */}
                <div className="teamRow row">
                    <div className="teamIndv col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <h3>Troy Crawford</h3>
                        <h4>PROJECT TITLE</h4>
                        <h4><a href='https://troycrawford.tech' target='new'>troycrawford.tech</a></h4>
                        <h5>Troy is a Software Developer currently completing the Northwestern University Full Stack Developer Program,
                            where he is focusing on the fundamentals & essentials of JavaScript. With his Bachelor’s Degree in
                            Chemical Engineering from Purdue University and 3+ years in the physical engineering industry,
                        Troy’s technical dexterity, critical thinking, and project managing skills are well accomplished.</h5>
                    </div>
                    <div className="teamIndv col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <img className='Troy' src='https://avatars0.githubusercontent.com/u/30868593?s=400&v=4' alt='Troy Crawford' />
                    </div>
                    <div className="teamIndv col-xs-1 col-sm-1 col-md-1 col-lg-1">
                        <img className='Troy' src='https://icons8.com/icon/446/linkedin' alt='LinkedIn Logo' />
                    </div>
                </div>
            {/* Rachel Brown */}
            <div className="teamRow row"> 
                <div className="teamIndv col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    <img className='Rachel' src='https://icons8.com/icon/446/linkedin' alt='LinkedIn Logo' />
                </div>
                <div className="teamIndv col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <img className='Rachel' src='https://avatars0.githubusercontent.com/u/33067290?s=400&v=4' alt='Rachel Brown'/>
                </div>
                <div className="teamIndv col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <h3>Rachel Brown</h3>
                    <h4>PROJECT TITLE</h4>
                        <h4><a href='https://rachelb.tech/' target='new'>rachelb.tech</a></h4>
                    <h5>Rachel started in law, with a fun little offshoot into the magical world of cooking for television.
                    Now I'm a badass coder, excited to take on the ever-changing landscape of technology.
                    The diversity of my background and experiences is reflected in my fresh and unique approach to web development.
                    When I'm not working or studying, my hobbies include travel, playing golf and boxing. As a former violinist and ballerina,
                     I also make supporting the arts a priority.</h5>
                
                </div>
            </div>
                {/* Peter Boss */}
                <div className="teamRow row"> 
                    <div className="teamIndv col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <h3>Peter Boss</h3>
                        <h3>PROJECT TITLE</h3>
                        <h4><a href='https://peterboss.com/' target='new'>peterboss.com</a></h4>
                        <h5>Rachel started in law, with a fun little offshoot into the magical world of cooking for television.
                        Now I'm a badass coder, excited to take on the ever-changing landscape of technology.
                        The diversity of my background and experiences is reflected in my fresh and unique approach to web development.
                        When I'm not working or studying, my hobbies include travel, playing golf and boxing. As a former violinist and ballerina,
                     I also make supporting the arts a priority.</h5>
                    </div>
                    <div className="teamIndv col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <img className='Rachel' src='https://avatars1.githubusercontent.com/u/30506899?s=400&v=4' alt='Rachel Brown' />
                    </div>
                    <div className="teamIndv col-xs-1 col-sm-1 col-md-1 col-lg-1">
                        <img className='Rachel' src='https://icons8.com/icon/446/linkedin' alt='LinkedIn Logo' />
                    </div>
                </div>
                {/* Shawn Feiz */}
                <div className="teamRow row">
                    <div className="teamIndv col-xs-1 col-sm-1 col-md-1 col-lg-1">
                        <img className='Rachel' src='https://icons8.com/icon/446/linkedin' alt='LinkedIn Logo' />
                    </div>
                    <div className="teamIndv col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <img className='Rachel' src='https://media.licdn.com/dms/image/C4E03AQEIvbiWogQDAg/profile-displayphoto-shrink_800_800/0?e=1530122400&v=beta&t=amzL1Ioq9RTfARFOXY0IpOW6OHYFOmzmUlxq5-cEDfE' alt='Rachel Brown' />
                    </div>
                    <div className="teamIndv col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <h3>Shawn Feiz</h3>
                        <h3>PROJECT TITLE</h3>
                        <h4><a href='https://shawnfeiz.github.io/Portfolio/' target='new'>shawnfeiz.github.io</a></h4>
                        <h5>Rachel started in law, with a fun little offshoot into the magical world of cooking for television.
                        Now I'm a badass coder, excited to take on the ever-changing landscape of technology.
                        The diversity of my background and experiences is reflected in my fresh and unique approach to web development.
                        When I'm not working or studying, my hobbies include travel, playing golf and boxing. As a former violinist and ballerina,
                     I also make supporting the arts a priority.</h5>

                    </div>
                </div>
                {/* Scott Saltzman */}
                <div className="teamRow row">
                    <div className="teamIndv col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <h3>Scott Saltzman</h3>
                        <h3>PROJECT TITLE</h3>
                        <h4><a href='https://salty923.github.io/Bootstrap-Portfolio/' target='new'>salty923.github.io</a></h4>
                        <h5>Rachel started in law, with a fun little offshoot into the magical world of cooking for television.
                        Now I'm a badass coder, excited to take on the ever-changing landscape of technology.
                        The diversity of my background and experiences is reflected in my fresh and unique approach to web development.
                        When I'm not working or studying, my hobbies include travel, playing golf and boxing. As a former violinist and ballerina,
                     I also make supporting the arts a priority.</h5>
                    </div>
                    <div className="teamIndv col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <img className='Rachel' src='https://avatars0.githubusercontent.com/u/13115712?s=460&v=4' alt='Rachel Brown' />
                    </div>
                    <div className="teamIndv col-xs-1 col-sm-1 col-md-1 col-lg-1">
                        <img className='Rachel' src='https://icons8.com/icon/446/linkedin' alt='LinkedIn Logo' />
                    </div>
                </div>
                
        </div>
         )
    }
}
 
export default Team;

