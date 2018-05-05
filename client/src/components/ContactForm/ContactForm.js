import React, { Component } from 'react';
import './ContactForm.css';
import { Row, Col } from '../../components/Grid';

class ContactForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            subject: '',
            email: '',
            message: ''
        };
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({
        name: '',
        email: '',
        message: ''
      });
    };

    render() {
        return (
            <Row>
                <Col size='md-6 lg-6'>
                    <img src={require('./contactPic2.png')} className='LContactPage animated fadeInLeft' alt='Contact Us'/>
                </Col>
                <Col size='md-6 lg-6' className='animated fadeInRight'>
                    <div className='contactHead text-center'>
                        <div className='contactTitle text-center'>
                            <h3>We'd Love To Connect!</h3>
                        </div>
                        
                        <div>
                            <form action='' className='contactForm'>
                                <input onChange={this.handleInputChange} type='text' name='subject' value={this.state.subject} placeholder='Subject' className='form-control'/>
                                <input onChange={this.handleInputChange} type='email' name='email' value={this.state.email} placeholder='Email' className='form-control' required/>
                                <textarea onChange={this.handleInputChange} type='text' name='message' value={this.state.message} placeholder='Message' className='form-control' required/>
                                <input onClick={this.handleFormSubmit} type='submit' class='form-control submitContactForm' value='SEND'/>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
        )       
    }
}

export default ContactForm;
