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
                bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et velit non neque aliquam dignissim sit amet ac mauris. Mauris ultrices, erat at vestibulum semper, est sem eleifend nulla, eu feugiat enim lacus sed dolor. Proin dolor sapien, egestas vitae mauris quis, pretium convallis orci. Pellentesque ac risus a metus vehicula tristique. Integer nec massa.',
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
                bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et velit non neque aliquam dignissim sit amet ac mauris. Mauris ultrices, erat at vestibulum semper, est sem eleifend nulla, eu feugiat enim lacus sed dolor. Proin dolor sapien, egestas vitae mauris quis, pretium convallis orci. Pellentesque ac risus a metus vehicula tristique. Integer nec massa.',
                portfolio: 'troycrawford.tech',
                github: 'https://github.com/tacrawford91',
                linked: 'https://www.linkedin.com/in/tacrawford91/'
            },
            {
                name: 'Shawn Feiz',
                title: 'Codesmith',
                image: 'https://media.licdn.com/dms/image/C4E03AQEIvbiWogQDAg/profile-displayphoto-shrink_800_800/0?e=1530122400&v=beta&t=amzL1Ioq9RTfARFOXY0IpOW6OHYFOmzmUlxq5-cEDfE',
                bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et velit non neque aliquam dignissim sit amet ac mauris. Mauris ultrices, erat at vestibulum semper, est sem eleifend nulla, eu feugiat enim lacus sed dolor. Proin dolor sapien, egestas vitae mauris quis, pretium convallis orci. Pellentesque ac risus a metus vehicula tristique. Integer nec massa.',
                portfolio: 'shawnfeiz.github.io/Portfolio',
                github: 'https://github.com/ShawnFeiz',
                linked: 'https://www.linkedin.com/in/shawnfeiz/'
            },
            {
                name: 'Scott Saltzman',
                title: 'Codesmith',
                image: 'https://avatars0.githubusercontent.com/u/13115712?s=460&v=4',
                bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et velit non neque aliquam dignissim sit amet ac mauris. Mauris ultrices, erat at vestibulum semper, est sem eleifend nulla, eu feugiat enim lacus sed dolor. Proin dolor sapien, egestas vitae mauris quis, pretium convallis orci. Pellentesque ac risus a metus vehicula tristique. Integer nec massa.',
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
                <Col size='md-12' className='teamPage animated fadeInDown'>
                    <h1 className='teamWork'>
                        <span className='teamBlurb'>YOU bring CohortConnected to life.<br/>
                        These fun-seekers just wrote the source code.</span>
                        BUILT ON<br/><b>TEAMWORK</b>.
                    </h1>
                    { 
                        this.state.team.map((member, i) => {
                            return (
                            <div className='teamRow'>
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