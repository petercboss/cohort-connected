import React, { Component } from 'react';
import './ContactForm.css';
import { Row, Col } from '../../components/Grid';

class ContactForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        console.log(this.state);
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({
        name: '',
        email: '',
        message: ''
      });
      console.log(this.state);
    };

    render() {
        return (
            <Row>
                <Col size='md-6 lg-6' className='LContactPage animated fadeInLeft'>
                </Col>
                <Col size='md-6 lg-6' className='animated fadeInRight'>
                    <div className='contactHead text-center'>
                        <div className='contactTitle text-center'>
                            <h3>We'd Love To Connect!</h3>
                        </div>
                        
                        <div>
                            <form action='' className='contactForm'>
                                <input onChange={this.handleInputChange} type='text' name='name' value={this.state.name} placeholder='Your Name' className='form-control'/>
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
