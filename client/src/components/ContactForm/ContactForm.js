import React, { Component } from 'react';
import Modal from "react-responsive-modal";
import { FormErrors } from './FormErrors';
import './ContactForm.css';
import { Row, Col } from '../../components/Grid';
import axios from 'axios';

class ContactForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            subject: '',
            email: '',
            message: '',
            open: false,
            formErrors: {email:'', subject:'', message:''},
            subjectValid:false,
            emailValid: false,
            messageValid: false,
            formValid: false
        };
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value},
            () => {this.validateField(name, value) });
    };

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let subjectValid = this.state.subjectValid;
        let messageValid = this.state.messageValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'subject':
                subjectValid = value.length >= 1;
                fieldValidationErrors.subject = subjectValid ? '' : ' is too short';
                break;
            case 'message':
                messageValid = value.length >= 1;
                fieldValidationErrors.message = messageValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            subjectValid: subjectValid,
            messageValid: messageValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.subjectValid && this.state.messageValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    handleFormSubmit = e => {
        e.preventDefault();
        this.onOpenModal();
        axios({
            method: 'POST',
            url: '/contact/message/send',
            data: {
                subject: this.state.subject,
                email: this.state.email,
                message: this.state.message
            }
        }).then((response)=> {
            if(response.data.msg === 'success'){
                this.resetForm()
            } else if(response.data.msg === 'fail'){
                alert('message failed to send');
            }
        }) 
    };

    resetForm() {
        this.setState({
            subject: '',
            email: '',
            message: ''
        })
    }

    onOpenModal = () => {
        this.setState({ open: true });
      };
     
    onCloseModal = () => {
    this.setState({ open: false });
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
                            <form className='contactForm'>
                                <div className={`form-group ${this.errorClass(this.state.formErrors.subject)}`}>
                                    <input onChange={this.handleInputChange} type='text' name='subject' value={this.state.subject} placeholder='Subject' className='form-control'/>
                                </div>
                                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                                    <input onChange={this.handleInputChange} type='email' name='email' value={this.state.email} placeholder='Email' className='form-control' required/>
                                </div>
                                <div className={`form-group ${this.errorClass(this.state.formErrors.message)}`}>
                                    <textarea onChange={this.handleInputChange} type='text' name='message' value={this.state.message} placeholder='Message' className='form-control' required/>
                                </div>
                                <div>
                                    <input onClick={this.handleFormSubmit} type='submit' className='form-control submitContactForm' disabled={!this.state.formValid} value='SEND'/>
                                </div>
                                <div className="panel panel-default">
                                    <FormErrors formErrors={this.state.formErrors} />
                                </div>
                            </form>
                        </div>
                    </div>
                </Col>
                <Row>
                    <Col size='md-12 lg-12' className='create'>
                        <Modal open={this.state.open} onClose={this.onCloseModal} className='modal animated fadeInRight' little>
                            <h2>Thanks For The Message!</h2>
                            <h3>A representative from Cohort Connected will be in touch shortly!</h3>
                        </Modal>
                    </Col>
                </Row>
            </Row>
        )       
    }
}

export default ContactForm;
