import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import './team.css';

class Team extends Component {

    state = {
        team: [
            {
                name: 'Peter Boss',
                title: 'Codesmith',
                image: 'https://avatars1.githubusercontent.com/u/30506899?s=400&v=4',
                bio: 'Peter is a Full Stack Developer with a strong interest in high-powered, clean code. With a rich history in art, design, problem solving, and personality, he will always keep you somewhere between focused and insane.',
                portfolio: 'peterboss.com',
                github: 'https://github.com/petercboss',
                linked: 'https://www.linkedin.com/in/peter-boss/'
            },
            {
                name: 'Rachel B. Brown',
                title: 'Codesmith',
                image: 'https://avatars0.githubusercontent.com/u/33067290?s=400&v=4',
                bio: 'Rachel’s career began in law, with a fun little offshoot into the magical world of cooking for television. Now she’s a badass coder, with a passion for problem solving and a strong eye for design. When she’s not in front of a computer, her hobbies include travel, golf and boxing.',
                portfolio: 'rachelb.tech',
                github: 'https://github.com/rbrown511',
                linked: 'https://www.linkedin.com/in/rachel-basia-brown-83b5b248/'
            },
            {
                name: 'Troy A. Crawford',
                title: 'Codesmith',
                image: 'https://avatars0.githubusercontent.com/u/30868593?s=400&v=4',
                bio: 'Troy is a Software Developer who recently graduated from Northwestern University\'s Full Stack Developer Program, where he focused on the fundamentals & essentials of JavaScript. With his Bachelor’s Degree in Chemical Engineering from Purdue University and 3+ years in the physical engineering industry, Troy’s technical dexterity, critical thinking, and project management skills are thoroughly demonstrated.',
                portfolio: 'troycrawford.tech',
                github: 'https://github.com/tacrawford91',
                linked: 'https://www.linkedin.com/in/tacrawford91/'
            },
            {
                name: 'Shawn Feiz',
                title: 'Codesmith',
                image: 'https://media.licdn.com/dms/image/C4E03AQEIvbiWogQDAg/profile-displayphoto-shrink_800_800/0?e=1530122400&v=beta&t=amzL1Ioq9RTfARFOXY0IpOW6OHYFOmzmUlxq5-cEDfE',
                bio: 'Shawn is a recent graduate from Northwestern University’s Full Stack Developer Program. He has a passion for solving problems and crafting unique solutions with the user in mind. When Shawn isn’t coding, you can find him cooking, enjoying a beautiful day at Wriggly Field, or helping students achieve their goals and dreams. Shawn currently holds a role in the Accounting Information & Management Department at Northwestern’s Kellogg School of Management. .',
                portfolio: 'shawnfeiz.github.io/Portfolio',
                github: 'https://github.com/ShawnFeiz',
                linked: 'https://www.linkedin.com/in/shawnfeiz/'
            },
            {
                name: 'Scott Saltzman',
                title: 'Codesmith',
                image: 'https://avatars0.githubusercontent.com/u/13115712?s=460&v=4',
                bio: 'Scott is a Technical Project Manager at Judlau Contracting. Prior to employment with Judlau, he owned and operated a small tech company specializing in design modeling for the automation of heavy machinery. Outside of work, he volunteers with Team Rubicon responding to natural disasters around the US.',
                portfolio: 'salty923.github.io/Bootstrap-Portfolio/',
                github: 'https://github.com/Salty923',
                linked: 'https://www.linkedin.com/in/scott-saltzman-33949b56/'
            }
        ]
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        this.setState({ team: array });
    }

    componentDidMount() {
        this.shuffleArray(this.state.team);
    }

    render() { 
        return ( 
        <Container>
            <Row>
                <Col size='md-12' className='teamPage animated fadeIn'>
                    <h1 className='teamWork animated zoomIn'>
                        <span className='teamBlurb'>YOU bring CohortConnected to life.<br/>
                        These fun-seekers just wrote the source code.</span>
                        BUILT ON<br/><b>TEAMWORK</b>.
                    </h1>
                    { 
                        this.state.team.map((member, i) => {
                            return (
                            <div className='teamRow animated fadeInUp'>
                                <img className={i%2 === 0 ? 'memberImage float-left' : 'memberImage float-right'} src={member.image} alt={member.name} />
                                <div className={i%2 === 0 ? 'memberSnapshot float-right' : 'memberSnapshot float-left'}>
                                    <h3 className='memberName'>{member.name}</h3>
                                    <h4 className='memberTitle'>{member.title}</h4>
                                    <p className='memberBio'>{member.bio}</p>
                                    <hr className='link-divider' />
                                    <h4 className='memberSites'>
                                        <a href={member.linked} target='_blank' rel='noopener noreferrer'><i className='site-icons fab fa-linkedin-in'></i></a>
                                        <a href={member.github} target='_blank' rel='noopener noreferrer'><i className='site-icons fab fa-github'></i></a>
                                        <a className='memberPortfolio' href={'https://' + member.portfolio} target='_blank' rel='noopener noreferrer'>{member.portfolio.split('/')[0]}</a>
                                    </h4>
                                </div>
                                <div className='clearfix' />
                            </div> )
                        })
                    }
                </Col>            
            </Row>
        </Container>
        )
    };

}
 
export default Team;
